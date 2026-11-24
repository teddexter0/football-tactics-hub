import { featuredPlayers } from '@/data/featuredPlayers';
import type { PlayerProfile, Position } from '@/data/squad';

type WikiPage = {
  index?: number;
  title: string;
  fullurl?: string;
  pageimage?: string;
  thumbnail?: { source: string };
  terms?: { description?: string[] };
};

const footballer =
  /footballer|soccer player|football (?:player|goalkeeper|forward|midfielder|defender|striker|winger|manager|coach)/i;

function positionFromDescription(description: string): Position | undefined {
  const clues: [RegExp, Position][] = [
    [/goalkeeper/i, 'GK'],
    [/left[- ]back/i, 'LB'],
    [/right[- ]back/i, 'RB'],
    [/defender|centre[- ]back/i, 'CB'],
    [/defensive midfielder/i, 'CDM'],
    [/attacking midfielder/i, 'CAM'],
    [/midfielder/i, 'CM'],
    [/left winger/i, 'LW'],
    [/right winger/i, 'RW'],
    [/striker|forward/i, 'ST'],
  ];
  return clues.find(([pattern]) => pattern.test(description))?.[1];
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function localPlayers(query: string) {
  const key = normalize(query);
  return featuredPlayers.filter((player) =>
    normalize(player.id + ' ' + player.description).includes(key)
  );
}

function wikiProfile(page: WikiPage): PlayerProfile {
  const description = page.terms?.description?.[0] ?? '';
  const image = page.thumbnail?.source;
  const commons =
    image &&
    /^https:\/\/(?:upload|thumb)\.wikimedia\.org\/wikipedia\/commons\//.test(
      image
    );
  return {
    id: page.title,
    name: page.title.replace(/ \(.*\)$/, ''),
    source: page.fullurl,
    description,
    position: positionFromDescription(description),
    image: commons ? image : undefined,
    imageSource:
      commons && page.pageimage
        ? 'https://commons.wikimedia.org/wiki/File:' +
          encodeURIComponent(page.pageimage)
        : undefined,
  };
}

async function searchWiki(
  extra: Record<string, string>,
  signal: AbortSignal
): Promise<WikiPage[]> {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    formatversion: '2',
    origin: '*',
    redirects: '1',
    prop: 'pageimages|pageterms|info',
    inprop: 'url',
    wbptterms: 'description',
    pithumbsize: '250',
    pilimit: '24',
    pilicense: 'free',
    piprop: 'thumbnail|name',
    ...extra,
  });
  const response = await fetch('https://en.wikipedia.org/w/api.php?' + params, {
    signal,
  });
  if (!response.ok) throw new Error('Player search unavailable');
  const data: { error?: unknown; query?: { pages?: WikiPage[] } } =
    await response.json();
  if (data.error) throw new Error('Player search unavailable');
  return (data.query?.pages ?? []).sort(
    (a, b) => (a.index ?? 0) - (b.index ?? 0)
  );
}

export async function searchPlayers(query: string, signal: AbortSignal) {
  const featured = localPlayers(query);
  const exact = featured.length
    ? searchWiki(
        { titles: featured.map((player) => player.id).join('|') },
        signal
      )
    : Promise.resolve([]);
  const search = query
    ? searchWiki(
        {
          generator: 'search',
          gsrsearch: query.replace(/["{}\[\]<>:*|]/g, ' ') + ' footballer',
          gsrlimit: '24',
          gsrnamespace: '0',
        },
        signal
      )
    : Promise.resolve([]);
  const [exactResult, searchResult] = await Promise.allSettled([exact, search]);
  if ((query ? searchResult : exactResult).status === 'rejected')
    throw new Error('Player search unavailable');
  const pages = searchResult.status === 'fulfilled' ? searchResult.value : [];
  const exactPages =
    exactResult.status === 'fulfilled' ? exactResult.value : [];
  const seen = new Set<string>();
  return [
    ...featured.map((player) => {
      seen.add(player.id);
      const page = [...exactPages, ...pages].find(
        (item) => item.title === player.id
      );
      if (!page) return player;
      const wiki = wikiProfile(page);
      return {
        ...player,
        image: player.image ?? wiki.image,
        imageSource: player.imageSource ?? wiki.imageSource,
        source: wiki.source ?? player.source,
      };
    }),
    ...pages
      .filter(
        (page) =>
          !seen.has(page.title) &&
          footballer.test(page.terms?.description?.[0] ?? '')
      )
      .map(wikiProfile),
  ];
}
