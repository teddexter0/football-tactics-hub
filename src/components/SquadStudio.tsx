'use client';

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type CSSProperties,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import {
  ArrowLeftRight,
  Check,
  Columns,
  Crosshair,
  Expand,
  Move,
  Plus,
  Search,
  Settings2,
  Trophy,
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
  defaultKits,
  detectShape,
  formations,
  instructionFields,
  keeperColors,
  kitColors,
  kitPatterns,
  markingZones,
  outfieldColors,
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
import PitchLines from '@/components/StudioPitchLines';
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
  { value: 'curve', label: 'Bent arrow' },
  { value: 'pass', label: 'Pass' },
  { value: 'press', label: 'Press' },
  { value: 'zone', label: 'Zone' },
  { value: 'circle', label: 'Circle' },
];

const kitFields = [
  ['home', 'Your outfield', outfieldColors],
  ['homePattern', 'Your pattern', kitPatterns],
  ['homeKeeper', 'Your goalkeeper', keeperColors],
  ['away', 'Opposition outfield', outfieldColors],
  ['awayPattern', 'Opposition pattern', kitPatterns],
  ['awayKeeper', 'Opposition goalkeeper', keeperColors],
] as const;

function kitStyle(color: keyof typeof kitColors): CSSProperties {
  const [primary, accent] = kitColors[color];
  return { '--kit-color': primary, '--kit-accent': accent } as CSSProperties;
}

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

export default function SquadStudio() {
  const [saved, setSaved] = useState<SavedSquads>(initial);
  const [ready, setReady] = useState(false);
  const [storageIssue, setStorageIssue] = useState(false);
  const [phase, setPhase] = useState<Phase>('kickoff');
  const [tool, setTool] = useState<Tool>('move');
  const [zoom, setZoom] = useState(false);
  const [first, setFirst] = useState<Point | null>(null);
  const [bend, setBend] = useState<Point | null>(null);
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
  const opposition = squad.opposition ?? -1;
  const opponents = oppositionFormations[opposition]?.players ?? [];
  const kits = { ...defaultKits, ...squad.kits };
  const dragPoint =
    tool === 'move' &&
    dragging &&
    dragging.slot < 11 &&
    (dragging.target === undefined || dragging.target < 11)
      ? pitchPoint(dragging.point.x, dragging.point.y)
      : null;
  const liveSpots =
    dragPoint && dragging
      ? setup.spots.map((spot, i) =>
          i === dragging.slot ? { ...spot, ...clampPoint(dragPoint) } : spot
        )
      : setup.spots;
  const detectedShape = detectShape(liveSpots);
  const customShape = shape(setup.formation).some(
    (spot, i) =>
      spot.x !== setup.spots[i]?.x ||
      spot.y !== setup.spots[i]?.y ||
      spot.position !== setup.spots[i]?.position
  );
  const assignments =
    phase === 'defend'
      ? liveSpots.flatMap<{ start: Point; end: Point; zone?: number }>(
          (spot, slot) => {
            const instruction =
              setup.instructions[squad.cards[slot]?.id ?? 'slot:' + slot];
            const mode = instruction?.choices.Marking;
            if (spot.position === 'GK') return [];
            const zone = instruction?.markZone;
            if (mode === 'Zonal' && zone !== undefined && markingZones[zone]) {
              const { x, y, width, height } = markingZones[zone];
              return [
                {
                  start: spot,
                  end: { x: x + width / 2, y: y + height / 2 },
                  zone,
                },
              ];
            }
            const target = instruction?.mark && opponents[instruction.mark - 1];
            if (
              target &&
              mode !== 'Zonal' &&
              mode !== 'Track runners' &&
              (instruction.markFormation === undefined ||
                instruction.markFormation === opposition)
            )
              return [{ start: spot, end: target }];
            return [];
          }
        )
      : [];
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
    setBend(null);
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

  function clampPoint(point: Point) {
    return {
      x: Math.max(10, Math.min(90, point.x)),
      y: Math.max(8, Math.min(92, point.y)),
    };
  }

  function placeCard(slot: number, point: Point) {
    updateSpot(slot, clampPoint(point));
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
    else if (tool === 'curve' && !bend) setBend(point);
    else {
      if (Math.hypot(point.x - first.x, point.y - first.y) > 1) {
        updatePhase((current) => ({
          ...current,
          marks: [
            ...current.marks,
            { start: first, end: point, type: tool, bend: bend ?? undefined },
          ],
        }));
      }
      setFirst(null);
      setBend(null);
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
    if (
      target !== undefined &&
      target !== slot &&
      (tool === 'swap' || slot >= 11 || target >= 11)
    )
      swap(slot, target);
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
          (dragging?.target === slot &&
            dragging.slot !== slot &&
            (tool === 'swap' || dragging.slot >= 11 || slot >= 11))
        }
        data-instructions={Boolean(
          setup.instructions[card?.id ?? 'slot:' + slot]
        )}
        data-pattern={
          spot ? (slot === 0 ? 'Solid' : kits.homePattern) : undefined
        }
        style={
          spot
            ? {
                left: spot.x + '%',
                top: spot.y + '%',
                ...kitStyle(slot === 0 ? kits.homeKeeper : kits.home),
              }
            : undefined
        }
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
  const markingMode =
    selectedInstruction?.choices.Marking ||
    (selectedInstruction?.mark ? 'Man mark' : '');

  return (
    <main ref={studio} className="studio" data-phase={phase}>
      <div className="studio-shell">
        <header className="studio-mast">
          <div className="studio-brand">
            <Crosshair size={23} />
            <span>Football Tactics Hub</span>
          </div>
          <Link href="/legends" className="studio-legends">
            <Trophy size={19} /> Legends <span aria-hidden="true">↗</span>
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
                Preset{' '}
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
                  onChange={(event) => {
                    const opposition = Number(event.target.value);
                    updateSquad((current) => ({ ...current, opposition }));
                  }}
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
                className="studio-lane-toggle"
                title="Highlight the wings, half-spaces and centre"
                aria-pressed={Boolean(squad.showLanes)}
                onClick={() =>
                  updateSquad((current) => ({
                    ...current,
                    showLanes: !current.showLanes,
                  }))
                }
              >
                <Columns size={15} /> Pep lanes
              </button>
              <button
                type="button"
                className="studio-zoom"
                aria-pressed={zoom}
                onClick={() => setZoom(!zoom)}
              >
                <Expand size={15} /> {zoom ? 'Fit pitch' : 'Enlarge pitch'}
              </button>
            </div>
            <div className="studio-shape-bar">
              <output aria-live={dragging ? 'off' : 'polite'}>
                <span>Detected shape</span>
                <strong>{detectedShape}</strong>
              </output>
              {customShape && (
                <button
                  type="button"
                  className="studio-reset-shape"
                  onClick={() => {
                    updatePhase((current) => ({
                      ...current,
                      spots: shape(current.formation),
                    }));
                    resetInteraction();
                  }}
                >
                  <Undo2 size={14} /> Reset preset
                </button>
              )}
              <details className="studio-kit-menu">
                <summary>Kits</summary>
                <div className="studio-kit-options">
                  {kitFields.map(([key, label, options]) => (
                    <label className="studio-field" key={key}>
                      <span>{label}</span>
                      <select
                        value={kits[key]}
                        onChange={(event) => {
                          const value = event.target.value;
                          updateSquad((current) => ({
                            ...current,
                            kits: { ...current.kits, [key]: value },
                          }));
                        }}
                      >
                        {options.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                  ))}
                </div>
              </details>
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
                <PitchLines
                  marks={setup.marks}
                  first={first}
                  bend={bend}
                  showLanes={Boolean(squad.showLanes)}
                  assignments={assignments}
                />
                {opponents.map(({ x, y }, index) => (
                  <span
                    key={index}
                    className="studio-opponent"
                    data-pattern={index === 0 ? 'Solid' : kits.awayPattern}
                    style={{
                      left: x + '%',
                      top: y + '%',
                      ...kitStyle(index === 0 ? kits.awayKeeper : kits.away),
                    }}
                    title={
                      'Opponent ' + (index + 1) + (index === 0 ? ' · GK' : '')
                    }
                  >
                    {index + 1}
                  </span>
                ))}
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
              {(first || setup.marks.length > 0) && (
                <button
                  type="button"
                  aria-label={
                    first ? 'Cancel drawing' : 'Undo last pitch marking'
                  }
                  title={first ? 'Cancel drawing' : 'Undo last pitch marking'}
                  onClick={() => {
                    if (!first)
                      updatePhase((current) => ({
                        ...current,
                        marks: current.marks.slice(0, -1),
                      }));
                    resetInteraction();
                  }}
                >
                  <Undo2 size={16} />
                </button>
              )}
            </div>
            <p className="studio-help" role="status">
              {message ||
                (tool === 'move'
                  ? 'Drag to position. Tap a card for instructions.'
                  : tool === 'swap'
                    ? 'Tap two slots to switch players, including the bench and reserves.'
                    : tool === 'curve'
                      ? !first
                        ? 'Select the start of the run.'
                        : !bend
                          ? 'Select where the run bends.'
                          : 'Select the end of the run.'
                      : tool === 'circle'
                        ? first
                          ? 'Select the edge of the circle.'
                          : 'Select the centre of the circle.'
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
                              value={
                                label === 'Marking'
                                  ? markingMode
                                  : (selectedInstruction?.choices[label] ?? '')
                              }
                              onChange={(event) => {
                                const value = event.target.value;
                                updateInstruction(dialog.slot, (current) => ({
                                  ...current,
                                  ...(label === 'Marking' && {
                                    mark:
                                      value === 'Man mark' ||
                                      value === 'Tight mark'
                                        ? current.mark
                                        : undefined,
                                    markZone:
                                      value === 'Zonal'
                                        ? current.markZone
                                        : undefined,
                                  }),
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
                    {phase === 'defend' &&
                      selectedSpot.position !== 'GK' &&
                      (markingMode === 'Man mark' ||
                        markingMode === 'Tight mark') && (
                        <label className="studio-field">
                          <span>Mark opponent</span>
                          <select
                            value={
                              selectedInstruction?.markFormation ===
                                undefined ||
                              selectedInstruction.markFormation === opposition
                                ? (selectedInstruction?.mark ?? '')
                                : ''
                            }
                            disabled={!opponents.length}
                            onChange={(event) => {
                              const mark =
                                Number(event.target.value) || undefined;
                              updateInstruction(dialog.slot, (current) => ({
                                ...current,
                                mark,
                                markFormation: opposition,
                                choices: {
                                  ...current.choices,
                                  Marking: markingMode,
                                },
                              }));
                            }}
                          >
                            <option value="">
                              {opponents.length
                                ? 'Choose opponent'
                                : 'Enable an opposition formation'}
                            </option>
                            {opponents.map((_, slot) => (
                              <option key={slot} value={slot + 1}>
                                Opponent {slot + 1}
                                {slot === 0 ? ' · GK' : ''}
                              </option>
                            ))}
                          </select>
                        </label>
                      )}
                    {phase === 'defend' &&
                      selectedSpot.position !== 'GK' &&
                      markingMode === 'Zonal' && (
                        <label className="studio-field">
                          <span>Marking zone</span>
                          <select
                            value={selectedInstruction?.markZone ?? ''}
                            onChange={(event) => {
                              const markZone =
                                event.target.value === ''
                                  ? undefined
                                  : Number(event.target.value);
                              updateInstruction(dialog.slot, (current) => ({
                                ...current,
                                markZone,
                              }));
                            }}
                          >
                            <option value="">Choose zone</option>
                            {markingZones.map(({ label }, index) => (
                              <option key={label} value={index}>
                                {label}
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
