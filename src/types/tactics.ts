export interface Player {
  id: number;
  name: string;
  position: string;
  x: number;
  y: number;
  role: string;
  detail: string;
}

export interface Movement {
  from: { x: number; y: number };
  to: { x: number; y: number };
  type: 'movement' | 'pass' | 'press';
  player: string;
  color: string;
}

export interface TacticalZone {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  label: string;
}

export interface CornerSetup {
  name: string;
  players: Player[];
  opposition: Array<{ x: number; y: number; role: string }>;
}

export interface GamePhase {
  players: Player[];
  movements?: Movement[];
  zones?: TacticalZone[];
}

export interface Team {
  name: string;
  manager: string;
  achievement: string;
  formation: string;
  style: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  quote: string;
  phases: {
    0: GamePhase; // Kickoff
    1: GamePhase; // In Possession
    2: GamePhase; // Out of Possession
    3: { corners: CornerSetup[] }; // Set Pieces
  };
}

export interface OppositionFormation {
  name: string;
  color: string;
  players: Array<{ x: number; y: number }>;
}