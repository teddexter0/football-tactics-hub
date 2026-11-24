'use client';

import { Plus, User } from 'lucide-react';
import type { SquadCard } from '@/data/squad';

export function CardFace({ card }: { card: SquadCard }) {
  return (
    <span className="studio-face" aria-hidden>
      <User />
      {card.image && (
        // Wikimedia file links are shown with the full card details.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={card.image}
          src={card.image}
          alt=""
          decoding="async"
          draggable={false}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      )}
    </span>
  );
}

export function CardTile({
  card,
  position,
  emptyLabel,
}: {
  card?: SquadCard;
  position?: string;
  emptyLabel: string;
}) {
  return (
    <>
      <span className="studio-card-top">
        <span>
          {position || card?.edition?.position || card?.position || '—'}
        </span>
        {card?.edition && (
          <strong title={card.edition.label + ' · ' + card.edition.position}>
            {card.edition.overall}
          </strong>
        )}
      </span>
      {card ? (
        <CardFace card={card} />
      ) : (
        <span className="studio-empty-icon">
          <Plus size={19} />
        </span>
      )}
      <span className="studio-card-name">{card?.name || emptyLabel}</span>
    </>
  );
}

export function RatingDetails({ card }: { card: SquadCard }) {
  return (
    <div className="studio-rating">
      {card.edition && (
        <>
          <div className="studio-rating-title">
            <strong>
              {card.edition.overall} {card.edition.position}
            </strong>
            <a href={card.edition.url} target="_blank" rel="noreferrer">
              {card.edition.label} ↗
            </a>
          </div>
          <dl className="studio-stats">
            {card.edition.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </>
      )}
      <div className="studio-source">
        {card.source && (
          <a href={card.source} target="_blank" rel="noreferrer">
            Player profile ↗
          </a>
        )}
        {card.imageSource && (
          <a href={card.imageSource} target="_blank" rel="noreferrer">
            Photo &amp; license ↗
          </a>
        )}
      </div>
    </div>
  );
}
