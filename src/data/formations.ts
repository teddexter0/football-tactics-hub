import { OppositionFormation } from '../types/tactics';

export const oppositionFormations: OppositionFormation[] = [
  {
    name: "4-4-2 Mid Block",
    color: "#666",
    players: [
      { x: 50, y: 85 }, // GK
      { x: 20, y: 70 }, { x: 40, y: 70 }, { x: 60, y: 70 }, { x: 80, y: 70 }, // Defense
      { x: 20, y: 50 }, { x: 40, y: 50 }, { x: 60, y: 50 }, { x: 80, y: 50 }, // Midfield
      { x: 40, y: 25 }, { x: 60, y: 25 } // Attack
    ]
  },
  {
    name: "5-4-1 Low Block",
    color: "#444",
    players: [
      { x: 50, y: 85 }, // GK
      { x: 15, y: 70 }, { x: 35, y: 70 }, { x: 50, y: 70 }, { x: 65, y: 70 }, { x: 85, y: 70 }, // Defense
      { x: 25, y: 50 }, { x: 45, y: 50 }, { x: 55, y: 50 }, { x: 75, y: 50 }, // Midfield
      { x: 50, y: 25 } // Attack
    ]
  },
  {
    name: "3-5-2 Compact",
    color: "#555",
    players: [
      { x: 50, y: 85 }, // GK
      { x: 30, y: 70 }, { x: 50, y: 70 }, { x: 70, y: 70 }, // Defense
      { x: 15, y: 50 }, { x: 35, y: 50 }, { x: 50, y: 50 }, { x: 65, y: 50 }, { x: 85, y: 50 }, // Midfield
      { x: 40, y: 25 }, { x: 60, y: 25 } // Attack
    ]
  }
];