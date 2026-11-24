import { featuredPlayers } from '@/data/featuredPlayers';
import type { PlayerProfile, Position } from '@/data/squad';

type WikiPage = {
  index?: number;
  title: string;
  fullurl?: string;
  pageimage?: string;
  thumbnail?: { source: string };
  terms?: { description?: string[] };
  extract?: string;
  pageprops?: { disambiguation?: string };
};

const footballer =
  /footballer|soccer player|football (?:player|goalkeeper|forward|midfielder|defender|striker|winger)|(?:association football|soccer)\s+(?:player|goalkeeper|forward|midfielder|defender|striker|winger)/i;

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
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l')
    .replace(/ø/g, 'o')
    .replace(/ß/g, 'ss')
    .replace(/['’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

function editDistance(a: string, b: string) {
  const distances = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0
    )
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      distances[i][j] = Math.min(
        distances[i - 1][j] + 1,
        distances[i][j - 1] + 1,
        distances[i - 1][j - 1] + Number(a[i - 1] !== b[j - 1])
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        distances[i][j] = Math.min(
          distances[i][j],
          distances[i - 2][j - 2] + 1
        );
      }
    }
  }
  return distances[a.length][b.length];
}

function nameScore(key: string, name: string) {
  const value = normalize(name);
  if (value === key) return 0;
  if (value.startsWith(key + ' ')) return 1;
  const nameWords = value.split(' ');
  const words = key.split(' ');
  if (words.every((word) => nameWords.includes(word))) return 2;
  if (words.every((word) => nameWords.some((part) => part.startsWith(word))))
    return 3;
  if (
    words.every((word) =>
      nameWords.some(
        (part) =>
          word === part ||
          (word.length >= 4 &&
            Math.abs(word.length - part.length) <= 2 &&
            editDistance(word, part) <= (word.length >= 8 ? 2 : 1))
      )
    )
  )
    return 4;
  return value.includes(key) ? 5 : 6;
}

function playerScore(key: string, player: PlayerProfile) {
  return Math.min(
    ...[player.name, ...(player.aliases ?? [])].map((name) =>
      nameScore(key, name)
    )
  );
}

export function localPlayers(query: string) {
  if (!query.trim()) return featuredPlayers;
  const key = normalize(query);
  if (!key) return [];
  return featuredPlayers
    .map((player) => ({ player, score: playerScore(key, player) }))
    .filter(({ score }) => score < 6)
    .sort((a, b) => a.score - b.score)
    .map(({ player }) => player);
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
    prop: 'pageimages|pageterms|info|pageprops|extracts',
    ppprop: 'disambiguation',
    exintro: '1',
    explaintext: '1',
    exsentences: '2',
    exlimit: '20',
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
  const key = normalize(query);
  if (!key) return featured;

  const results = await Promise.allSettled([
    searchWiki(
      {
        generator: 'prefixsearch',
        gpssearch: key,
        gpslimit: '20',
        gpsnamespace: '0',
      },
      signal
    ),
    searchWiki(
      {
        generator: 'search',
        gsrsearch: key + ' footballer',
        gsrlimit: '20',
        gsrnamespace: '0',
      },
      signal
    ),
  ]);
  if (results.every((result) => result.status === 'rejected'))
    throw new Error('Player search unavailable');
  const players = new Map(
    featured.map((player) => [normalize(player.id), player])
  );
  for (const result of results) {
    if (result.status === 'rejected') continue;
    for (const page of result.value) {
      const existing = players.get(normalize(page.title));
      if (
        'disambiguation' in (page.pageprops ?? {}) ||
        (!existing &&
          !footballer.test(
            (page.terms?.description?.[0] ?? '') + ' ' + (page.extract ?? '')
          ))
      )
        continue;
      const wiki = wikiProfile(page);
      players.set(
        normalize(page.title),
        existing
          ? {
              ...existing,
              image: existing.image ?? wiki.image,
              imageSource: existing.imageSource ?? wiki.imageSource,
            }
          : wiki
      );
    }
  }
  return [...players.values()]
    .sort((a, b) => playerScore(key, a) - playerScore(key, b))
    .slice(0, 32);
}
