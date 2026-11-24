'use client';

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import {
  ArrowLeftRight,
  Check,
  Crosshair,
  Expand,
  Move,
  Plus,
  Search,
  Settings2,
  Undo2,
  X,
} from 'lucide-react';
import { oppositionFormations } from '@/data/formations';
import { roleDescriptions } from '@/data/playerRoles';
import { CardFace, CardTile, RatingDetails } from '@/components/SquadCard';
import PlayerMarket from '@/components/PlayerMarket';
import {
  bench,
  createSquad,
  formations,
  instructionFields,
  phaseNames,
  phases,
  positionRoles,
  positions,
  reserves,
  shape,
  starters,
  normalizePosition,
  type BoardMark,
  type Phase,
  type Squad,
  type SquadCard,
} from '@/data/squad';
import './SquadStudio.css';

const storageKey = 'football-tactics-hub.squads.v1';
const initial = {
  squads: [createSquad('first-xi', 'My XI')],
  active: 'first-xi',
};
type SavedSquads = typeof initial;
type Dialog =
  | { kind: 'player'; slot: number }
  | { kind: 'search'; slot?: number }
  | { kind: 'new' | 'delete' };
type Tool = 'move' | 'swap' | BoardMark['type'];
type Point = BoardMark['start'];
const tools: { value: Tool; label: string }[] = [
  { value: 'move', label: 'Position' },
  { value: 'swap', label: 'Swap' },
  { value: 'run', label: 'Run' },
  { value: 'pass', label: 'Pass' },
  { value: 'press', label: 'Press' },
  { value: 'zone', label: 'Zone' },
];
const markColors = {
  run: '#a6dfff',
  pass: '#f4df90',
  press: '#ffa0cb',
  zone: '#ad91ff',
};

function slotName(slot: number) {
  if (slot < 11) return 'Starter ' + (slot + 1);
  return slot < 18 ? 'Sub ' + (slot - 10) : 'Reserve ' + (slot - 17);
}

function Popup({
  title,
  children,
  close,
}: {
  title: string;
  children: ReactNode;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    dialog?.querySelector<HTMLInputElement>('input[type="search"]')?.focus();
    return () => dialog?.close();
  }, []);
  return (
    <dialog
      className="studio-popup"
      ref={ref}
      aria-labelledby="studio-popup-title"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section>
        <header>
          <h2 id="studio-popup-title">{title}</h2>
          <button type="button" aria-label="Close" onClick={close}>
            <X size={21} />
          </button>
        </header>
        {children}
      </section>
    </dialog>
  );
}

function PitchLines({
  marks,
  first,
}: {
  marks: BoardMark[];
  first: Point | null;
}) {
  return (
    <svg
      className="studio-pitch-lines"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {(['run', 'pass', 'press'] as const).map((type) => (
          <marker
            key={type}
            id={'studio-' + type}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path fill={markColors[type]} d="M0,0 L6,3 L0,6 Z" />
          </marker>
        ))}
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth=".26">
        <rect x="3" y="3" width="94" height="94" rx=".35" />
        <path d="M3 50h94 M22 3v15h56V3 M22 97V82h56v15 M37 3v6h26V3 M37 97v-6h26v6 M44 3V1h12v2 M44 97v2h12v-2" />
        <ellipse cx="50" cy="50" rx="15" ry="9" />
      </g>
      <g fill="currentColor">
        <circle cx="50" cy="50" r=".45" />
        <circle cx="50" cy="13" r=".38" />
        <circle cx="50" cy="87" r=".38" />
      </g>
      {marks.map(({ start, end, type }, i) =>
        type === 'zone' ? (
          <rect
            key={i}
            x={Math.min(start.x, end.x)}
            y={Math.min(start.y, end.y)}
            width={Math.abs(start.x - end.x)}
            height={Math.abs(start.y - end.y)}
            fill={markColors[type]}
            fillOpacity=".2"
            stroke={markColors[type]}
            strokeWidth=".25"
            strokeDasharray="1 .6"
          />
        ) : (
          <line
            key={i}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            strokeWidth=".42"
            markerEnd={'url(#studio-' + type + ')'}
            stroke={markColors[type]}
            strokeDasharray={type === 'run' ? undefined : '1.2 .6'}
          />
        )
      )}
      {first && <circle cx={first.x} cy={first.y} r="1" fill="#eee8ff" />}
    </svg>
  );
}

export default function SquadStudio() {
  const [saved, setSaved] = useState<SavedSquads>(initial);
  const [ready, setReady] = useState(false);
  const [storageIssue, setStorageIssue] = useState(false);
  const [phase, setPhase] = useState<Phase>('kickoff');
  const [tool, setTool] = useState<Tool>('move');
  const [opposition, setOpposition] = useState(-1);
  const [zoom, setZoom] = useState(false);
  const [first, setFirst] = useState<Point | null>(null);
  const [swapSlot, setSwapSlot] = useState<number | null>(null);
  const [placing, setPlacing] = useState<number | null>(null);
  const [dialog, setDialog] = useState<Dialog | null>(null);
  const [dragging, setDragging] = useState<{
    slot: number;
    point: Point;
    target?: number;
  } | null>(null);
  const [message, setMessage] = useState('');
  const pitch = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    slot: number;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);
  const studio = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const suppressClick = useRef(false);
  const squad =
    saved.squads.find((item) => item.id === saved.active) ?? saved.squads[0];
  const setup = squad.setups[phase];
  const filled = (slots: number[]) =>
    slots.filter((slot) => squad.cards[slot]).length;

  useEffect(() => {
    try {
      const data = localStorage.getItem(storageKey);
      if (data) {
        const previous: SavedSquads = JSON.parse(data);
        if (previous.squads?.length) setSaved(previous);
      }
    } catch {
      setStorageIssue(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(saved));
      setStorageIssue(false);
    } catch {
      setStorageIssue(true);
    }
  }, [ready, saved]);

  function updateSquad(update: (squad: Squad) => Squad) {
    setSaved((current) => ({
      ...current,
      squads: current.squads.map((item) =>
        item.id === squad.id ? update(item) : item
      ),
    }));
  }

  function updatePhase(
    update: (setup: Squad['setups'][Phase]) => Squad['setups'][Phase]
  ) {
    updateSquad((current) => ({
      ...current,
      setups: { ...current.setups, [phase]: update(current.setups[phase]) },
    }));
  }

  function updateSpot(
    slot: number,
    point: Partial<(typeof setup.spots)[number]>
  ) {
    updatePhase((current) => ({
      ...current,
      spots: current.spots.map((spot, index) =>
        index === slot ? { ...spot, ...point } : spot
      ),
    }));
  }

  function updateInstruction(
    slot: number,
    update: (
      instruction: (typeof setup.instructions)[string]
    ) => (typeof setup.instructions)[string]
  ) {
    const key = squad.cards[slot]?.id ?? 'slot:' + slot;
    updatePhase((current) => ({
      ...current,
      instructions: {
        ...current.instructions,
        [key]: update(current.instructions[key] ?? { choices: {} }),
      },
    }));
  }

  function swap(from: number, to: number) {
    setSwapSlot(null);
    if (from === to) {
      setMessage('');
      return;
    }
    updateSquad((current) => {
      const cards = { ...current.cards };
      const firstCard = cards[from];
      const otherCard = cards[to];
      if (otherCard) cards[from] = otherCard;
      else delete cards[from];
      if (firstCard) cards[to] = firstCard;
      else delete cards[to];
      return { ...current, cards };
    });
    setMessage(slotName(from) + ' and ' + slotName(to) + ' switched.');
  }

  function addPlayer(card: SquadCard, target?: number) {
    const available = starters.filter((slot) => !squad.cards[slot]);
    const cardPosition = card.edition?.position ?? card.position;
    const existing = Object.keys(squad.cards)
      .map(Number)
      .find((slot) => squad.cards[slot].id === card.id);
    const samePosition = available.find(
      (slot) => setup.spots[slot].position === cardPosition
    );
    const similarPosition = cardPosition
      ? available.find(
          (slot) =>
            normalizePosition(setup.spots[slot].position) ===
            normalizePosition(cardPosition)
        )
      : undefined;
    const nextOutfield = available.find(
      (slot) => setup.spots[slot].position !== 'GK'
    );
    const nextBench = [...bench, ...reserves].find(
      (slot) => !squad.cards[slot]
    );
    const slot =
      target ??
      existing ??
      samePosition ??
      similarPosition ??
      nextOutfield ??
      nextBench ??
      available[0];
    if (slot === undefined) {
      setMessage('Squad is full. Select a card to replace a player.');
      closeDialog();
      return;
    }

    updateSquad((current) => {
      const cards = { ...current.cards, [slot]: card };
      const duplicate = Object.keys(current.cards)
        .map(Number)
        .find((key) => key !== slot && current.cards[key].id === card.id);
      if (duplicate !== undefined) {
        if (current.cards[slot]) cards[duplicate] = current.cards[slot];
        else delete cards[duplicate];
      }
      const setups = { ...current.setups };
      for (const key of phases) {
        const instructions = { ...setups[key].instructions };
        const placeholder = instructions['slot:' + slot];
        if (placeholder && !instructions[card.id])
          instructions[card.id] = placeholder;
        delete instructions['slot:' + slot];
        setups[key] = { ...setups[key], instructions };
      }
      return { ...current, cards, setups };
    });
    setMessage(card.name + ' added to ' + slotName(slot) + '.');
    closeDialog();
  }

  function openDialog(next: Dialog) {
    if (!dialog)
      opener.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
    setDialog(next);
  }

  function closeDialog() {
    setDialog(null);
    requestAnimationFrame(() => opener.current?.focus({ preventScroll: true }));
  }

  function resetInteraction() {
    setFirst(null);
    setSwapSlot(null);
    setPlacing(null);
    setMessage('');
  }

  function clickCard(slot: number) {
    if (placing !== null) {
      if (slot === placing) {
        setPlacing(null);
        setMessage('');
      }
      return;
    }
    if (tool === 'swap') {
      if (swapSlot !== null) swap(swapSlot, slot);
      else {
        setSwapSlot(slot);
        setMessage(
          'Select a second slot to switch with ' + slotName(slot) + '.'
        );
      }
      return;
    }
    if (tool !== 'move' && slot < 11) {
      clickPitch(setup.spots[slot]);
      return;
    }
    openDialog({
      kind: squad.cards[slot] || slot < 11 ? 'player' : 'search',
      slot,
    });
  }

  function pitchPoint(x: number, y: number): Point | null {
    const bounds = pitch.current?.getBoundingClientRect();
    if (
      !bounds ||
      x < bounds.left ||
      x > bounds.right ||
      y < bounds.top ||
      y > bounds.bottom
    )
      return null;
    return {
      x: ((x - bounds.left) * 100) / bounds.width,
      y: ((y - bounds.top) * 100) / bounds.height,
    };
  }

  function placeCard(slot: number, point: Point) {
    updateSpot(slot, {
      x: Math.max(10, Math.min(90, point.x)),
      y: Math.max(8, Math.min(92, point.y)),
    });
    setMessage('Position updated for ' + phaseNames[phase] + '.');
  }

  function clickPitch(point: Point) {
    if (placing !== null) {
      placeCard(placing, point);
      setPlacing(null);
      return;
    }
    if (tool === 'move' || tool === 'swap') return;
    if (!first) setFirst(point);
    else {
      if (Math.hypot(point.x - first.x, point.y - first.y) > 1) {
        updatePhase((current) => ({
          ...current,
          marks: [...current.marks, { start: first, end: point, type: tool }],
        }));
      }
      setFirst(null);
    }
  }

  function dropTarget(x: number, y: number) {
    const element = document
      .elementFromPoint(x, y)
      ?.closest<HTMLElement>('[data-squad-slot]');
    return element && studio.current?.contains(element)
      ? Number(element.dataset.squadSlot)
      : undefined;
  }

  function grab(event: PointerEvent<HTMLButtonElement>, slot: number) {
    if (
      !event.isPrimary ||
      event.button !== 0 ||
      placing !== null ||
      (tool !== 'move' && tool !== 'swap')
    )
      return;
    suppressClick.current = false;
    drag.current = { slot, x: event.clientX, y: event.clientY, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function move(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || !drag.current) return;
    const state = drag.current;
    if (
      !state.moved &&
      Math.hypot(event.clientX - state.x, event.clientY - state.y) < 7
    )
      return;
    state.moved = true;
    setDragging({
      slot: state.slot,
      point: { x: event.clientX, y: event.clientY },
      target: dropTarget(event.clientX, event.clientY),
    });
  }

  function finishDrag() {
    drag.current = null;
    setDragging(null);
  }

  function release(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || !drag.current) return;
    const { slot, moved } = drag.current;
    finishDrag();
    if (!moved) return;
    suppressClick.current = true;
    const target = dropTarget(event.clientX, event.clientY);
    if (target !== undefined && target !== slot) swap(slot, target);
    else if (tool === 'move' && slot < 11) {
      const point = pitchPoint(event.clientX, event.clientY);
      if (point) placeCard(slot, point);
    }
  }

  function cardButton(slot: number, onPitch = false) {
    const spot = onPitch ? setup.spots[slot] : undefined;
    const card = squad.cards[slot];
    return (
      <button
        key={slot}
        type="button"
        data-squad-slot={slot}
        className={
          'studio-card ' + (onPitch ? 'studio-pitch-card' : 'studio-tray-card')
        }
        data-filled={Boolean(card)}
        data-moving={dragging?.slot === slot}
        data-highlight={
          swapSlot === slot ||
          placing === slot ||
          (dragging?.target === slot && dragging.slot !== slot)
        }
        data-instructions={Boolean(
          setup.instructions[card?.id ?? 'slot:' + slot]
        )}
        style={spot ? { left: spot.x + '%', top: spot.y + '%' } : undefined}
        aria-label={
          slotName(slot) +
          (spot ? ' ' + spot.position : '') +
          (card ? ' · ' + card.name : ' · empty')
        }
        title={
          card
            ? card.name +
              (card.edition
                ? ' · ' + card.edition.overall + ' ' + card.edition.position
                : '')
            : 'Add to ' + slotName(slot)
        }
        onPointerDown={(event) => {
          if (event.isPrimary) suppressClick.current = false;
          grab(event, slot);
        }}
        onPointerMove={move}
        onPointerUp={release}
        onPointerCancel={finishDrag}
        onLostPointerCapture={finishDrag}
        onClick={(event) => {
          event.stopPropagation();
          if (event.detail !== 0 && suppressClick.current) {
            suppressClick.current = false;
            return;
          }
          clickCard(slot);
        }}
      >
        <CardTile
          card={card}
          position={spot?.position}
          emptyLabel={onPitch ? 'Add' : slotName(slot)}
        />
      </button>
    );
  }

  const selectedSlot = dialog && 'slot' in dialog ? dialog.slot : undefined;
  const selectedCard =
    selectedSlot !== undefined ? squad.cards[selectedSlot] : undefined;
  const selectedSpot =
    selectedSlot !== undefined ? setup.spots[selectedSlot] : undefined;
  const selectedInstruction =
    selectedSlot !== undefined
      ? setup.instructions[selectedCard?.id ?? 'slot:' + selectedSlot]
      : undefined;

  return (
    <main ref={studio} className="studio" data-phase={phase}>
      <div className="studio-shell">
        <header className="studio-mast">
          <div className="studio-brand">
            <Crosshair size={23} />
            <span>Football Tactics Hub</span>
          </div>
          <Link href="/legends">
            Legendary teams <span aria-hidden="true">↗</span>
          </Link>
        </header>
        <div className="studio-heading">
          <div>
            <h1>Squad Builder</h1>
            <span className="studio-save" role="status">
              {!ready ? (
                'Loading squads'
              ) : storageIssue ? (
                'Browser storage unavailable'
              ) : (
                <>
                  <Check size={13} /> Saved on this browser
                </>
              )}
            </span>
          </div>
          <div className="studio-team-controls">
            <select
              aria-label="Saved squad"
              value={squad.id}
              onChange={(event) => {
                setSaved((current) => ({
                  ...current,
                  active: event.target.value,
                }));
                resetInteraction();
              }}
            >
              {saved.squads.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => openDialog({ kind: 'new' })}>
              <Plus size={15} /> New squad
            </button>
          </div>
        </div>

        <div className="studio-layout">
          <section className="studio-board" aria-label="Tactical board">
            <div className="studio-tabs" aria-label="Game phase">
              {phases.map((value) => (
                <button
                  type="button"
                  aria-pressed={phase === value}
                  key={value}
                  onClick={() => {
                    setPhase(value);
                    setTool('move');
                    resetInteraction();
                  }}
                >
                  {phaseNames[value]}
                </button>
              ))}
            </div>
            <div className="studio-board-bar">
              <label>
                Formation{' '}
                <select
                  aria-label="Phase formation"
                  value={setup.formation}
                  onChange={(event) => {
                    const formation = event.target
                      .value as Squad['setups'][Phase]['formation'];
                    updatePhase((current) => ({
                      ...current,
                      formation,
                      spots: shape(formation),
                    }));
                    resetInteraction();
                  }}
                >
                  {formations.map((formation) => (
                    <option key={formation}>{formation}</option>
                  ))}
                </select>
              </label>
              <label>
                Opposition{' '}
                <select
                  aria-label="Opposition formation"
                  value={opposition}
                  onChange={(event) =>
                    setOpposition(Number(event.target.value))
                  }
                >
                  <option value={-1}>Off</option>
                  {oppositionFormations.map((formation, i) => (
                    <option key={formation.name} value={i}>
                      {formation.name}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                className="studio-zoom"
                aria-pressed={zoom}
                onClick={() => setZoom(!zoom)}
              >
                <Expand size={15} /> {zoom ? 'Fit pitch' : 'Enlarge pitch'}
              </button>
            </div>
            <div className="studio-pitch-wrap" data-zoom={zoom}>
              <div
                className="studio-pitch"
                ref={pitch}
                onClick={(event) => {
                  const point = pitchPoint(event.clientX, event.clientY);
                  if (point) clickPitch(point);
                }}
              >
                <PitchLines marks={setup.marks} first={first} />
                {oppositionFormations[opposition]?.players.map(
                  ({ x, y }, index) => (
                    <span
                      key={index}
                      className="studio-opponent"
                      style={{ left: x + '%', top: y + '%' }}
                      title={'Opponent ' + (index + 1)}
                    >
                      {index + 1}
                    </span>
                  )
                )}
                {starters.map((slot) => cardButton(slot, true))}
              </div>
            </div>
            <div className="studio-toolbar" aria-label="Board tools">
              {tools.map(({ value, label }) => (
                <button
                  type="button"
                  key={value}
                  aria-pressed={tool === value}
                  onClick={() => {
                    setTool(value);
                    resetInteraction();
                  }}
                >
                  {value === 'move' && <Move size={15} />}
                  {value === 'swap' && <ArrowLeftRight size={15} />}
                  {label}
                </button>
              ))}
              {setup.marks.length > 0 && (
                <button
                  type="button"
                  aria-label="Undo last pitch marking"
                  title="Undo last pitch marking"
                  onClick={() =>
                    updatePhase((current) => ({
                      ...current,
                      marks: current.marks.slice(0, -1),
                    }))
                  }
                >
                  <Undo2 size={16} />
                </button>
              )}
            </div>
            <p className="studio-help" role="status">
              {message ||
                (tool === 'move'
                  ? 'Drag to position or switch players. Tap a card for instructions.'
                  : tool === 'swap'
                    ? 'Tap two slots to switch players, including the bench and reserves.'
                    : first
                      ? 'Select the end point.'
                      : 'Select a starting point on the pitch.')}
            </p>
          </section>

          <aside className="studio-roster" aria-label="Squad roster">
            <div className="studio-roster-heading">
              <div>
                <h2>Matchday squad</h2>
                <span>{filled(starters)} / 11 starters</span>
              </div>
              <button
                type="button"
                className="studio-primary"
                onClick={() => openDialog({ kind: 'search' })}
              >
                <Search size={15} /> Find player
              </button>
            </div>
            <div className="studio-bench">
              <h3>
                Bench{' '}
                <span>
                  {filled(bench)} / {bench.length}
                </span>
              </h3>
              <div className="studio-card-grid">
                {bench.map((slot) => cardButton(slot))}
              </div>
              <details className="studio-reserves">
                <summary>
                  Reserves{' '}
                  <span>
                    {filled(reserves)} / {reserves.length}
                  </span>
                </summary>
                <div className="studio-card-grid">
                  {reserves.map((slot) => cardButton(slot))}
                </div>
              </details>
            </div>
            <div className="studio-name-field">
              <label className="studio-field">
                <span>Squad name</span>
                <input
                  aria-label="Squad name"
                  maxLength={48}
                  value={squad.name}
                  onChange={(event) =>
                    updateSquad((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  onBlur={() => {
                    if (!squad.name.trim())
                      updateSquad((current) => ({
                        ...current,
                        name: 'Untitled squad',
                      }));
                  }}
                />
              </label>
              {saved.squads.length > 1 && (
                <button
                  type="button"
                  onClick={() => openDialog({ kind: 'delete' })}
                >
                  Delete squad
                </button>
              )}
            </div>
          </aside>
        </div>

        {dragging && (
          <div
            className="studio-card studio-drag-card"
            data-filled={Boolean(squad.cards[dragging.slot])}
            style={{ left: dragging.point.x, top: dragging.point.y }}
            aria-hidden="true"
          >
            <CardTile
              card={squad.cards[dragging.slot]}
              position={setup.spots[dragging.slot]?.position}
              emptyLabel={slotName(dragging.slot)}
            />
          </div>
        )}

        {dialog?.kind === 'new' && (
          <Popup key="new" title="New squad" close={closeDialog}>
            <form
              className="studio-dialog-body"
              onSubmit={(event) => {
                event.preventDefault();
                const name = String(
                  new FormData(event.currentTarget).get('name') ?? ''
                ).trim();
                if (!name) return;
                const next = createSquad(crypto.randomUUID(), name);
                setSaved((current) => ({
                  squads: [...current.squads, next],
                  active: next.id,
                }));
                setPhase('kickoff');
                setTool('move');
                resetInteraction();
                closeDialog();
              }}
            >
              <label className="studio-field">
                <span>Squad name</span>
                <input
                  name="name"
                  maxLength={48}
                  required
                  placeholder="Give your team a name"
                />
              </label>
              <button type="submit" className="studio-primary">
                Create squad
              </button>
            </form>
          </Popup>
        )}
        {dialog?.kind === 'delete' && (
          <Popup
            key="delete"
            title={'Delete ' + squad.name + '?'}
            close={closeDialog}
          >
            <div className="studio-dialog-body">
              <p>
                This removes the squad and all of its phase setups from this
                browser.
              </p>
              <button type="button" onClick={closeDialog}>
                Keep squad
              </button>
              <button
                type="button"
                className="studio-primary"
                onClick={() => {
                  setSaved((current) => {
                    const squads = current.squads.filter(
                      (item) => item.id !== squad.id
                    );
                    return { squads, active: squads[0].id };
                  });
                  resetInteraction();
                  closeDialog();
                }}
              >
                Delete squad
              </button>
            </div>
          </Popup>
        )}
        {dialog?.kind === 'search' && (
          <Popup
            key="search"
            title={
              dialog.slot === undefined
                ? 'Find a player'
                : 'Find a player · ' +
                  (selectedSpot?.position ?? slotName(dialog.slot))
            }
            close={closeDialog}
          >
            <PlayerMarket
              position={selectedSpot?.position}
              current={selectedCard}
              onPick={(card) => addPlayer(card, dialog.slot)}
            />
          </Popup>
        )}
        {dialog?.kind === 'player' && (
          <Popup
            key="player"
            title={selectedCard?.name ?? slotName(dialog.slot)}
            close={closeDialog}
          >
            <div className="studio-dialog-body">
              {selectedCard && (
                <div className="studio-player-card">
                  <CardFace card={selectedCard} />
                  <RatingDetails card={selectedCard} />
                </div>
              )}
              <div className="studio-player-actions">
                <button
                  type="button"
                  className="studio-primary"
                  onClick={() =>
                    openDialog({ kind: 'search', slot: dialog.slot })
                  }
                >
                  <Search size={15} />{' '}
                  {selectedCard ? 'Change player or edition' : 'Find player'}
                </button>
                {selectedSpot && (
                  <button
                    type="button"
                    onClick={() => {
                      setTool('move');
                      setPlacing(dialog.slot);
                      setMessage(
                        'Tap an open area on the pitch to set the position.'
                      );
                      closeDialog();
                    }}
                  >
                    <Move size={15} /> Place on pitch
                  </button>
                )}
                {selectedCard && (
                  <button
                    type="button"
                    onClick={() => {
                      updateSquad((current) => {
                        const cards = { ...current.cards };
                        delete cards[dialog.slot];
                        return { ...current, cards };
                      });
                      closeDialog();
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
              {selectedSpot && (
                <>
                  <h3>
                    <Settings2 size={17} /> {phaseNames[phase]} instructions
                  </h3>
                  <div className="studio-instructions">
                    <label className="studio-field">
                      <span>Position</span>
                      <select
                        value={selectedSpot.position}
                        onChange={(event) => {
                          updateSpot(dialog.slot, {
                            position: event.target
                              .value as typeof selectedSpot.position,
                          });
                        }}
                      >
                        {positions.map((position) => (
                          <option key={position}>{position}</option>
                        ))}
                      </select>
                    </label>
                    <label className="studio-field">
                      <span>Role</span>
                      <select
                        value={selectedInstruction?.role ?? ''}
                        onChange={(event) => {
                          const role = event.target.value;
                          updateInstruction(dialog.slot, (current) => ({
                            ...current,
                            role,
                          }));
                        }}
                      >
                        <option value="">Default</option>
                        {[
                          ...new Set([
                            ...(selectedInstruction?.role
                              ? [selectedInstruction.role]
                              : []),
                            ...positionRoles(selectedSpot.position),
                          ]),
                        ].map((role) => (
                          <option key={role}>{role}</option>
                        ))}
                      </select>
                    </label>
                    {phase !== 'kickoff' &&
                      instructionFields(phase, selectedSpot.position).map(
                        ([label, ...options]) => (
                          <label className="studio-field" key={label}>
                            <span>{label}</span>
                            <select
                              value={selectedInstruction?.choices[label] ?? ''}
                              onChange={(event) => {
                                const value = event.target.value;
                                updateInstruction(dialog.slot, (current) => ({
                                  ...current,
                                  choices: {
                                    ...current.choices,
                                    [label]: value,
                                  },
                                }));
                              }}
                            >
                              <option value="">Default</option>
                              {options.map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          </label>
                        )
                      )}
                    {phase === 'defend' && selectedSpot.position !== 'GK' && (
                      <label className="studio-field">
                        <span>Mark opponent</span>
                        <select
                          value={selectedInstruction?.mark ?? ''}
                          onChange={(event) => {
                            const mark =
                              Number(event.target.value) || undefined;
                            updateInstruction(dialog.slot, (current) => ({
                              ...current,
                              mark,
                            }));
                          }}
                        >
                          <option value="">None</option>
                          {starters.map((slot) => (
                            <option key={slot} value={slot + 1}>
                              Opponent {slot + 1}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                  </div>
                  {selectedInstruction?.role && (
                    <p className="studio-role-note">
                      {
                        roleDescriptions[
                          selectedInstruction.role as keyof typeof roleDescriptions
                        ]
                      }
                    </p>
                  )}
                  <label className="studio-field">
                    <span>Player notes</span>
                    <textarea
                      rows={2}
                      maxLength={600}
                      value={selectedInstruction?.notes ?? ''}
                      onChange={(event) => {
                        const notes = event.target.value;
                        updateInstruction(dialog.slot, (current) => ({
                          ...current,
                          notes,
                        }));
                      }}
                    />
                  </label>
                </>
              )}
            </div>
          </Popup>
        )}
      </div>
    </main>
  );
}
