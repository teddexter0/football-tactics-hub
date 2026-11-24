'use client';

import { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { localPlayers, searchPlayers } from '@/data/searchPlayers';
import {
  normalizePosition,
  type PlayerProfile,
  type Position,
  type SquadCard,
} from '@/data/squad';
import { CardFace, RatingDetails } from '@/components/SquadCard';

type SearchResult = {
  query: string;
  players: PlayerProfile[];
  failed?: boolean;
};
const toCard = (
  profile: PlayerProfile,
  edition?: SquadCard['edition']
): SquadCard => {
  const { editions, ...card } = profile;
  return {
    ...card,
    position: edition?.position ?? card.position ?? editions?.[0]?.position,
    edition,
  };
};

export default function PlayerMarket({
  position,
  current,
  onPick,
}: {
  position?: Position;
  current?: SquadCard;
  onPick: (card: SquadCard) => void;
}) {
  const [input, setInput] = useState(current?.name ?? '');
  const [result, setResult] = useState<SearchResult>();
  const [selectedId, setSelectedId] = useState<string | undefined>(current?.id);
  const [editionId, setEditionId] = useState<string | undefined>(
    current?.edition?.id
  );
  const [onlyPosition, setOnlyPosition] = useState(false);
  const preview = useRef<HTMLDivElement>(null);
  const query = input.trim();
  const isSearching = query.length > 1 && result?.query !== query;
  const players =
    query.length === 1
      ? []
      : result?.query === query
        ? result.players
        : localPlayers(query);
  const selected = players.find((player) => player.id === selectedId);
  const editions = selected?.editions ?? [];
  const matching = position
    ? editions.filter(
        (edition) =>
          normalizePosition(edition.position) === normalizePosition(position)
      )
    : editions;
  const visible = (onlyPosition ? matching : editions)
    .slice()
    .sort((a, b) => b.overall - a.overall);
  const chosenEdition =
    visible.find((edition) => edition.id === editionId) ?? visible[0];

  useEffect(() => {
    if (query.length < 2) return;
    const controller = new AbortController();
    const useFallback = () =>
      setResult({ query, players: localPlayers(query), failed: true });
    const deadline = window.setTimeout(() => {
      controller.abort();
      useFallback();
    }, 8500);
    const timeout = window.setTimeout(
      () => {
        searchPlayers(query, controller.signal)
          .then((players) => {
            if (!controller.signal.aborted) setResult({ query, players });
          })
          .catch(() => {
            if (!controller.signal.aborted) useFallback();
          })
          .finally(() => clearTimeout(deadline));
      },
      query ? 250 : 0
    );
    return () => {
      clearTimeout(timeout);
      clearTimeout(deadline);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="studio-market">
      <label className="studio-search">
        <Search size={19} />
        <input
          autoFocus
          type="search"
          maxLength={90}
          aria-label="Search footballers"
          placeholder="Search by name or nickname"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setSelectedId(undefined);
            setEditionId(undefined);
            setOnlyPosition(false);
          }}
        />
      </label>
      <p className="studio-market-status" role="status">
        {isSearching
          ? 'Searching for players…'
          : query.length === 1
            ? 'Enter at least two characters.'
            : result?.query === query && result.failed
              ? 'Online search is unavailable. Showing built-in results.'
              : query
                ? players.length +
                  (players.length === 1 ? ' result' : ' results')
                : 'Featured FIFA cards'}
      </p>
      <div className="studio-market-layout">
        <div className="studio-results" aria-label="Player results">
          {players.map((player) => (
            <button
              type="button"
              key={player.id}
              aria-pressed={selectedId === player.id}
              onClick={() => {
                setSelectedId(player.id);
                setOnlyPosition(false);
                const bestFit = player.editions
                  ?.filter(
                    (edition) =>
                      !position ||
                      normalizePosition(edition.position) ===
                        normalizePosition(position)
                  )
                  .sort((a, b) => b.overall - a.overall)[0];
                setEditionId(bestFit?.id);
                if (window.matchMedia('(max-width: 540px)').matches) {
                  requestAnimationFrame(() =>
                    preview.current?.scrollIntoView({ block: 'nearest' })
                  );
                }
              }}
            >
              <CardFace card={player} />
              <span>
                <strong>{player.name}</strong>
                <small>{player.description || player.position}</small>
              </span>
              {Boolean(player.editions?.length) && (
                <span className="studio-version-count">
                  {player.editions?.length} editions
                </span>
              )}
            </button>
          ))}
        </div>
        {!selected &&
          query.length > 1 &&
          !isSearching &&
          players.length === 0 && (
            <div className="studio-market-preview">
              <p className="studio-market-status">
                Add a custom profile if the player is missing from search.
              </p>
              <button
                type="button"
                onClick={() =>
                  onPick({
                    id: 'custom:' + query.toLowerCase(),
                    name: query,
                    position,
                  })
                }
              >
                Add {query}
              </button>
            </div>
          )}
        {selected && (
          <div className="studio-market-preview" ref={preview}>
            <div className="studio-preview-player">
              <CardFace card={selected} />
              <strong>{selected.name}</strong>
            </div>
            {position && editions.length > 0 && (
              <label className="studio-check">
                <input
                  type="checkbox"
                  checked={onlyPosition}
                  onChange={(event) => setOnlyPosition(event.target.checked)}
                />{' '}
                Filter editions for {position}
              </label>
            )}
            {visible.length ? (
              <label className="studio-field">
                <span>Card edition</span>
                <select
                  value={chosenEdition?.id}
                  onChange={(event) => setEditionId(event.target.value)}
                >
                  {visible.map((edition) => (
                    <option key={edition.id} value={edition.id}>
                      {edition.overall} {edition.position} · {edition.label}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <p className="studio-market-status">
                {onlyPosition
                  ? 'No rated edition for this position.'
                  : 'Profile card · rating unavailable'}
              </p>
            )}
            <RatingDetails card={toCard(selected, chosenEdition)} />
            <button
              className="studio-primary"
              type="button"
              disabled={onlyPosition && !chosenEdition}
              onClick={() => onPick(toCard(selected, chosenEdition))}
            >
              Add to squad
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
