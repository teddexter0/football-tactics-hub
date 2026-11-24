import { rolesByPosition } from '@/data/playerRoles';

export const phases = ['kickoff', 'attack', 'defend'] as const;
export type Phase = (typeof phases)[number];
export const phaseNames: Record<Phase, string> = {
  kickoff: 'Kick-off',
  attack: 'In possession',
  defend: 'Out of possession',
};

export const positions = [
  'GK',
  'LB',
  'LWB',
  'CB',
  'RB',
  'RWB',
  'CDM',
  'LM',
  'CM',
  'RM',
  'CAM',
  'LW',
  'CF',
  'ST',
  'RW',
] as const;
export type Position = (typeof positions)[number];
export type CardStat = { label: string; value: number };
export type Edition = {
  id: string;
  label: string;
  position: Position;
  overall: number;
  stats: CardStat[];
  url: string;
};
export type PlayerProfile = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  imageSource?: string;
  source?: string;
  position?: Position;
  editions?: Edition[];
};
export type SquadCard = Omit<PlayerProfile, 'editions'> & { edition?: Edition };

type Point = { x: number; y: number };
export type PositionSlot = Point & { position: Position };
type Instruction = {
  role?: string;
  choices: Record<string, string>;
  mark?: number;
  notes?: string;
};
export type BoardMark = {
  start: Point;
  end: Point;
  type: 'run' | 'pass' | 'press' | 'zone';
};
export type PhaseSetup = {
  formation: Formation;
  spots: PositionSlot[];
  instructions: Record<string, Instruction>;
  marks: BoardMark[];
};
export type Squad = {
  id: string;
  name: string;
  cards: Record<number, SquadCard>;
  setups: Record<Phase, PhaseSetup>;
};

const presets = {
  '4-3-3': [
    ['LW', 'ST', 'RW'],
    ['CM', 'CDM', 'CM'],
    ['LB', 'CB', 'CB', 'RB'],
  ],
  '4-4-2': [
    ['ST', 'ST'],
    ['LM', 'CM', 'CM', 'RM'],
    ['LB', 'CB', 'CB', 'RB'],
  ],
  '4-2-3-1': [
    ['ST'],
    ['LM', 'CAM', 'RM'],
    ['CDM', 'CDM'],
    ['LB', 'CB', 'CB', 'RB'],
  ],
  '3-5-2': [
    ['ST', 'ST'],
    ['CAM'],
    ['LWB', 'CDM', 'CDM', 'RWB'],
    ['CB', 'CB', 'CB'],
  ],
  '3-4-3': [
    ['LW', 'ST', 'RW'],
    ['LWB', 'CM', 'CM', 'RWB'],
    ['CB', 'CB', 'CB'],
  ],
  '5-4-1': [['ST'], ['LM', 'CM', 'CM', 'RM'], ['LWB', 'CB', 'CB', 'CB', 'RWB']],
} as const satisfies Record<string, readonly (readonly Position[])[]>;

export type Formation = keyof typeof presets;
export const formations = Object.keys(presets) as Formation[];
export const starters = Array.from({ length: 11 }, (_, i) => i);
export const bench = Array.from({ length: 7 }, (_, i) => i + starters.length);
export const reserves = Array.from(
  { length: 5 },
  (_, i) => i + starters.length + bench.length
);

export function shape(formation: Formation): PositionSlot[] {
  const lines = presets[formation];
  return [
    { position: 'GK', x: 50, y: 91 },
    ...[...lines].reverse().flatMap((line, row) =>
      line.map((position, column) => ({
        position,
        x:
          line.length === 1
            ? 50
            : 11 +
              ((78 * column) / (line.length - 1)) *
                (line.length > 2 ? 1 : 0.55) +
              (line.length === 2 ? 17.55 : 0),
        y:
          74 -
          (57 * row) / (lines.length - 1) +
          (position === 'CDM' && lines.length === 3 ? 7 : 0),
      }))
    ),
  ];
}

export function createSquad(id: string, name: string): Squad {
  const setup = (): PhaseSetup => ({
    formation: '4-3-3',
    spots: shape('4-3-3'),
    instructions: {},
    marks: [],
  });
  return {
    id,
    name,
    cards: {},
    setups: { kickoff: setup(), attack: setup(), defend: setup() },
  };
}

const attacking = [
  [
    'Movement',
    'Hold zone',
    'Roam',
    'Get in behind',
    'Come short',
    'Run beyond',
  ],
  ['Width', 'Stay wide', 'Cut inside', 'Occupy half-space', 'Drift wide'],
  ['Support runs', 'Overlap', 'Underlap', 'Stay back', 'Join attack'],
  [
    'Build-up',
    'Play short',
    'Switch play',
    'Play through balls',
    'Carry forward',
  ],
  [
    'Final third',
    'Attack near post',
    'Attack far post',
    'Stay on edge',
    'Drop for cutback',
  ],
];
const defending = [
  [
    'Pressing',
    'Press aggressively',
    'Press on trigger',
    'Screen passes',
    'Hold shape',
  ],
  ['Marking', 'Zonal', 'Man mark', 'Tight mark', 'Track runners'],
  ['Defensive line', 'Step up', 'Hold line', 'Drop deeper'],
  [
    'Coverage',
    'Cover center',
    'Cover wing',
    'Cover half-space',
    'Cover behind',
  ],
  [
    'Transition',
    'Counter-press',
    'Recover to shape',
    'Stay forward',
    'Track back',
  ],
];
export function instructionFields(phase: Phase, position: Position) {
  if (position === 'GK') {
    return phase === 'attack'
      ? [
          [
            'Distribution',
            'Roll out short',
            'Play to fullbacks',
            'Target striker',
            'Kick long',
          ],
          ['Support', 'Offer back pass', 'Stay in box', 'Step out'],
        ]
      : [
          [
            'Starting depth',
            'Sweeper keeper',
            'Stay on line',
            'Hold six-yard box',
          ],
          ['Crosses', 'Claim crosses', 'Punch clear', 'Stay on line'],
        ];
  }
  return phase === 'attack' ? attacking : defending;
}

export function positionRoles(position: Position): string[] {
  const base = { LWB: 'LB', RWB: 'RB', LM: 'LW', RM: 'RW', CF: 'ST' } as const;
  return rolesByPosition[
    (base[position as keyof typeof base] ??
      position) as keyof typeof rolesByPosition
  ];
}

export function normalizePosition(position: Position): Position {
  const groups = {
    LWB: 'LB',
    RWB: 'RB',
    LM: 'LW',
    RM: 'RW',
    CF: 'ST',
  } as const;
  return groups[position as keyof typeof groups] ?? position;
}
