export interface Player {
  id: number;
  name: string;
  position: string;
  x: number;
  y: number;
  role: string;
  detail: string;
  overallRating?: number;
  // Extra attributes for set-piece and micro-skill filters
 headingRating?: number; // Aerial ability (0-99)
  tightSpacesRating?: number; // Press resistance/tech in tight areas (0-99)
 pounceAbilityInBox?: number; // Instinct/poacher behavior around rebounds/second balls (0-99)
 age?: number;
 pouncerRating?: number; // Goal poaching ability (0-99)
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
  zIndex?: number;
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
  managerImage: string; // ← This was missing!
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