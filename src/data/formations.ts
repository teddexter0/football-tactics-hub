import { OppositionFormation } from '../types/tactics';

export const oppositionFormations: OppositionFormation[] = [
  {
    name: "4-4-2 Mid Block",
    color: "#666",
    players: [
      { x: 50, y: 5 }, // GK
      { x: 20, y: 30 }, { x: 40, y: 30 }, { x: 60, y: 30 }, { x: 80, y: 30 }, // Defense
      { x: 20, y: 55 }, { x: 40, y: 55 }, { x: 60, y: 55 }, { x: 80, y: 55 }, // Midfield
      { x: 40, y: 80 }, { x: 60, y: 80 } // Attack
    ]
  },
  {
    name: "5-4-1 Low Block",
    color: "#444",
    players: [
      { x: 50, y: 5 }, // GK
      { x: 5, y: 30 }, { x: 25, y: 20 }, { x: 50, y: 15 }, { x: 75, y: 20 }, { x: 95, y: 30 }, // Defense
      { x: 25, y: 55 }, { x: 60, y: 45 }, { x: 40, y: 45 }, { x: 75, y: 55 }, // Midfield
      { x: 50, y: 80 } // Attack
    ]
  },
  {
    name: "3-5-2 Compact",
    color: "#555",
    players: [
      { x: 50, y: 5 }, // GK
      { x: 30, y: 30 }, { x: 50, y: 30 }, { x: 70, y: 30 }, // Defense
      { x: 15, y: 55 }, { x: 35, y: 55 }, { x: 50, y: 55 }, { x: 65, y: 55 }, { x: 85, y: 55 }, // Midfield
      { x: 40, y: 80 }, { x: 60, y: 80 } // Attack
    ]
  }
];