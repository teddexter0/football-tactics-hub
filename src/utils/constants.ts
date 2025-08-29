export const PITCH_DIMENSIONS = {
  width: 600,
  height: 900,
  marginX: 30,
  marginY: 50,
  fieldWidth: 540,
  fieldHeight: 800
};

export const PLAYER_SIZES = {
  standard: { width: 48, height: 48 },
  mobile: { width: 28, height: 28 }
};

export const COLORS = {
  pitch: {
    primary: '#22c55e',
    secondary: '#16a34a',
    lines: '#ffffff'
  },
  opposition: {
    default: '#666666',
    lowBlock: '#444444',
    midBlock: '#555555'
  }
};

export const PHASES = ['Kickoff', 'In Possession', 'Out of Possession', 'Set Pieces'] as const;
export type Phase = typeof PHASES[number];