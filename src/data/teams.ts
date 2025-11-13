import { Team } from '../types/tactics';

// Using UI Avatars API for free manager portraits (no signup required)
const getManagerImage = (name: string, teamColor: string) => {
  const cleanColor = teamColor.replace('#', '');
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=${cleanColor}&color=fff&font-size=0.4`;
};

export const legendaryTeams: Team[] = [
  

// Barcelona 2008-2012
  {
    name: "Barcelona 2008-2012",
    manager: "Pep Guardiola",
    achievement: "Greatest Team Ever - 14 Trophies in 4 Years",
    formation: "4-3-3 / 4-6-0",
    style: "Tiki-Taka, Total Possession, False 9 Mastery",
    description: "Football perfection. Pep's Barcelona redefined the beautiful game with 70% possession, 1000+ passes per game, and Messi as the false 9 in history's most dominant team.",
    primaryColor: "#A50044",
    secondaryColor: "#004D98",
    quote: "The ball is the team's best friend. When you have the ball, the opponent can't score.",
    managerImage: getManagerImage("Pep Guardiola", "#A50044"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Revolutionary goalkeeper comfortable with feet", overallRating: 85, age: 28, pounceAbilityInBox: 50 },
          { id: 2, name: "Alves", position: "RB", x: 15, y: 75, role: "Attacking FB", detail: "Brazilian wizard who redefined fullback play", overallRating: 86, age: 27, pounceAbilityInBox: 70 },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Elegant defender who started attacks from deep", overallRating: 88, age: 23, pounceAbilityInBox: 75 },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 80, role: "Warrior Leader", detail: "Captain fantastic who bled for the shirt", overallRating: 86, age: 32, pounceAbilityInBox: 80 },
          { id: 22, name: "Abidal", position: "LB", x: 85, y: 75, role: "Defensive FB", detail: "Solid French defender providing balance", overallRating: 81, age: 31, pounceAbilityInBox: 65 },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Deep Playmaker", detail: "The metronome who made everything tick", overallRating: 85, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Maestro", detail: "The conductor of football's greatest orchestra", overallRating: 92, age: 30, pounceAbilityInBox: 85 },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Magician", detail: "Pure artistry and press resistance combined", overallRating: 91, age: 26, pounceAbilityInBox: 90 },
          { id: 7, name: "Villa", position: "LW", x: 80, y: 40, role: "Inside Forward", detail: "Spanish striker who cut inside perfectly", overallRating: 88, age: 29, pounceAbilityInBox: 90 },
          { id: 10, name: "Messi", position: "F9", x: 50, y: 35, role: "False 9", detail: "The GOAT in his most devastating position", overallRating: 94, age: 23, pounceAbilityInBox: 95 },
          { id: 9, name: "Pedro", position: "RW", x: 20, y: 40, role: "Work Rate Winger", detail: "Pressed relentlessly and scored crucial goals", overallRating: 85, age: 23, pounceAbilityInBox: 85 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 88, role: "11th Outfield Player", detail: "More touches than most midfielders", overallRating: 85, age: 28, pounceAbilityInBox: 50  },
          { id: 2, name: "Alves", position: "RB", x: 8, y: 50, role: "Wing-Back", detail: "Creates width while Pedro cuts inside", overallRating: 86, age: 27, pounceAbilityInBox: 70  },
          { id: 3, name: "Piqué", position: "CB", x: 35, y: 75, role: "Playmaker CB", detail: "Sprays passes like a quarterback", overallRating: 88, age: 23, pounceAbilityInBox: 75  },
          { id: 5, name: "Puyol", position: "CB", x: 65, y: 75, role: "Covering Leader", detail: "Covers for Alves with incredible reading", overallRating: 86, age: 32, pounceAbilityInBox: 80  },
          { id: 22, name: "Abidal", position: "LB", x: 88, y: 60, role: "Supporting FB", detail: "Provides balance when Villa drifts inside", overallRating: 81, age: 31, pounceAbilityInBox: 65  },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 70, role: "Pivot", detail: "Drops between CBs, creates 3-man defense", overallRating: 85, age: 22, pounceAbilityInBox: 75  },
          { id: 8, name: "Xavi", position: "CM", x: 25, y: 50, role: "Right Interior", detail: "Occupies half-spaces with genius passing", overallRating: 92, age: 30, pounceAbilityInBox: 85  },
          { id: 6, name: "Iniesta", position: "CM", x: 75, y: 50, role: "Left Interior", detail: "Dribbles through impossible spaces", overallRating: 91, age: 26, pounceAbilityInBox: 90  },
          { id: 7, name: "Villa", position: "LW", x: 70, y: 25, role: "False Winger", detail: "Cuts inside creating overloads", overallRating: 88, age: 29, pounceAbilityInBox: 90  },
          { id: 10, name: "Messi", position: "F9", x: 55, y: 40, role: "False 9 God", detail: "Drops deep, creates chaos, pure genius", overallRating: 94, age: 23, pounceAbilityInBox: 95  },
          { id: 9, name: "Pedro", position: "RW", x: 30, y: 25, role: "Inside Forward", detail: "Runs into space Messi creates", overallRating: 85, age: 23, pounceAbilityInBox: 85  }
        ],
        movements: [
          { from: { x: 50, y: 35 }, to: { x: 55, y: 40 }, type: 'movement', player: 'Messi False 9 Drop', color: '#A50044' },
          { from: { x: 15, y: 75 }, to: { x: 8, y: 50 }, type: 'movement', player: 'Alves Bombs Forward', color: '#004D98' },
          { from: { x: 80, y: 40 }, to: { x: 70, y: 25 }, type: 'movement', player: 'Villa Cuts Inside', color: '#FFD700' }
        ],
        zones: [
          { x: 20, y: 30, width: 60, height: 40, color: 'rgba(165, 0, 68, 0.3)', label: 'Tiki-Taka Central Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 88, role: "Sweeping GK", detail: "Covers space behind high line", overallRating: 85, age: 28, pounceAbilityInBox: 50 },
          { id: 2, name: "Alves", position: "RB", x: 20, y: 70, role: "Recovery FB", detail: "Tracks back with Brazilian pace", overallRating: 86, age: 27, pounceAbilityInBox: 70 },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 72, role: "Aggressive CB", detail: "Steps out to win ball high", overallRating: 88, age: 23, pounceAbilityInBox: 75 },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 72, role: "Covering Warrior", detail: "Uses pace and intelligence to cover", overallRating: 86, age: 32, pounceAbilityInBox: 80 },
          { id: 22, name: "Abidal", position: "LB", x: 80, y: 70, role: "Disciplined FB", detail: "Maintains defensive shape always", overallRating: 81, age: 31, pounceAbilityInBox: 65 },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Press Resistant", detail: "Never loses ball under pressure", overallRating: 85, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Pressing Mid", detail: "Intelligent pressing to win ball", overallRating: 92, age: 30, pounceAbilityInBox: 85 },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Pressing Artist", detail: "Even magicians pressed for the team", overallRating: 91, age: 26, pounceAbilityInBox: 90 },
          { id: 7, name: "Villa", position: "LW", x: 75, y: 45, role: "Tracking Forward", detail: "Works back to help defensive effort", overallRating: 88, age: 29, pounceAbilityInBox: 90 },
          { id: 10, name: "Messi", position: "F9", x: 50, y: 40, role: "Pressing False 9", detail: "Led from front with intelligent pressing", overallRating: 94, age: 23, pounceAbilityInBox: 95 },
          { id: 9, name: "Pedro", position: "RW", x: 25, y: 45, role: "Defensive Winger", detail: "Never stopped running for the team", overallRating: 85, age: 23, pounceAbilityInBox: 85  }
        ],
        zones: [
          { x: 0, y: 25, width: 100, height: 50, color: 'rgba(255, 0, 0, 0.3)', label: 'Collective Press - 6 Second Rule' }
        ]
      },
      3: {
        corners: [
          {
            name: "Puyol Leadership Header",
            players: [
              { id: 5, name: "Puyol", position: "CB", x: 85, y: 82, role: "Aerial Leader", detail: "Captain who led by example in air", overallRating: 86, age: 32, pounceAbilityInBox: 80  },
              { id: 3, name: "Piqué", position: "CB", x: 78, y: 78, role: "Tall Target", detail: "Uses height and timing perfectly", overallRating: 88, age: 23, pounceAbilityInBox: 75  },
              { id: 10, name: "Messi", position: "F9", x: 82, y: 75, role: "Genius Header", detail: "Even at 5'7 found ways to score", overallRating: 94, age: 23, pounceAbilityInBox: 95  },
              { id: 8, name: "Xavi", position: "CM", x: 95, y: 85, role: "Precision Crosser", detail: "Perfect delivery every single time", overallRating: 92, age: 30, pounceAbilityInBox: 85  }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },
  
  // Manchester City 2022/23 - Pep Guardiola
  {
    name: "Manchester City 2022/23",
    manager: "Pep Guardiola",
    achievement: "Treble Winners - Premier League, FA Cup, Champions League",
    formation: "4-3-3 / 3-2-4-1",
    style: "Positional Play, Inverted Fullbacks, False 9 Revolution",
    description: "The ultimate evolution of Pep's philosophy - inverted fullbacks creating midfield overloads, Haaland as the perfect target Man, and positional mastery that dismantled every opponent.",
    primaryColor: "#6CABDD",
    secondaryColor: "#1C2C5B",
    quote: "We don't want the ball, we want the ball in the right place at the right time.",
    managerImage: getManagerImage("Pep Guardiola", "#6CABDD"),
    phases: {
      0: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Revolutionary goalkeeper - essentially the 11th outfield player with incredible distribution range", overallRating: 89, age: 29, pounceAbilityInBox: 55 },
          { id: 2, name: "Walker", position: "RB", x: 15, y: 75, role: "Right-Back", detail: "Rapid recovery pace, traditional width provider in kickoff shape", overallRating: 85, age: 32, pounceAbilityInBox: 70 },
          { id: 5, name: "Stones", position: "CB", x: 38, y: 80, role: "Ball-Playing CB", detail: "The conductor from deep - reads the game like a quarterback", overallRating: 83, age: 28, pounceAbilityInBox: 70 },
          { id: 25, name: "Akanji", position: "CB", x: 62, y: 80, role: "Left-footed CB", detail: "Elegant defender who brings the ball out with confidence", overallRating: 81, age: 27, pounceAbilityInBox: 65 },
          { id: 6, name: "Ake", position: "LB", x: 85, y: 75, role: "Left-Back", detail: "Versatile defender who provides balance when needed", overallRating: 81, age: 27, pounceAbilityInBox: 70 },
          { id: 16, name: "Rodri", position: "CDM", x: 50, y: 65, role: "Lone Pivot", detail: "The metronome - controls tempo, screens defense, virtually press-proof", overallRating: 87, age: 26, pounceAbilityInBox: 75 },
          { id: 17, name: "De Bruyne", position: "CM", x: 38, y: 55, role: "Right 8", detail: "The master of the half-space - creates magic between the lines", overallRating: 91, age: 31, pounceAbilityInBox: 85 },
          { id: 8, name: "Gündogan", position: "CM", x: 62, y: 55, role: "Left 8", detail: "Intelligent movement, arrives late in the box, technical excellence", overallRating: 85, age: 32, pounceAbilityInBox: 85 },
          { id: 26, name: "Mahrez", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Left-footed wizard who cuts inside creating overloads", overallRating: 86, age: 31, pounceAbilityInBox: 85 },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 25, role: "Striker", detail: "Goal machine - combines pace, power with clinical finishing", overallRating: 91, age: 22, pounceAbilityInBox: 95 },
          { id: 10, name: "Grealish", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Retention specialist who draws fouls, creates chaos for defenders", overallRating: 84, age: 27, pounceAbilityInBox: 80 }
        ]
      },
      1: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 90, role: "Sweeper Keeper", detail: "Acts as 11th outfield player - pings 60-yard passes to start attacks", overallRating: 89, age: 29, pounceAbilityInBox: 55 },
          { id: 2, name: "Walker", position: "RB", x: 15, y: 70, role: "Inverted Fullback", detail: "Tucks into midfield creating 3-2-4-1 formation", overallRating: 85, age: 32, pounceAbilityInBox: 70 },
          { id: 5, name: "Stones", position: "CB", x: 35, y: 59, role: "Stepping CB", detail: "Steps into midfield as auxiliary DM, distributes like a regista", overallRating: 83, age: 28, pounceAbilityInBox: 70 },
          { id: 25, name: "Akanji", position: "CB", x: 48, y: 70, role: "Wide CB", detail: "Drifts wide when Ake attacks, comfortable as auxiliary fullback", overallRating: 81, age: 27, pounceAbilityInBox: 65 },
          { id: 6, name: "Ake", position: "LB", x: 85, y: 65, role: "Attacking FB", detail: "Provides width when Grealish cuts inside, quality crosses", overallRating: 81, age: 27, pounceAbilityInBox: 70 },
          { id: 16, name: "Rodri", position: "CDM", x: 65, y: 55, role: "Deep Playmaker", detail: "Drops between CBs in build-up, anchors the system", overallRating: 87, age: 26, pounceAbilityInBox: 75 },
          { id: 17, name: "De Bruyne", position: "CM", x: 35, y: 35, role: "Advanced Playmaker", detail: "Occupies right half-space, creative genius with impossible passes", overallRating: 91, age: 31, pounceAbilityInBox: 85 },
          { id: 8, name: "Gündogan", position: "CM", x: 70, y: 35, role: "Roaming 8", detail: "Finds pockets between lines, ghosting into box with perfect timing", overallRating: 85, age: 32, pounceAbilityInBox: 85 },
          { id: 26, name: "Mahrez", position: "RW", x: 15, y: 30, role: "Inverted Winger", detail: "Cuts inside creating central overloads, left foot is deadly", overallRating: 86, age: 31, pounceAbilityInBox: 85 },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 20, role: "Target Man", detail: "Pins backline, creates space for others even when marked", overallRating: 91, age: 22, pounceAbilityInBox: 95 },
          { id: 10, name: "Grealish", position: "LW", x: 95, y: 25, role: "Wide Playmaker", detail: "Hugs touchline then cuts inside, draws 2-3 players with dribbling", overallRating: 84, age: 27, pounceAbilityInBox: 80 }
        ],
        movements: [
          { from: { x: 15, y: 65 }, to: { x: 22, y: 50 }, type: 'movement', player: 'Ake Inverts', color: '#6CABDD' },
          { from: { x: 85, y: 75 }, to: { x: 85, y: 55 }, type: 'movement', player: 'Walker Attacks the Space Left Behind', color: '#6CABDD' },
          { from: { x: 50, y: 25 }, to: { x: 50, y: 10 }, type: 'movement', player: 'Haaland Pins Backline', color: 'red' }
        ],
        zones: [
          { x: 20, y: 35, width: 35, height: 25, color: 'rgba(108, 171, 221, 0.3)', label: 'Left Half-Space Overload' },
          { x: 60, y: 35, width: 35, height: 25, color: 'rgba(108, 171, 221, 0.3)', label: 'Right Half-Space Creation' }
        ]
      },
      2: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Covers space behind highest defensive line in world football", overallRating: 89, age: 29, pounceAbilityInBox: 55 },
          { id: 2, name: "Walker", position: "RB", x: 20, y: 75, role: "Recovery FB", detail: "Uses pace to track back from any position instantly", overallRating: 85, age: 32, pounceAbilityInBox: 70 },
          { id: 5, name: "Stones", position: "CB", x: 40, y: 78, role: "Aggressive CB", detail: "Steps out to press, reads game to intercept early", overallRating: 83, age: 28, pounceAbilityInBox: 70 },
          { id: 25, name: "Akanji", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Covers for Stones' pressing with intelligent positioning", overallRating: 81, age: 27, pounceAbilityInBox: 65 },
          { id: 6, name: "Ake", position: "LB", x: 80, y: 75, role: "Tracking FB", detail: "Tracks runners religiously from attacking positions", overallRating: 81, age: 27, pounceAbilityInBox: 70 },
          { id: 16, name: "Rodri", position: "CDM", x: 50, y: 68, role: "Defensive Screen", detail: "Covers space in front of defense, breaks up counters", overallRating: 87, age: 26, pounceAbilityInBox: 75 },
          { id: 17, name: "De Bruyne", position: "CM", x: 35, y: 60, role: "Pressing Midfielder", detail: "Intelligent pressing forces opponents into difficult areas", overallRating: 91, age: 31, pounceAbilityInBox: 85 },
          { id: 8, name: "Gündogan", position: "CM", x: 65, y: 60, role: "Supporting Presser", detail: "Supports press while maintaining positional discipline", overallRating: 85, age: 32, pounceAbilityInBox: 85 },
          { id: 26, name: "Mahrez", position: "RW", x: 20, y: 50, role: "Wide Presser", detail: "Forces play inside where City can win ball in numbers", overallRating: 86, age: 31, pounceAbilityInBox: 85 },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 40, role: "Pressing Forward", detail: "Triggers press by cutting passing lanes to center-backs", overallRating: 91, age: 22, pounceAbilityInBox: 95 },
          { id: 10, name: "Grealish", position: "LW", x: 80, y: 50, role: "Defensive Winger", detail: "Works back to help press, never stops running for team", overallRating: 84, age: 27, pounceAbilityInBox: 80 }
        ],
        zones: [
          { x: 0, y: 20, width: 100, height: 15, color: 'rgba(255, 0, 0, 0.2)', label: 'Highest Defensive Line' },
          { x: 0, y: 35, width: 100, height: 30, color: 'rgba(255, 165, 0, 0.2)', label: 'Coordinated Press Zone' }
        ]
      },
      3: {
        corners: [
          {
            name: "Overload Near Post",
            players: [
              { id: 5, name: "Stones", position: "CB", x: 65, y: 82, role: "Near Post Target", detail: "Attacks near post with aggression and timing", overallRating: 83, age: 28, pounceAbilityInBox: 70, headingRating: 86 },
              { id: 9, name: "Haaland", position: "ST", x: 52, y: 90, role: "Primary Threat", detail: "Unstoppable in air, causes chaos in box", overallRating: 91, age: 22, pounceAbilityInBox: 95, headingRating: 92, pouncerRating: 90 },
              { id: 25, name: "Akanji", position: "CB", x: 55, y: 80, role: "Secondary Target", detail: "Arrives late with power header", overallRating: 81, age: 27, pounceAbilityInBox: 65, headingRating: 82 },
              { id: 17, name: "De Bruyne", position: "CM", x: 105, y: 85, role: "Corner Specialist", detail: "Pinpoint delivery with both feet", overallRating: 91, age: 31, pounceAbilityInBox: 85, tightSpacesRating: 90 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 88, y: 82, role: "Defender" }, 
              { x: 78, y: 78, role: "Defender" }, { x: 82, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // MNU 08
  {
    name: "Manchester United 2007/08",
    manager: "Sir Alex Ferguson",
    achievement: "Champions League Winners - Red Devils Perfection",
    formation: "4-4-2 / 4-2-3-1",
    style: "Wing Play, Counter-Attacking, Fergie Time Magic",
    description: "Sir Alex's masterpiece combining youth and experience. The perfect blend of pace on the wings, steel in midfield, and Ronaldo's genius creating one of United's greatest ever teams.",
    primaryColor: "#DA020E",
    secondaryColor: "#FBE122",
    quote: "Attack, attack, attack - that's the Manchester United way. Never give in.",
    managerImage: getManagerImage("Sir Alex Ferguson", "#DA020E"),
    phases: {
      0: {
        players: [
          { id: 1, name: "van der Sar", position: "GK", x: 50, y: 95, role: "Commanding GK", detail: "Dutch legend bringing calmness to United defense", overallRating: 85, age: 37, pounceAbilityInBox: 55 },
          { id: 2, name: "Brown", position: "RB", x: 15, y: 75, role: "Solid RB", detail: "Academy graduate providing defensive stability", overallRating: 78, age: 28, pounceAbilityInBox: 65 },
          { id: 15, name: "Vidić", position: "CB", x: 40, y: 80, role: "Warrior CB", detail: "Serbian warrior who feared nothing", overallRating: 85, age: 26, pounceAbilityInBox: 75, headingRating: 91 },
          { id: 5, name: "Ferdinand", position: "CB", x: 60, y: 80, role: "Ball-Playing CB", detail: "England's finest center-back with elegance", overallRating: 88, age: 29, pounceAbilityInBox: 70, headingRating: 86 },
          { id: 3, name: "Evra", position: "LB", x: 85, y: 75, role: "Attacking LB", detail: "French speed demon bombing up and down", overallRating: 82, age: 26, pounceAbilityInBox: 70 },
          { id: 18, name: "Scholes", position: "CM", x: 35, y: 55, role: "Deep Playmaker", detail: "Ginger genius with incredible passing range", overallRating: 86, age: 33, pounceAbilityInBox: 80, tightSpacesRating: 90 },
          { id: 16, name: "Carrick", position: "CDM", x: 65, y: 55, role: "Anchor Man", detail: "England's most underrated midfielder", overallRating: 84, age: 26, pounceAbilityInBox: 75 },
          { id: 7, name: "Ronaldo", position: "RW", x: 20, y: 40, role: "Superstar Winger", detail: "Portuguese phenomenon at his explosive peak", overallRating: 87, age: 22, pounceAbilityInBox: 90, headingRating: 85, pouncerRating: 88 },
          { id: 8, name: "Anderson", position: "LM", x: 80, y: 55, role: "Brazilian Flair", detail: "Samba skills in midfield battles", overallRating: 80, age: 19, pounceAbilityInBox: 75 },
          { id: 10, name: "Rooney", position: "ST", x: 45, y: 25, role: "Complete Forward", detail: "England's golden boy with incredible work rate", overallRating: 87, age: 22, pounceAbilityInBox: 90, pouncerRating: 88 },
          { id: 9, name: "Tevez", position: "ST", x: 55, y: 25, role: "Argentine Bulldog", detail: "Never stopped running, fighting, creating", overallRating: 85, age: 23, pounceAbilityInBox: 90, pouncerRating: 87 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "van der Sar", position: "GK", x: 50, y: 88, role: "Distribution Master", detail: "Quick throws to wingers starting attacks", overallRating: 85, age: 37, pounceAbilityInBox: 55 },
          { id: 2, name: "Brown", position: "RB", x: 12, y: 65, role: "Overlapping RB", detail: "Supports Ronaldo with crossing ability", overallRating: 78, age: 28, pounceAbilityInBox: 65 },
          { id: 15, name: "Vidić", position: "CB", x: 40, y: 78, role: "Aggressive CB", detail: "Steps out to win ball with authority", overallRating: 85, age: 26, pounceAbilityInBox: 75, headingRating: 91 },
          { id: 5, name: "Ferdinand", position: "CB", x: 60, y: 78, role: "Playmaker CB", detail: "Sprays passes to start attacks", overallRating: 88, age: 29, pounceAbilityInBox: 70, headingRating: 86 },
          { id: 3, name: "Evra", position: "LB", x: 92, y: 60, role: "Wing-Back", detail: "Creates width down the left flank", overallRating: 82, age: 26, pounceAbilityInBox: 70 },
          { id: 18, name: "Scholes", position: "CM", x: 35, y: 65, role: "Deep Maestro", detail: "Dictates tempo from deep position", overallRating: 86, age: 33, pounceAbilityInBox: 80, tightSpacesRating: 90 },
          { id: 16, name: "Carrick", position: "CDM", x: 65, y: 65, role: "Protective Mid", detail: "Shields defense, launches attacks", overallRating: 84, age: 26, pounceAbilityInBox: 75 },
          { id: 7, name: "Ronaldo", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside for devastating shots", overallRating: 87, age: 22, pounceAbilityInBox: 90, pouncerRating: 88 },
          { id: 8, name: "Anderson", position: "LM", x: 75, y: 50, role: "Wide Playmaker", detail: "Brazilian magic creating from wide", overallRating: 80, age: 19, pounceAbilityInBox: 75 },
          { id: 10, name: "Rooney", position: "ST", x: 40, y: 20, role: "False 9", detail: "Drops deep to create space", overallRating: 87, age: 22, pounceAbilityInBox: 90, pouncerRating: 88 },
          { id: 9, name: "Tevez", position: "ST", x: 60, y: 20, role: "Pressing Forward", detail: "Harasses defenders constantly", overallRating: 85, age: 23, pounceAbilityInBox: 90, pouncerRating: 87 }
        ],
        movements: [
          { from: { x: 20, y: 40 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Ronaldo Cuts Inside', color: '#DA020E' },
          { from: { x: 85, y: 75 }, to: { x: 92, y: 60 }, type: 'movement', player: 'Evra Bombs Forward', color: '#FBE122' },
          { from: { x: 45, y: 25 }, to: { x: 40, y: 20 }, type: 'movement', player: 'Rooney Drops', color: '#DA020E' }
        ],
        zones: [
          { x: 15, y: 15, width: 70, height: 30, color: 'rgba(218, 2, 14, 0.3)', label: 'United Attack Zone - Fergie Magic' },
          { x: 80, y: 45, width: 20, height: 35, color: 'rgba(251, 225, 34, 0.3)', label: 'Left Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "van der Sar", position: "GK", x: 50, y: 88, role: "Veteran Leader", detail: "Organizing defense with Dutch authority", overallRating: 85, age: 37, pounceAbilityInBox: 55 },
          { id: 2, name: "Brown", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Academy product never out of position", overallRating: 78, age: 28, pounceAbilityInBox: 65 },
          { id: 15, name: "Vidić", position: "CB", x: 40, y: 75, role: "Destroyer CB", detail: "Serbian wall winning every duel", overallRating: 85, age: 26, pounceAbilityInBox: 75, headingRating: 91 },
          { id: 5, name: "Ferdinand", position: "CB", x: 60, y: 75, role: "Covering CB", detail: "Uses pace and reading to cover", overallRating: 88, age: 29, pounceAbilityInBox: 70, headingRating: 86 },
          { id: 3, name: "Evra", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "French pace tracking back instantly", overallRating: 82, age: 26, pounceAbilityInBox: 70 },
          { id: 18, name: "Scholes", position: "CM", x: 35, y: 60, role: "Pressing Mid", detail: "Ginger genius with tough tackling", overallRating: 86, age: 33, pounceAbilityInBox: 80, tightSpacesRating: 90 },
          { id: 16, name: "Carrick", position: "CDM", x: 65, y: 60, role: "Defensive Screen", detail: "England's shield protecting defense", overallRating: 84, age: 26, pounceAbilityInBox: 75 },
          { id: 7, name: "Ronaldo", position: "RW", x: 25, y: 50, role: "Tracking Winger", detail: "Even the superstar worked back", overallRating: 87, age: 22, pounceAbilityInBox: 90 },
          { id: 8, name: "Anderson", position: "LM", x: 75, y: 50, role: "Defensive Mid", detail: "Brazilian covering every blade of grass", overallRating: 80, age: 19, pounceAbilityInBox: 75 },
          { id: 10, name: "Rooney", position: "ST", x: 45, y: 35, role: "Pressing Forward", detail: "England's bulldog harassing defenders", overallRating: 87, age: 22, pounceAbilityInBox: 90 },
          { id: 9, name: "Tevez", position: "ST", x: 55, y: 35, role: "Work Rate Forward", detail: "Argentine never stopping his pressing", overallRating: 85, age: 23, pounceAbilityInBox: 90 }
        ],
        zones: [
          { x: 0, y: 50, width: 100, height: 35, color: 'rgba(251, 225, 34, 0.2)', label: 'United Defensive Work - Champions League Winners' }
        ]
      },
      3: {
        corners: [
          {
            name: "Vidić Warrior Header",
            players: [
              { id: 15, name: "Vidić", position: "CB", x: 85, y: 82, role: "Aerial Warrior", detail: "Serbian destroyer unstoppable in air", overallRating: 85, age: 26, pounceAbilityInBox: 75 },
              { id: 5, name: "Ferdinand", position: "CB", x: 78, y: 78, role: "England Captain", detail: "Leadership and aerial ability", overallRating: 88, age: 29, pounceAbilityInBox: 70 },
              { id: 10, name: "Rooney", position: "ST", x: 82, y: 75, role: "All-Round Threat", detail: "Dangerous anywhere in the box", overallRating: 87, age: 22, pounceAbilityInBox: 90 },
              { id: 7, name: "Ronaldo", position: "RW", x: 95, y: 85, role: "Portuguese Precision", detail: "Perfect delivery with either foot", overallRating: 87, age: 22, pounceAbilityInBox: 90 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Liverpool 2018-20
  {
    name: "Liverpool 2018-20",
    manager: "Jürgen Klopp", 
    achievement: "Champions League & Premier League - Heavy Metal Football",
    formation: "4-3-3",
    style: "Gegenpress, Overlapping Fullbacks, Relentless Intensity",
    description: "The most intense pressing machine in football history. Klopp's warriors turned doubters into believers with 6-second gegenpress and fullbacks who were basically wingers.",
    primaryColor: "#C8102E",
    secondaryColor: "#00B2A9", 
    quote: "We must turn from doubters into believers. This is heavy metal football!",
    managerImage: getManagerImage("Jurgen Klopp", "#C8102E"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "World-class shot-stopper who brought calmness to defense", overallRating: 89, age: 27, pounceAbilityInBox: 55 },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 15, y: 75, role: "Right-Back", detail: "22-year-old quarterback creating more chances than most midfielders", overallRating: 78, age: 21, pounceAbilityInBox: 70 },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 80, role: "Defensive Leader", detail: "Colossus who transformed Liverpool's defense completely", overallRating: 90, age: 28, pounceAbilityInBox: 80 },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 80, role: "Pace & Coverage", detail: "Covers for high line with intelligent positioning", overallRating: 80, age: 22, pounceAbilityInBox: 70 },
          { id: 26, name: "Robertson", position: "LB", x: 85, y: 75, role: "Left-Back", detail: "Scottish warrior with endless energy bombing forward", overallRating: 85, age: 25, pounceAbilityInBox: 70 },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 65, role: "Holding Mid", detail: "Brazilian destroyer who breaks up everything", overallRating: 85, age: 26, pounceAbilityInBox: 75 },
          { id: 14, name: "Henderson", position: "CM", x: 35, y: 55, role: "Captain", detail: "Leads by example, drives team forward with passion", overallRating: 84, age: 29, pounceAbilityInBox: 75 },
          { id: 5, name: "Wijnaldum", position: "CM", x: 65, y: 55, role: "Press Resistant", detail: "Glides through tight spaces with technical excellence", overallRating: 84, age: 28, pounceAbilityInBox: 85 },
          { id: 11, name: "Salah", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Egyptian King with deadly left foot cutting inside", overallRating: 89, age: 27, pounceAbilityInBox: 92 },
          { id: 9, name: "Firmino", position: "ST", x: 50, y: 30, role: "False 9", detail: "Creates space with movement, links everything together", overallRating: 86, age: 28, pounceAbilityInBox: 90 },
          { id: 10, name: "Mané", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Senegalese speedster with direct running and clinical finishing", overallRating: 88, age: 27, pounceAbilityInBox: 92 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick distribution starts counter-attacks instantly", overallRating: 89, age: 27, pounceAbilityInBox: 55 },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 8, y: 45, role: "Wing-Back", detail: "Essentially right winger creating havoc with crosses", overallRating: 78, age: 21, pounceAbilityInBox: 70 },
          { id: 4, name: "Van Dijk", position: "CB", x: 30, y: 78, role: "Ball-Playing CB", detail: "Pings 50-yard passes to wingers with precision", overallRating: 90, age: 28, pounceAbilityInBox: 80 },
          { id: 12, name: "Gomez", position: "CB", x: 70, y: 78, role: "Covering CB", detail: "Uses pace to cover spaces when fullbacks attack", overallRating: 80, age: 22, pounceAbilityInBox: 70 },
          { id: 26, name: "Robertson", position: "LB", x: 92, y: 45, role: "Attack FB", detail: "Hugs touchline, relentless overlapping runs", overallRating: 85, age: 25, pounceAbilityInBox: 70 },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 68, role: "Defensive Anchor", detail: "Covers for both fullbacks, launches quick transitions", overallRating: 85, age: 26, pounceAbilityInBox: 75 },
          { id: 14, name: "Henderson", position: "CM", x: 28, y: 55, role: "Box-to-Box", detail: "Covers every blade of grass, switches play perfectly", overallRating: 84, age: 29, pounceAbilityInBox: 75 },
          { id: 5, name: "Wijnaldum", position: "CM", x: 72, y: 55, role: "Advanced 8", detail: "Makes late runs into box, press resistant in tight spaces", overallRating: 84, age: 28, pounceAbilityInBox: 85 },
          { id: 11, name: "Salah", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside from right half-space for left-foot finishes", overallRating: 89, age: 27, pounceAbilityInBox: 92 },
          { id: 9, name: "Firmino", position: "ST", x: 55, y: 35, role: "False 9", detail: "Drops deep creating 'diamond of space' for front three", overallRating: 86, age: 28, pounceAbilityInBox: 90 },
          { id: 10, name: "Mané", position: "LW", x: 75, y: 25, role: "Wide Forward", detail: "Direct running at pace, stretches defense with movement", overallRating: 88, age: 27, pounceAbilityInBox: 92 }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 8, y: 45 }, type: 'movement', player: 'Robertson Bombs Forward', color: '#C8102E' },
          { from: { x: 85, y: 75 }, to: { x: 92, y: 45 }, type: 'movement', player: 'TAA Overlaps', color: '#C8102E' }
        ],
        zones: [
          { x: 0, y: 30, width: 20, height: 40, color: 'rgba(200, 16, 46, 0.3)', label: 'Right Wing Overload' },
          { x: 80, y: 30, width: 20, height: 40, color: 'rgba(200, 16, 46, 0.3)', label: 'Left Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 88, role: "Sweeper", detail: "Covers highest line, quick to clear danger", overallRating: 89, age: 27, pounceAbilityInBox: 55 },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 20, y: 70, role: "Recovery FB", detail: "Incredible pace to track back from advanced positions", overallRating: 78, age: 21, pounceAbilityInBox: 70 },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 75, role: "Aggressive Press", detail: "Steps out to win ball high, dominant in duels", overallRating: 90, age: 28, pounceAbilityInBox: 80 },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 75, role: "Recovery Pace", detail: "Uses pace to cover Van Dijk's aggressive pressing", overallRating: 80, age: 22, pounceAbilityInBox: 70 },
          { id: 26, name: "Robertson", position: "LB", x: 80, y: 70, role: "Work Rate FB", detail: "Incredible stamina to track back instantly", overallRating: 85, age: 25, pounceAbilityInBox: 70 },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 65, role: "Press Trigger", detail: "Wins ball and starts famous 6-second gegenpress", overallRating: 85, age: 26, pounceAbilityInBox: 75 },
          { id: 14, name: "Henderson", position: "CM", x: 35, y: 50, role: "Gegenpress Leader", detail: "Immediate counter-pressing, no time for opponents", overallRating: 84, age: 29, pounceAbilityInBox: 75 },
          { id: 5, name: "Wijnaldum", position: "CM", x: 65, y: 50, role: "Press Support", detail: "Intelligent positioning to support gegenpress", overallRating: 84, age: 28, pounceAbilityInBox: 85 },
          { id: 11, name: "Salah", position: "RW", x: 25, y: 40, role: "Wide Presser", detail: "Forces play inside where Liverpool wins in numbers", overallRating: 89, age: 27, pounceAbilityInBox: 92 },
          { id: 9, name: "Firmino", position: "ST", x: 50, y: 35, role: "False 9 Press", detail: "Triggers press, cuts passing lanes to center-backs", overallRating: 86, age: 28, pounceAbilityInBox: 90 },
          { id: 10, name: "Mané", position: "LW", x: 75, y: 40, role: "Intense Presser", detail: "Never stops running, breaks opponents' will with pressing", overallRating: 88, age: 27, pounceAbilityInBox: 92 }
        ],
        zones: [
          { x: 0, y: 20, width: 100, height: 40, color: 'rgba(255, 0, 0, 0.3)', zIndex: 1000, label: 'Gegenpress Zone - 6 Second Rule'}
        ]
      },
      3: {
        corners: [
          {
            name: "Van Dijk Near Post Flick",
            players: [
              { id: 4, name: "Van Dijk", position: "CB", x: 88, y: 82, role: "Near Post Target", detail: "Flicks on with incredible precision and timing", overallRating: 90, age: 28, pounceAbilityInBox: 80 },
              { id: 9, name: "Firmino", position: "ST", x: 78, y: 78, role: "Second Wave", detail: "Attacks flick-ons with intelligent movement", overallRating: 86, age: 28, pounceAbilityInBox: 90 },
              { id: 10, name: "Mané", position: "LW", x: 82, y: 75, role: "Back Post", detail: "Times arrival perfectly at back post", overallRating: 88, age: 27, pounceAbilityInBox: 92 },
              { id: 26, name: "Robertson", position: "LB", x: 95, y: 85, role: "Corner Taker", detail: "Pinpoint left-footed delivery", overallRating: 85, age: 25, pounceAbilityInBox: 70 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Chelsea 2016/17 - Conte
  {
    name: "Chelsea 2016/17",
    manager: "Antonio Conte",
    achievement: "Premier League Winners - 3-4-3 Revolution in England",
    formation: "3-4-3",
    style: "Wingbacks, Central Overloads, Intense Pressing",
    description: "Conte's tactical revolution that brought the 3-4-3 formation to the Premier League. Wing-backs provided width while three central defenders allowed aggressive pressing and possession dominance.",
    primaryColor: "#034694",
    secondaryColor: "#FFFFFF",
    quote: "I prefer to lose with my idea than to win with an idea that is not mine.",
    managerImage: getManagerImage("Antonio Conte", "#034694"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Courtois", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Belgian giant who commanded his area", overallRating: 89, age: 24, pounceAbilityInBox: 55 },
          { id: 24, name: "Cahill", position: "RCB", x: 25, y: 80, role: "Right CB", detail: "English warrior who adapted to three-man defense", overallRating: 82, age: 31, pounceAbilityInBox: 70 },
          { id: 30, name: "Luiz", position: "CB", x: 50, y: 80, role: "Ball-Playing CB", detail: "Brazilian flair in central defense, long passing expert", overallRating: 84, age: 29, pounceAbilityInBox: 75 },
          { id: 6, name: "Azpilicueta", position: "LCB", x: 75, y: 80, role: "Left CB", detail: "Spanish perfectionist who could play anywhere", overallRating: 85, age: 27, pounceAbilityInBox: 70 },
          { id: 28, name: "Moses", position: "RWB", x: 12, y: 65, role: "Right Wing-Back", detail: "Nigerian speed merchant bombing up and down flank", overallRating: 79, age: 26, pounceAbilityInBox: 75 },
          { id: 3, name: "Alonso", position: "LWB", x: 88, y: 65, role: "Left Wing-Back", detail: "Spanish overlord who redefined the wing-back role", overallRating: 79, age: 26, pounceAbilityInBox: 75 },
          { id: 7, name: "Kanté", position: "CM", x: 40, y: 55, role: "Destroyer", detail: "French octopus who was everywhere at once", overallRating: 83, age: 25, pounceAbilityInBox: 80 },
          { id: 4, name: "Matić", position: "CM", x: 60, y: 55, role: "Deep Playmaker", detail: "Serbian metronome controlling tempo", overallRating: 83, age: 28, pounceAbilityInBox: 75 },
          { id: 22, name: "Willian", position: "RW", x: 25, y: 40, role: "Right Winger", detail: "Brazilian trickster with incredible work rate", overallRating: 84, age: 28, pounceAbilityInBox: 85 },
          { id: 19, name: "Costa", position: "ST", x: 50, y: 25, role: "Target Man", detail: "Spanish-Brazilian warrior who fought for every ball", overallRating: 85, age: 28, pounceAbilityInBox: 90 },
          { id: 10, name: "Hazard", position: "LW", x: 75, y: 40, role: "Inverted Winger", detail: "Belgian magician who tormented Premier League defenders", overallRating: 89, age: 25, pounceAbilityInBox: 92 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Courtois", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Long kicks to wing-backs starting attacks", overallRating: 89, age: 24, pounceAbilityInBox: 55 },
          { id: 24, name: "Cahill", position: "RCB", x: 25, y: 75, role: "Aggressive CB", detail: "Steps out to press and win ball", overallRating: 82, age: 31, pounceAbilityInBox: 70 },
          { id: 30, name: "Luiz", position: "CB", x: 50, y: 75, role: "Playmaker CB", detail: "Pings long balls to wing-backs and forwards", overallRating: 84, age: 29, pounceAbilityInBox: 75 },
          { id: 6, name: "Azpilicueta", position: "LCB", x: 75, y: 75, role: "Covering CB", detail: "Covers for attacking wing-backs", overallRating: 85, age: 27, pounceAbilityInBox: 70 },
          { id: 28, name: "Moses", position: "RWB", x: 8, y: 45, role: "Attacking WB", detail: "Bombs forward creating width and crosses", overallRating: 79, age: 26, pounceAbilityInBox: 75 },
          { id: 3, name: "Alonso", position: "LWB", x: 92, y: 45, role: "Overlapping WB", detail: "Overlaps Hazard with perfect timing", overallRating: 79, age: 26, pounceAbilityInBox: 75 },
          { id: 7, name: "Kanté", position: "CM", x: 40, y: 65, role: "Box-to-Box", detail: "Covers ground, wins ball, starts attacks", overallRating: 83, age: 25, pounceAbilityInBox: 80 },
          { id: 4, name: "Matić", position: "CM", x: 60, y: 65, role: "Deep Anchor", detail: "Sits deep, switches play to wing-backs", overallRating: 83, age: 28, pounceAbilityInBox: 75 },
          { id: 22, name: "Willian", position: "RW", x: 30, y: 25, role: "Inside Right", detail: "Cuts inside creating overloads", overallRating: 84, age: 28, pounceAbilityInBox: 85 },
          { id: 19, name: "Costa", position: "ST", x: 50, y: 20, role: "False 9", detail: "Drops deep to create space for wingers", overallRating: 85, age: 28, pounceAbilityInBox: 90 },
          { id: 10, name: "Hazard", position: "LW", x: 70, y: 25, role: "Free Role", detail: "Drifts inside and wide with complete freedom", overallRating: 89, age: 25, pounceAbilityInBox: 92 }
        ],
        movements: [
          { from: { x: 12, y: 65 }, to: { x: 8, y: 45 }, type: 'movement', player: 'Moses Bombs Forward', color: '#034694' },
          { from: { x: 88, y: 65 }, to: { x: 92, y: 45 }, type: 'movement', player: 'Alonso Overlaps', color: '#034694' }
        ],
        zones: [
          { x: 0, y: 20, width: 100, height: 50, color: 'rgba(3, 70, 148, 0.3)', label: 'Wing-Back Attack Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Courtois", position: "GK", x: 50, y: 88, role: "Sweeper GK", detail: "Belgian giant covering high line", overallRating: 89, age: 24, pounceAbilityInBox: 55 },
          { id: 24, name: "Cahill", position: "RCB", x: 25, y: 70, role: "Aggressive CB", detail: "Steps out to win ball high", overallRating: 82, age: 31, pounceAbilityInBox: 70 },
          { id: 30, name: "Luiz", position: "CB", x: 50, y: 70, role: "Organizing CB", detail: "Commands the back three with intelligence", overallRating: 84, age: 29, pounceAbilityInBox: 75 },
          { id: 6, name: "Azpilicueta", position: "LCB", x: 75, y: 70, role: "Covering CB", detail: "Covers spaces with perfect positioning", overallRating: 85, age: 27, pounceAbilityInBox: 70 },
          { id: 28, name: "Moses", position: "RWB", x: 15, y: 60, role: "Tracking WB", detail: "Works back to help defense", overallRating: 79, age: 26, pounceAbilityInBox: 75 },
          { id: 3, name: "Alonso", position: "LWB", x: 85, y: 60, role: "Defensive WB", detail: "Maintains shape during press", overallRating: 79, age: 26, pounceAbilityInBox: 75 },
          { id: 7, name: "Kanté", position: "CM", x: 40, y: 55, role: "Midfield Anchor", detail: "Covers ground relentlessly", overallRating: 83, age: 25, pounceAbilityInBox: 80 },
          { id: 4, name: "Matić", position: "CM", x: 60, y: 55, role: "Defensive Mid", detail: "Shields the back three", overallRating: 83, age: 28, pounceAbilityInBox: 75 },
          { id: 22, name: "Willian", position: "RW", x: 30, y: 45, role: "Tracking Forward", detail: "Works back to help wing-back", overallRating: 84, age: 28, pounceAbilityInBox: 85 },
          { id: 19, name: "Costa", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Leads the press from front", overallRating: 85, age: 28, pounceAbilityInBox: 90 },
          { id: 10, name: "Hazard", position: "LW", x: 70, y: 45, role: "Defensive Forward", detail: "Even magicians pressed for Conte", overallRating: 89, age: 25, pounceAbilityInBox: 92 }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 50, color: 'rgba(3, 70, 148, 0.3)', label: 'Collective Pressing Zone' }
        ]
      },
      3: {
        corners: [
          {
            name: "Costa Target Header",
            players: [
              { id: 19, name: "Costa", position: "ST", x: 85, y: 82, role: "Aerial Warrior", detail: "Dominates in the air with power", overallRating: 85, age: 28, pounceAbilityInBox: 90 },
              { id: 24, name: "Cahill", position: "RCB", x: 78, y: 78, role: "English Target", detail: "Uses height and timing", overallRating: 82, age: 31, pounceAbilityInBox: 70 },
              { id: 30, name: "Luiz", position: "CB", x: 82, y: 75, role: "Secondary Threat", detail: "Arrives late with heading ability", overallRating: 84, age: 29, pounceAbilityInBox: 75 },
              { id: 10, name: "Hazard", position: "LW", x: 95, y: 85, role: "Corner Specialist", detail: "Pinpoint delivery", overallRating: 89, age: 25, pounceAbilityInBox: 92 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Real Madrid 2016/18
  {
    name: "Real Madrid 2016/18",
    manager: "Zinedine Zidane",
    achievement: "Three Consecutive Champions League Titles",
    formation: "4-3-3",
    style: "Counter-Attacking, Individual Brilliance, Clutch Moments",
    description: "Zidane's Galacticos 2.0 with Ronaldo's goals, Modric's magic, and Ramos' leadership. The most successful Champions League team ever, winning three in a row with dramatic comebacks.",
    primaryColor: "#FFFFFF",
    secondaryColor: "#FBE122",
    quote: "I don't have a tactic, I have great players.",
    managerImage: getManagerImage("Zinedine Zidane", "#FFFFFF"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Keylor Navas", position: "GK", x: 50, y: 95, role: "Shot-Stopper", detail: "Costa Rican hero with incredible reflexes", overallRating: 87, age: 31, pounceAbilityInBox: 55 },
          { id: 2, name: "Carvajal", position: "RB", x: 15, y: 75, role: "Attacking FB", detail: "Spanish warrior bombing up the flank", overallRating: 84, age: 26, pounceAbilityInBox: 70 },
          { id: 4, name: "Ramos", position: "CB", x: 40, y: 80, role: "Captain Clutch", detail: "Scored in finals, led with passion", overallRating: 90, age: 32, pounceAbilityInBox: 85 },
          { id: 5, name: "Varane", position: "CB", x: 60, y: 80, role: "French Elegance", detail: "Pace and composure combined", overallRating: 85, age: 25, pounceAbilityInBox: 75 },
          { id: 12, name: "Marcelo", position: "LB", x: 85, y: 75, role: "Attacking FB", detail: "Brazilian wizard essentially a winger", overallRating: 87, age: 30, pounceAbilityInBox: 80 },
          { id: 14, name: "Casemiro", position: "CDM", x: 50, y: 65, role: "Destroyer", detail: "Brazilian shield protecting midfield", overallRating: 85, age: 26, pounceAbilityInBox: 75 },
          { id: 8, name: "Kroos", position: "CM", x: 35, y: 55, role: "German Maestro", detail: "Controls tempo with perfect passing", overallRating: 90, age: 28, pounceAbilityInBox: 80 },
          { id: 10, name: "Modrić", position: "CM", x: 65, y: 55, role: "Croatian Magician", detail: "Dribbles through any pressure", overallRating: 89, age: 33, pounceAbilityInBox: 85 },
          { id: 11, name: "Bale", position: "RW", x: 20, y: 40, role: "Welsh Rocket", detail: "Pace and power from the right", overallRating: 89, age: 29, pounceAbilityInBox: 90 },
          { id: 9, name: "Benzema", position: "ST", x: 50, y: 25, role: "Link-Up Forward", detail: "French artist creating for others", overallRating: 86, age: 30, pounceAbilityInBox: 90 },
          { id: 7, name: "Ronaldo", position: "LW", x: 80, y: 40, role: "Goal Machine", detail: "Portuguese GOAT at his scoring peak", overallRating: 94, age: 33, pounceAbilityInBox: 95 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Keylor Navas", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Quick off line for counters", overallRating: 87, age: 31, pounceAbilityInBox: 55 },
          { id: 2, name: "Carvajal", position: "RB", x: 12, y: 50, role: "Overlapping FB", detail: "Creates width for Bale", overallRating: 84, age: 26, pounceAbilityInBox: 70 },
          { id: 4, name: "Ramos", position: "CB", x: 40, y: 78, role: "Aggressive CB", detail: "Steps up to win ball high", overallRating: 90, age: 32, pounceAbilityInBox: 85 },
          { id: 5, name: "Varane", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Uses pace to recover", overallRating: 85, age: 25, pounceAbilityInBox: 75 },
          { id: 12, name: "Marcelo", position: "LB", x: 92, y: 50, role: "Wing-Back", detail: "Attacks like a winger", overallRating: 87, age: 30, pounceAbilityInBox: 80 },
          { id: 14, name: "Casemiro", position: "CDM", x: 50, y: 65, role: "Anchor", detail: "Breaks up play, launches counters", overallRating: 85, age: 26, pounceAbilityInBox: 75 },
          { id: 8, name: "Kroos", position: "CM", x: 35, y: 55, role: "Deep Playmaker", detail: "Switches play to wings", overallRating: 90, age: 28, pounceAbilityInBox: 80 },
          { id: 10, name: "Modrić", position: "CM", x: 65, y: 55, role: "Box-to-Box", detail: "Carries ball forward", overallRating: 89, age: 33, pounceAbilityInBox: 85 },
          { id: 11, name: "Bale", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside for shots", overallRating: 89, age: 29, pounceAbilityInBox: 90 },
          { id: 9, name: "Benzema", position: "ST", x: 50, y: 30, role: "False 9", detail: "Drops deep to link", overallRating: 86, age: 30, pounceAbilityInBox: 90 },
          { id: 7, name: "Ronaldo", position: "LW", x: 75, y: 25, role: "Goal Scorer", detail: "Positions for clinical finishes", overallRating: 94, age: 33, pounceAbilityInBox: 95 }
        ],
        movements: [
          { from: { x: 85, y: 75 }, to: { x: 92, y: 50 }, type: 'movement', player: 'Marcelo Attacks', color: '#FFFFFF' },
          { from: { x: 50, y: 25 }, to: { x: 50, y: 30 }, type: 'movement', player: 'Benzema Drops', color: '#FBE122' },
          { from: { x: 20, y: 40 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Bale Cuts Inside', color: '#000000' }
        ],
        zones: [
          { x: 10, y: 15, width: 80, height: 35, color: 'rgba(255, 255, 255, 0.3)', label: 'Counter-Attack Launch Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Keylor Navas", position: "GK", x: 50, y: 88, role: "Reflex GK", detail: "Makes impossible saves in big moments", overallRating: 87, age: 31, pounceAbilityInBox: 55 },
          { id: 2, name: "Carvajal", position: "RB", x: 20, y: 70, role: "Disciplined FB", detail: "Maintains shape during transitions", overallRating: 84, age: 26, pounceAbilityInBox: 70 },
          { id: 4, name: "Ramos", position: "CB", x: 40, y: 75, role: "Warrior CB", detail: "Wins every duel with aggression", overallRating: 90, age: 32, pounceAbilityInBox: 85 },
          { id: 5, name: "Varane", position: "CB", x: 60, y: 75, role: "Recovery CB", detail: "Uses pace to cover spaces", overallRating: 85, age: 25, pounceAbilityInBox: 75 },
          { id: 12, name: "Marcelo", position: "LB", x: 80, y: 70, role: "Tracking FB", detail: "Recovers from attacking positions", overallRating: 87, age: 30, pounceAbilityInBox: 80 },
          { id: 14, name: "Casemiro", position: "CDM", x: 50, y: 65, role: "Defensive Shield", detail: "Breaks up counters relentlessly", overallRating: 85, age: 26, pounceAbilityInBox: 75 },
          { id: 8, name: "Kroos", position: "CM", x: 35, y: 55, role: "Press Resistant", detail: "Keeps possession under pressure", overallRating: 90, age: 28, pounceAbilityInBox: 80 },
          { id: 10, name: "Modrić", position: "CM", x: 65, y: 55, role: "Intelligent Presser", detail: "Wins ball with smart positioning", overallRating: 89, age: 33, pounceAbilityInBox: 85 },
          { id: 11, name: "Bale", position: "RW", x: 25, y: 45, role: "Wide Presser", detail: "Uses pace to press and track back", overallRating: 89, age: 29, pounceAbilityInBox: 90 },
          { id: 9, name: "Benzema", position: "ST", x: 50, y: 35, role: "Link Defender", detail: "Drops to help midfield", overallRating: 86, age: 30, pounceAbilityInBox: 90 },
          { id: 7, name: "Ronaldo", position: "LW", x: 75, y: 45, role: "Counter Threat", detail: "Always ready for breakaways", overallRating: 94, age: 33, pounceAbilityInBox: 95 }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 45, color: 'rgba(255, 0, 0, 0.2)', label: 'Collective Defensive Work' }
        ]
      },
      3: {
        corners: [
          {
            name: "Ramos Header Magic",
            players: [
              { id: 4, name: "Ramos", position: "CB", x: 85, y: 82, role: "Captain Clutch", detail: "Scored crucial headers in finals", overallRating: 90, age: 32, pounceAbilityInBox: 85 },
              { id: 5, name: "Varane", position: "CB", x: 78, y: 78, role: "French Height", detail: "Uses athleticism in the air", overallRating: 85, age: 25, pounceAbilityInBox: 75 },
              { id: 7, name: "Ronaldo", position: "ST", x: 82, y: 75, role: "Aerial Genius", detail: "Best header of ball in football history", overallRating: 94, age: 33, pounceAbilityInBox: 95 },
              { id: 8, name: "Kroos", position: "CM", x: 95, y: 85, role: "German Precision", detail: "Perfect delivery with either foot", overallRating: 90, age: 28, pounceAbilityInBox: 80 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

// Spain 2008-2012
  {
    name: "Spain 2008-2012",
    manager: "Vicente del Bosque",
    achievement: "La Roja Golden Generation - Euro, World Cup, Euro",
    formation: "4-6-0 / 4-3-3",
    style: "Tiki-Taka Perfection, False 9, 1000+ Passes Per Game",
    description: "The most successful national team ever. Del Bosque perfected tiki-taka with no striker, 70% possession, and a midfield so good they made football look like art.",
    primaryColor: "#C8102E",
    secondaryColor: "#AA151B",
    quote: "We don't have a Plan B because we don't need a Plan B. Plan A works.",
    managerImage: getManagerImage("Vicente del Bosque", "#C8102E"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 95, role: "Saint Iker", detail: "Spanish legend and captain who organized from back", overallRating: 89, age: 29, pounceAbilityInBox: 55 },
          { id: 15, name: "Ramos", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Center-back playing fullback for Spain", overallRating: 85, age: 24, pounceAbilityInBox: 80 },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Barcelona elegance in Spanish defense", overallRating: 85, age: 23, pounceAbilityInBox: 75 },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 80, role: "Captain Warrior", detail: "Heart and soul of Spanish defense", overallRating: 88, age: 32, pounceAbilityInBox: 80 },
          { id: 11, name: "Capdevila", position: "LB", x: 85, y: 75, role: "Overlapping FB", detail: "Provided width in possession system", overallRating: 80, age: 32, pounceAbilityInBox: 65 },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Pivot Master", detail: "Made the impossible look simple", overallRating: 81, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Pass Master", detail: "The architect of Spanish dominance", overallRating: 88, age: 30, pounceAbilityInBox: 85 },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "La Roja Magic", detail: "Scored World Cup final winner", overallRating: 87, age: 26, pounceAbilityInBox: 90 },
          { id: 21, name: "Silva", position: "RW", x: 20, y: 40, role: "False Winger", detail: "Drifted inside creating overloads", overallRating: 86, age: 24, pounceAbilityInBox: 85 },
          { id: 7, name: "Villa", position: "ST", x: 50, y: 25, role: "False 9", detail: "Top scorer without being a traditional striker", overallRating: 88, age: 29, pounceAbilityInBox: 90 },
          { id: 18, name: "Pedro", position: "LW", x: 80, y: 40, role: "Work Rate Winger", detail: "Barcelona intensity for Spain", overallRating: 82, age: 23, pounceAbilityInBox: 85 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Comfortable with feet, started attacks", overallRating: 89, age: 29, pounceAbilityInBox: 55 },
          { id: 15, name: "Ramos", position: "RB", x: 12, y: 60, role: "Inverted FB", detail: "Tucked inside to create midfield overloads", overallRating: 85, age: 24, pounceAbilityInBox: 80 },
          { id: 3, name: "Piqué", position: "CB", x: 35, y: 75, role: "Progressive CB", detail: "Stepped forward with ball confidently", overallRating: 85, age: 23, pounceAbilityInBox: 75 },
          { id: 5, name: "Puyol", position: "CB", x: 65, y: 75, role: "Covering Captain", detail: "Covered for Ramos with intelligent positioning", overallRating: 88, age: 32, pounceAbilityInBox: 80 },
          { id: 11, name: "Capdevila", position: "LB", x: 88, y: 55, role: "High FB", detail: "Provided width when Pedro cut inside", overallRating: 80, age: 32, pounceAbilityInBox: 65 },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 70, role: "Deep Regista", detail: "Dropped between CBs to create 3-man build-up", overallRating: 81, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Xavi", position: "CM", x: 25, y: 50, role: "Right Interior", detail: "Occupied half-spaces with genius", overallRating: 88, age: 30, pounceAbilityInBox: 85 },
          { id: 6, name: "Iniesta", position: "CM", x: 75, y: 50, role: "Left Interior", detail: "Glided through tightest spaces", overallRating: 87, age: 26, pounceAbilityInBox: 90 },
          { id: 21, name: "Silva", position: "RW", x: 30, y: 30, role: "False Winger", detail: "Created central overloads", overallRating: 86, age: 24, pounceAbilityInBox: 85 },
          { id: 7, name: "Villa", position: "F9", x: 55, y: 40, role: "False 9 Master", detail: "Dropped deep to create space", overallRating: 88, age: 29, pounceAbilityInBox: 90 },
          { id: 18, name: "Pedro", position: "LW", x: 70, y: 30, role: "Inside Left", detail: "Ran into spaces Villa created", overallRating: 82, age: 23, pounceAbilityInBox: 85 }
        ],
        movements: [
          { from: { x: 50, y: 25 }, to: { x: 55, y: 40 }, type: 'movement', player: 'Villa False 9 Drop', color: '#C8102E' },
          { from: { x: 35, y: 55 }, to: { x: 25, y: 50 }, type: 'movement', player: 'Xavi Half-Space', color: '#AA151B' },
          { from: { x: 20, y: 40 }, to: { x: 30, y: 30 }, type: 'movement', player: 'Silva Cuts Inside', color: '#FFD700' }
        ],
        zones: [
          { x: 20, y: 35, width: 60, height: 30, color: 'rgba(200, 16, 46, 0.3)', label: 'Tiki-Taka Central Dominance' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Organized defense with authority", overallRating: 89, age: 29, pounceAbilityInBox: 55 },
          { id: 15, name: "Ramos", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Maintained defensive shape", overallRating: 85, age: 24, pounceAbilityInBox: 80 },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 75, role: "Pressing CB", detail: "Stepped out to win ball high", overallRating: 85, age: 23, pounceAbilityInBox: 75 },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 75, role: "Warrior CB", detail: "Led defensive effort with passion", overallRating: 88, age: 32, pounceAbilityInBox: 80 },
          { id: 11, name: "Capdevila", position: "LB", x: 80, y: 70, role: "Tracking LB", detail: "Worked back with Spanish discipline", overallRating: 80, age: 32, pounceAbilityInBox: 65 },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Press Resistant", detail: "Never lost ball under pressure", overallRating: 81, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Intelligent Presser", detail: "Pressed with tactical intelligence", overallRating: 88, age: 30, pounceAbilityInBox: 85 },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Pressing Artist", detail: "Even artists pressed for La Roja", overallRating: 87, age: 26, pounceAbilityInBox: 90 },
          { id: 21, name: "Silva", position: "RW", x: 25, y: 45, role: "Tracking Winger", detail: "Worked back without compromise", overallRating: 86, age: 24, pounceAbilityInBox: 85 },
          { id: 7, name: "Villa", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Led press from the front", overallRating: 88, age: 29, pounceAbilityInBox: 90 },
          { id: 18, name: "Pedro", position: "LW", x: 75, y: 45, role: "Defensive Winger", detail: "Barcelona work rate for Spain", overallRating: 82, age: 23, pounceAbilityInBox: 85 }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 45, color: 'rgba(170, 21, 27, 0.3)', label: 'Spanish Collective Pressing' }
        ]
      },
      3: {
        corners: [
          {
            name: "Puyol Warrior Header",
            players: [
              { id: 5, name: "Puyol", position: "CB", x: 85, y: 82, role: "Captain Leader", detail: "Led by example in crucial moments", overallRating: 88, age: 32, pounceAbilityInBox: 80 },
              { id: 15, name: "Ramos", position: "RB", x: 78, y: 78, role: "Aerial Threat", detail: "Dangerous at both ends", overallRating: 85, age: 24, pounceAbilityInBox: 80 },
              { id: 3, name: "Piqué", position: "CB", x: 82, y: 75, role: "Tall Target", detail: "Used height effectively", overallRating: 85, age: 23, pounceAbilityInBox: 75 },
              { id: 8, name: "Xavi", position: "CM", x: 95, y: 85, role: "Precision Crosser", detail: "Perfect delivery as always", overallRating: 88, age: 30, pounceAbilityInBox: 85 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // 07 Milan- Carlo 
  {
    name: "AC Milan 2006/07",
    manager: "Carlo Ancelotti",
    achievement: "Champions League Winners - Italian Revenge",
    formation: "4-3-2-1 Christmas Tree",
    style: "Tactical Flexibility, Experience, Clinical Finishing",
    description: "Ancelotti's tactical masterpiece of experience and intelligence. The perfect Christmas Tree formation combining defensive solidity with creative freedom, delivering revenge against Liverpool in Athens.",
    primaryColor: "#FB090B",
    secondaryColor: "#000000",
    quote: "Football is made of dreams, and we made our dreams come true in Athens.",
    managerImage: getManagerImage("Carlo Ancelotti", "#FB090B"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Dida", position: "GK", x: 50, y: 95, role: "Brazilian Wall", detail: "Samba goalkeeper with incredible reflexes", overallRating: 86, age: 33, pounceAbilityInBox: 55 },
          { id: 44, name: "Oddo", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Italian fullback providing width", overallRating: 80, age: 31, pounceAbilityInBox: 65 },
          { id: 13, name: "Nesta", position: "CB", x: 40, y: 80, role: "Elegant Leader", detail: "Italian legend reading game perfectly", overallRating: 89, age: 31, pounceAbilityInBox: 75 },
          { id: 3, name: "Maldini", position: "CB", x: 60, y: 80, role: "Captain Legend", detail: "Milan icon playing center-back at 38", overallRating: 86, age: 38, pounceAbilityInBox: 70 },
          { id: 18, name: "Jankulovski", position: "LB", x: 85, y: 75, role: "Balanced LB", detail: "Macedonian providing defensive stability", overallRating: 79, age: 30, pounceAbilityInBox: 65 },
          { id: 23, name: "Ambrosini", position: "CDM", x: 45, y: 65, role: "Destroyer", detail: "Italian warrior winning midfield battles", overallRating: 82, age: 30, pounceAbilityInBox: 75 },
          { id: 8, name: "Gattuso", position: "CDM", x: 55, y: 65, role: "Pitbull", detail: "Calabrian fighter never giving up", overallRating: 86, age: 29, pounceAbilityInBox: 75 },
          { id: 21, name: "Pirlo", position: "CM", x: 50, y: 55, role: "Regista Maestro", detail: "Italian genius with impossible passes", overallRating: 88, age: 28, pounceAbilityInBox: 80 },
          { id: 22, name: "Kaká", position: "CAM", x: 45, y: 40, role: "Ballon d'Or Winner", detail: "Brazilian magician at his absolute peak", overallRating: 91, age: 25, pounceAbilityInBox: 90 },
          { id: 10, name: "Seedorf", position: "CAM", x: 55, y: 40, role: "Dutch Master", detail: "Surinamese-Dutch with incredible technique", overallRating: 86, age: 31, pounceAbilityInBox: 85 },
          { id: 7, name: "Inzaghi", position: "ST", x: 50, y: 25, role: "Super Pippo", detail: "Italian fox who lived offside", overallRating: 82, age: 34, pounceAbilityInBox: 95 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Dida", position: "GK", x: 50, y: 88, role: "Distribution Master", detail: "Brazilian precision starting attacks", overallRating: 86, age: 33, pounceAbilityInBox: 55 },
          { id: 44, name: "Oddo", position: "RB", x: 12, y: 65, role: "Overlapping RB", detail: "Italian providing width and crosses", overallRating: 80, age: 31, pounceAbilityInBox: 65 },
          { id: 13, name: "Nesta", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Italian class bringing ball forward", overallRating: 89, age: 31, pounceAbilityInBox: 75 },
          { id: 3, name: "Maldini", position: "CB", x: 60, y: 78, role: "Veteran Leader", detail: "Milan legend organizing from defense", overallRating: 86, age: 38, pounceAbilityInBox: 70 },
          { id: 18, name: "Jankulovski", position: "LB", x: 88, y: 65, role: "Supporting LB", detail: "Provides balance when needed", overallRating: 79, age: 30, pounceAbilityInBox: 65 },
          { id: 23, name: "Ambrosini", position: "CDM", x: 45, y: 70, role: "Dynamic Mid", detail: "Italian covering ground efficiently", overallRating: 82, age: 30, pounceAbilityInBox: 75 },
          { id: 8, name: "Gattuso", position: "CDM", x: 55, y: 70, role: "Ball Winner", detail: "Wins everything, launches attacks", overallRating: 86, age: 29, pounceAbilityInBox: 75 },
          { id: 21, name: "Pirlo", position: "CM", x: 50, y: 60, role: "Deep Playmaker", detail: "Italian conductor orchestrating attacks", overallRating: 88, age: 28, pounceAbilityInBox: 80 },
          { id: 22, name: "Kaká", position: "CAM", x: 40, y: 30, role: "Creative Genius", detail: "Brazilian magic creating everything", overallRating: 91, age: 25, pounceAbilityInBox: 90 },
          { id: 10, name: "Seedorf", position: "CAM", x: 60, y: 30, role: "Dutch Elegance", detail: "Technique and vision combined", overallRating: 86, age: 31, pounceAbilityInBox: 85 },
          { id: 7, name: "Inzaghi", position: "ST", x: 50, y: 20, role: "Poacher Supreme", detail: "Italian fox finding space everywhere", overallRating: 82, age: 34, pounceAbilityInBox: 95 }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 12, y: 65 }, type: 'movement', player: 'Oddo Overlaps', color: '#FB090B' },
          { from: { x: 45, y: 40 }, to: { x: 40, y: 30 }, type: 'movement', player: 'Kaká Magic', color: '#000000' },
          { from: { x: 50, y: 55 }, to: { x: 50, y: 60 }, type: 'movement', player: 'Pirlo Orchestrates', color: '#FB090B' }
        ],
        zones: [
          { x: 30, y: 20, width: 40, height: 25, color: 'rgba(251, 9, 11, 0.3)', label: 'Christmas Tree Attack Zone' },
          { x: 35, y: 45, width: 30, height: 25, color: 'rgba(0, 0, 0, 0.3)', label: 'Creative Hub - Pirlo Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Dida", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Brazilian authority in goal", overallRating: 86, age: 33, pounceAbilityInBox: 55 },
          { id: 44, name: "Oddo", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Italian defensive discipline", overallRating: 80, age: 31, pounceAbilityInBox: 65 },
          { id: 13, name: "Nesta", position: "CB", x: 40, y: 75, role: "Defensive Maestro", detail: "Italian legend reading everything", overallRating: 89, age: 31, pounceAbilityInBox: 75 },
          { id: 3, name: "Maldini", position: "CB", x: 60, y: 75, role: "Captain Leader", detail: "Milan icon leading by example at 38", overallRating: 86, age: 38, pounceAbilityInBox: 70 },
          { id: 18, name: "Jankulovski", position: "LB", x: 80, y: 70, role: "Solid LB", detail: "Macedonian defensive reliability", overallRating: 79, age: 30, pounceAbilityInBox: 65 },
          { id: 23, name: "Ambrosini", position: "CDM", x: 45, y: 65, role: "Defensive Mid", detail: "Italian warrior protecting defense", overallRating: 82, age: 30, pounceAbilityInBox: 75 },
          { id: 8, name: "Gattuso", position: "CDM", x: 55, y: 65, role: "Midfield Destroyer", detail: "Calabrian pitbull winning everything", overallRating: 86, age: 29, pounceAbilityInBox: 75 },
          { id: 21, name: "Pirlo", position: "CM", x: 50, y: 60, role: "Deep Anchor", detail: "Italian genius even defended with class", overallRating: 88, age: 28, pounceAbilityInBox: 80 },
          { id: 22, name: "Kaká", position: "CAM", x: 45, y: 50, role: "Defensive CAM", detail: "Brazilian star tracking back", overallRating: 91, age: 25, pounceAbilityInBox: 90 },
          { id: 10, name: "Seedorf", position: "CAM", x: 55, y: 50, role: "Work Rate CAM", detail: "Dutch experience working for team", overallRating: 86, age: 31, pounceAbilityInBox: 85 },
          { id: 7, name: "Inzaghi", position: "ST", x: 50, y: 35, role: "Counter Threat", detail: "Italian fox ready for counter", overallRating: 82, age: 34, pounceAbilityInBox: 95 }
        ],
        zones: [
          { x: 0, y: 50, width: 100, height: 35, color: 'rgba(0, 0, 0, 0.2)', label: 'Italian Defensive Discipline - Champions League Winners' }
        ]
      },
      3: {
        corners: [
          {
            name: "Maldini Leadership Header",
            players: [
              { id: 3, name: "Maldini", position: "CB", x: 85, y: 82, role: "Captain Legend", detail: "Milan icon dangerous at set pieces even at 38", overallRating: 86, age: 38, pounceAbilityInBox: 70 },
              { id: 13, name: "Nesta", position: "CB", x: 78, y: 78, role: "Elegant Threat", detail: "Italian class with perfect timing", overallRating: 89, age: 31, pounceAbilityInBox: 75 },
              { id: 7, name: "Inzaghi", position: "ST", x: 82, y: 75, role: "Box Predator", detail: "Italian fox finding space in chaos", overallRating: 82, age: 34, pounceAbilityInBox: 95 },
              { id: 21, name: "Pirlo", position: "CM", x: 95, y: 85, role: "Set Piece Master", detail: "Italian genius with impossible precision", overallRating: 88, age: 28, pounceAbilityInBox: 80 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },
  
  // AC Milan 1987-1991 - Sacchi
  {
    name: "AC Milan 1987-1991",
    manager: "Arrigo Sacchi",
    achievement: "Back-to-back European Cups (1989, 1990) - The Pressing Revolution",
    formation: "4-4-2",
    style: "High Pressing, Zonal Marking, Offside Trap Mastery",
    description: "Sacchi's Milan revolutionized football with the highest defensive line ever seen, perfect pressing synchronization, and a system so advanced that FIFA changed the offside law because of them.",
    primaryColor: "#FB090B",
    secondaryColor: "#000000",
    quote: "Football is born in the brain, not in the body. My Milan didn't run more than others, we just ran better.",
    managerImage: getManagerImage("Arrigo Sacchi", "#FB090B"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Galli", position: "GK", x: 50, y: 95, role: "Traditional GK", detail: "Solid shot-stopper behind the revolutionary high line", overallRating: 82, age: 32, pounceAbilityInBox: 50 },
          { id: 2, name: "Tassotti", position: "RB", x: 15, y: 75, role: "Attacking FB", detail: "Disciplined defender who provided width in attack", overallRating: 84, age: 30, pounceAbilityInBox: 65 },
          { id: 5, name: "Costacurta", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Elegant defender comfortable on the ball", overallRating: 85, age: 24, pounceAbilityInBox: 70 },
          { id: 6, name: "Baresi", position: "CB", x: 60, y: 80, role: "Libero", detail: "The conductor - reading the game and orchestrating the offside trap", overallRating: 90, age: 28, pounceAbilityInBox: 75 },
          { id: 3, name: "Maldini", position: "LB", x: 85, y: 75, role: "Attacking FB", detail: "Revolutionary fullback who attacked relentlessly", overallRating: 86, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Donadoni", position: "RM", x: 25, y: 55, role: "Wide Midfielder", detail: "Intelligent wide player providing balance", overallRating: 85, age: 27, pounceAbilityInBox: 80 },
          { id: 4, name: "Ancelotti", position: "CM", x: 40, y: 55, role: "Deep Playmaker", detail: "The tactical brain who controlled tempo", overallRating: 86, age: 31, pounceAbilityInBox: 80 },
          { id: 10, name: "Rijkaard", position: "CM", x: 60, y: 55, role: "Box-to-Box", detail: "Physical presence with technical ability", overallRating: 88, age: 28, pounceAbilityInBox: 85 },
          { id: 11, name: "Colombo", position: "LM", x: 75, y: 55, role: "Wide Midfielder", detail: "Provided width and defensive balance", overallRating: 80, age: 26, pounceAbilityInBox: 70 },
          { id: 9, name: "Van Basten", position: "ST", x: 45, y: 30, role: "Clinical Finisher", detail: "The most complete striker - technique, power, intelligence", overallRating: 92, age: 26, pounceAbilityInBox: 95 },
          { id: 7, name: "Gullit", position: "ST", x: 55, y: 30, role: "Complete Forward", detail: "Total footballer who could do everything", overallRating: 91, age: 28, pounceAbilityInBox: 90 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Galli", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick distribution to start attacks", overallRating: 82, age: 32, pounceAbilityInBox: 50 },
          { id: 2, name: "Tassotti", position: "RB", x: 12, y: 65, role: "Overlapping FB", detail: "Bombs forward to create width", overallRating: 84, age: 30, pounceAbilityInBox: 65 },
          { id: 5, name: "Costacurta", position: "CB", x: 40, y: 75, role: "High Line CB", detail: "Maintains incredibly high defensive line", overallRating: 85, age: 24, pounceAbilityInBox: 70 },
          { id: 6, name: "Baresi", position: "CB", x: 60, y: 75, role: "Sweeping Leader", detail: "Commands the offside trap with perfect timing", overallRating: 90, age: 28, pounceAbilityInBox: 75 },
          { id: 3, name: "Maldini", position: "LB", x: 88, y: 65, role: "Attacking FB", detail: "Creates overloads down the left flank", overallRating: 86, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Donadoni", position: "RM", x: 20, y: 45, role: "Advanced Winger", detail: "Stretches play and creates space inside", overallRating: 85, age: 27, pounceAbilityInBox: 80 },
          { id: 4, name: "Ancelotti", position: "CM", x: 35, y: 50, role: "Regista", detail: "Dictates tempo and switches play", overallRating: 86, age: 31, pounceAbilityInBox: 80 },
          { id: 10, name: "Rijkaard", position: "CM", x: 65, y: 50, role: "Dynamic 8", detail: "Covers ground and provides physicality", overallRating: 88, age: 28, pounceAbilityInBox: 85 },
          { id: 11, name: "Colombo", position: "LM", x: 80, y: 45, role: "Supporting Winger", detail: "Supports Maldini's overlapping runs", overallRating: 80, age: 26, pounceAbilityInBox: 70 },
          { id: 9, name: "Van Basten", position: "ST", x: 40, y: 25, role: "Target Man", detail: "Holds up play and creates for Gullit", overallRating: 92, age: 26, pounceAbilityInBox: 95 },
          { id: 7, name: "Gullit", position: "ST", x: 60, y: 25, role: "Roaming Forward", detail: "Drops deep and wide creating confusion", overallRating: 91, age: 28, pounceAbilityInBox: 90 }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 12, y: 65 }, type: 'movement', player: 'Tassotti Overlaps', color: '#FB090B' },
          { from: { x: 85, y: 75 }, to: { x: 88, y: 65 }, type: 'movement', player: 'Maldini Attacks', color: '#FB090B' },
          { from: { x: 55, y: 30 }, to: { x: 65, y: 40 }, type: 'movement', player: 'Gullit Drops', color: '#FFD700' }
        ],
        zones: [
          { x: 0, y: 20, width: 100, height: 15, color: 'rgba(251, 9, 11, 0.3)', label: 'Coordinated High Line - 25m from Goal' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Galli", position: "GK", x: 50, y: 88, role: "High Line GK", detail: "Covers space behind the highest line in football", overallRating: 82, age: 32, pounceAbilityInBox: 50 },
          { id: 2, name: "Tassotti", position: "RB", x: 20, y: 70, role: "Pressing FB", detail: "Immediate pressing to win ball high", overallRating: 84, age: 30, pounceAbilityInBox: 65 },
          { id: 5, name: "Costacurta", position: "CB", x: 40, y: 72, role: "Stepping CB", detail: "Steps out to press with perfect timing", overallRating: 85, age: 24, pounceAbilityInBox: 70 },
          { id: 6, name: "Baresi", position: "CB", x: 60, y: 72, role: "Press Leader", detail: "Commands the press with hand signals", overallRating: 90, age: 28, pounceAbilityInBox: 75 },
          { id: 3, name: "Maldini", position: "LB", x: 80, y: 70, role: "Recovery FB", detail: "Uses pace to recover from attacking positions", overallRating: 86, age: 22, pounceAbilityInBox: 75 },
          { id: 8, name: "Donadoni", position: "RM", x: 30, y: 55, role: "Wide Presser", detail: "Forces play centrally for the trap", overallRating: 85, age: 27, pounceAbilityInBox: 80 },
          { id: 4, name: "Ancelotti", position: "CM", x: 40, y: 60, role: "Central Presser", detail: "Wins ball in central areas", overallRating: 86, age: 31, pounceAbilityInBox: 80 },
          { id: 10, name: "Rijkaard", position: "CM", x: 60, y: 60, role: "Physical Presser", detail: "Uses strength to dominate midfield battles", overallRating: 88, age: 28, pounceAbilityInBox: 85 },
          { id: 11, name: "Colombo", position: "LM", x: 70, y: 55, role: "Tactical Presser", detail: "Intelligent positioning to support press", overallRating: 80, age: 26, pounceAbilityInBox: 70 },
          { id: 9, name: "Van Basten", position: "ST", x: 45, y: 45, role: "Press Trigger", detail: "Cuts passing lanes to trigger the press", overallRating: 92, age: 26, pounceAbilityInBox: 95 },
          { id: 7, name: "Gullit", position: "ST", x: 55, y: 45, role: "Harassing Forward", detail: "Never gives center-backs a moment's peace", overallRating: 91, age: 28, pounceAbilityInBox: 90 }
        ],
        zones: [
          { x: 0, y: 25, width: 100, height: 50, color: 'rgba(255, 0, 0, 0.3)', label: 'Total Press Zone - Famous Offside Trap' }
        ]
      },
      3: {
        corners: [
          {
            name: "Gullit Power Header",
            players: [
              { id: 7, name: "Gullit", position: "ST", x: 85, y: 80, role: "Aerial Threat", detail: "Incredible in the air with power and precision", overallRating: 91, age: 28, pounceAbilityInBox: 90 },
              { id: 9, name: "Van Basten", position: "ST", x: 78, y: 78, role: "Clinical Finisher", detail: "Perfect positioning for any loose balls", overallRating: 92, age: 26, pounceAbilityInBox: 95 },
              { id: 6, name: "Baresi", position: "CB", x: 82, y: 75, role: "Leadership Presence", detail: "Organizes the attack from set pieces", overallRating: 90, age: 28, pounceAbilityInBox: 75 },
              { id: 8, name: "Donadoni", position: "RM", x: 95, y: 85, role: "Corner Specialist", detail: "Precise delivery from wide areas", overallRating: 85, age: 27, pounceAbilityInBox: 80 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 82, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Barcelona 1991/92
  {
    name: "Barcelona 1991/92",
    manager: "Johan Cruyff",
    achievement: "European Cup Winners - The Dream Team",
    formation: "3-4-3 Diamond",
    style: "Total Football, False 9, Positional Play Revolution",
    description: "Cruyff's revolutionary Dream Team that introduced Total Football to Spain. The perfect blend of Dutch philosophy and Spanish technique created football's most beautiful and effective system.",
    primaryColor: "#A50044",
    secondaryColor: "#004D98",
    quote: "In football, the most difficult thing is to make the difficult look simple.",
    managerImage: getManagerImage("Johan Cruyff", "#A50044"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Zubizarreta", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Spanish goalkeeper who was ahead of his time with ball distribution", overallRating: 85, age: 30, pounceAbilityInBox: 55 },
          { id: 2, name: "Ferrer", position: "RCB", x: 25, y: 80, role: "Right CB", detail: "Catalan defender who could step into midfield", overallRating: 80, age: 21, pounceAbilityInBox: 65 },
          { id: 6, name: "Koeman", position: "CB", x: 50, y: 80, role: "Libero", detail: "Dutch master who revolutionized the sweeper role", overallRating: 88, age: 28, pounceAbilityInBox: 75 },
          { id: 12, name: "Nando", position: "LCB", x: 75, y: 80, role: "Left CB", detail: "Spanish defender who provided balance in the back three", overallRating: 79, age: 24, pounceAbilityInBox: 65 },
          { id: 4, name: "Guardiola", position: "CDM", x: 50, y: 65, role: "Pivot", detail: "The student learning from the master - future tactical genius", overallRating: 80, age: 20, pounceAbilityInBox: 75 },
          { id: 11, name: "Bakero", position: "CM", x: 35, y: 55, role: "Right Interior", detail: "Spanish midfielder with incredible work rate and intelligence", overallRating: 84, age: 28, pounceAbilityInBox: 80 },
          { id: 5, name: "Eusebio", position: "CM", x: 65, y: 55, role: "Left Interior", detail: "Versatile Spanish midfielder who covered every position", overallRating: 82, age: 27, pounceAbilityInBox: 75 },
          { id: 10, name: "Laudrup", position: "CAM", x: 50, y: 45, role: "False 9 Playmaker", detail: "Danish genius who dropped deep to orchestrate attacks", overallRating: 89, age: 22, pounceAbilityInBox: 90 },
          { id: 8, name: "Stoichkov", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Bulgarian magician with incredible technique and pace", overallRating: 88, age: 25, pounceAbilityInBox: 90 },
          { id: 9, name: "Salinas", position: "ST", x: 45, y: 25, role: "Mobile Striker", detail: "Spanish forward who created space for others", overallRating: 82, age: 28, pounceAbilityInBox: 85 },
          { id: 7, name: "Juan Carlos", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Direct winger who provided width and pace", overallRating: 78, age: 26, pounceAbilityInBox: 80 }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Zubizarreta", position: "GK", x: 50, y: 88, role: "Playing GK", detail: "Comfortable with feet, started attacks from deep", overallRating: 85, age: 30, pounceAbilityInBox: 55 },
          { id: 2, name: "Ferrer", position: "RCB", x: 25, y: 75, role: "Attacking CB", detail: "Steps into midfield to create overloads", overallRating: 80, age: 21, pounceAbilityInBox: 65 },
          { id: 6, name: "Koeman", position: "CB", x: 50, y: 75, role: "Deep Playmaker", detail: "Sprays passes like a quarterback from defense", overallRating: 88, age: 28, pounceAbilityInBox: 75 },
          { id: 12, name: "Nando", position: "LCB", x: 75, y: 75, role: "Covering CB", detail: "Maintains balance when others step forward", overallRating: 79, age: 24, pounceAbilityInBox: 65 },
          { id: 4, name: "Guardiola", position: "CDM", x: 50, y: 68, role: "Orchestrator", detail: "Controls tempo and dictates play from the base", overallRating: 80, age: 20, pounceAbilityInBox: 75 },
          { id: 11, name: "Bakero", position: "CM", x: 30, y: 50, role: "Box-to-Box", detail: "Covers ground and supports both phases", overallRating: 84, age: 28, pounceAbilityInBox: 80 },
          { id: 5, name: "Eusebio", position: "CM", x: 70, y: 50, role: "Supporting Mid", detail: "Intelligent positioning and movement", overallRating: 82, age: 27, pounceAbilityInBox: 75 },
          { id: 10, name: "Laudrup", position: "F9", x: 55, y: 35, role: "False 9", detail: "Drops deep to create chaos and space", overallRating: 89, age: 22, pounceAbilityInBox: 90 },
          { id: 8, name: "Stoichkov", position: "LW", x: 75, y: 25, role: "Inside Forward", detail: "Cuts inside for devastating shots", overallRating: 88, age: 25, pounceAbilityInBox: 90 },
          { id: 9, name: "Salinas", position: "ST", x: 40, y: 20, role: "Roaming Forward", detail: "Creates space through intelligent movement", overallRating: 82, age: 28, pounceAbilityInBox: 85 },
          { id: 7, name: "Juan Carlos", position: "RW", x: 25, y: 25, role: "Wide Forward", detail: "Stretches defense with pace and crosses", overallRating: 78, age: 26, pounceAbilityInBox: 80 }
        ],
        movements: [
          { from: { x: 50, y: 45 }, to: { x: 55, y: 35 }, type: 'movement', player: 'Laudrup False 9', color: '#A50044' },
          { from: { x: 80, y: 40 }, to: { x: 75, y: 25 }, type: 'movement', player: 'Stoichkov Cuts Inside', color: '#004D98' },
          { from: { x: 25, y: 80 }, to: { x: 30, y: 70 }, type: 'movement', player: 'Ferrer Steps Up', color: '#FFD700' }
        ],
        zones: [
          { x: 20, y: 15, width: 60, height: 35, color: 'rgba(165, 0, 68, 0.3)', label: 'Total Football Zone - Positional Chaos' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Zubizarreta", position: "GK", x: 50, y: 88, role: "Sweeper GK", detail: "Covers space behind high defensive line", overallRating: 85, age: 30, pounceAbilityInBox: 55 },
          { id: 2, name: "Ferrer", position: "RCB", x: 25, y: 72, role: "Pressing CB", detail: "Steps out to press with aggression", overallRating: 80, age: 21, pounceAbilityInBox: 65 },
          { id: 6, name: "Koeman", position: "CB", x: 50, y: 72, role: "Organizing CB", detail: "Commands defense with Dutch intelligence", overallRating: 88, age: 28, pounceAbilityInBox: 75 },
          { id: 12, name: "Nando", position: "LCB", x: 75, y: 72, role: "Aggressive CB", detail: "High line discipline and pressing", overallRating: 79, age: 24, pounceAbilityInBox: 65 },
          { id: 4, name: "Guardiola", position: "CDM", x: 50, y: 65, role: "Press Trigger", detail: "Initiates collective pressing with positioning", overallRating: 80, age: 20, pounceAbilityInBox: 75 },
          { id: 11, name: "Bakero", position: "CM", x: 35, y: 55, role: "Energetic Presser", detail: "Never stops running and pressing", overallRating: 84, age: 28, pounceAbilityInBox: 80 },
          { id: 5, name: "Eusebio", position: "CM", x: 65, y: 55, role: "Intelligent Presser", detail: "Smart pressing to cut passing lanes", overallRating: 82, age: 27, pounceAbilityInBox: 75 },
          { id: 10, name: "Laudrup", position: "CAM", x: 50, y: 45, role: "Pressing Playmaker", detail: "Even genius pressed in Cruyff system", overallRating: 89, age: 22, pounceAbilityInBox: 90 },
          { id: 8, name: "Stoichkov", position: "LW", x: 75, y: 50, role: "Wing Presser", detail: "Bulgarian intensity in defensive phases", overallRating: 88, age: 25, pounceAbilityInBox: 90 },
          { id: 9, name: "Salinas", position: "ST", x: 45, y: 35, role: "Pressing Forward", detail: "Triggers press by closing down center-backs", overallRating: 82, age: 28, pounceAbilityInBox: 85 },
          { id: 7, name: "Juan Carlos", position: "RW", x: 25, y: 50, role: "Defensive Winger", detail: "Total commitment to collective pressing", overallRating: 78, age: 26, pounceAbilityInBox: 80 }
        ],
        zones: [
          { x: 0, y: 25, width: 100, height: 50, color: 'rgba(255, 0, 0, 0.3)', label: 'Cruyff High Press - Revolutionary Collective Defending' }
        ]
      },
      3: {
        corners: [
          {
            name: "Koeman Cannon",
            players: [
              { id: 6, name: "Koeman", position: "CB", x: 85, y: 82, role: "Set Piece Master", detail: "Dutch defender with incredible shooting power", overallRating: 88, age: 28, pounceAbilityInBox: 75 },
              { id: 8, name: "Stoichkov", position: "LW", x: 78, y: 78, role: "Bulgarian Bullet", detail: "Dangerous in air and on ground", overallRating: 88, age: 25, pounceAbilityInBox: 90 },
              { id: 9, name: "Salinas", position: "ST", x: 82, y: 75, role: "Box Predator", detail: "Perfect positioning in crowded areas", overallRating: 82, age: 28, pounceAbilityInBox: 85 },
              { id: 10, name: "Laudrup", position: "CAM", x: 95, y: 85, role: "Danish Precision", detail: "Perfect delivery with either foot", overallRating: 89, age: 22, pounceAbilityInBox: 90 }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

// Arsenal 2003/04
{
  name: "Arsenal 2003/04",
  manager: "Arsène Wenger",
  achievement: "The Invincibles - Unbeaten Premier League Season",
  formation: "4-4-2",
  style: "Pace, Power, Technical Brilliance, Beautiful Football",
  description: "Wenger's Invincibles combined French flair with African power and English determination. 49 games unbeaten, playing football from another planet with Henry leading the most beautiful team in Premier League history.",
  primaryColor: "#EF0107",
  secondaryColor: "#023474",
  quote: "I believe one of the best things about managing people is that we can influence lives in a positive way.",
  managerImage: getManagerImage("Arsene Wenger", "#EF0107"),
  phases: {
    0: {
      players: [
        { id: 1, name: "Lehmann", position: "GK", x: 50, y: 95, role: "Mad Genius GK", detail: "German eccentric who brought unpredictability and shot-stopping excellence", overallRating: 85, age: 34, pounceAbilityInBox: 55 },
        { id: 12, name: "Lauren", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Cameroonian warrior who bombed forward relentlessly", overallRating: 82, age: 26, pounceAbilityInBox: 65 },
        { id: 23, name: "Campbell", position: "CB", x: 40, y: 80, role: "English Rock", detail: "Tottenham legend who chose Arsenal - dominant in air", overallRating: 88, age: 29, pounceAbilityInBox: 75 },
        { id: 5, name: "Touré", position: "CB", x: 60, y: 80, role: "Ivorian Wall", detail: "Colossus who partnered Campbell perfectly", overallRating: 84, age: 20, pounceAbilityInBox: 70 },
        { id: 3, name: "Cole", position: "LB", x: 85, y: 75, role: "Speed Demon LB", detail: "Fastest fullback in the world bombing up and down", overallRating: 86, age: 22, pounceAbilityInBox: 70 },
        { id: 7, name: "Ljungberg", position: "RM", x: 20, y: 55, role: "Swedish Magician", detail: "Red mohawk wizard with incredible technical ability", overallRating: 86, age: 26, pounceAbilityInBox: 85 },
        { id: 4, name: "Vieira", position: "CM", x: 40, y: 55, role: "Captain Fantastic", detail: "French general who dominated every midfield battle", overallRating: 90, age: 27, pounceAbilityInBox: 80 },
        { id: 19, name: "Gilberto", position: "CDM", x: 60, y: 55, role: "Brazilian Shield", detail: "The invisible wall protecting defense", overallRating: 85, age: 27, pounceAbilityInBox: 75 },
        { id: 8, name: "Pires", position: "LM", x: 80, y: 55, role: "French Artist", detail: "Pure silk on the ball, created magic from nothing", overallRating: 88, age: 30, pounceAbilityInBox: 85 },
        { id: 14, name: "Henry", position: "ST", x: 45, y: 25, role: "King of Highbury", detail: "The greatest striker in Premier League history", overallRating: 94, age: 26, pounceAbilityInBox: 95 },
        { id: 10, name: "Bergkamp", position: "ST", x: 55, y: 25, role: "Dutch Master", detail: "Non-flying Dutchman with genius first touch", overallRating: 88, age: 34, pounceAbilityInBox: 90 }
      ]
    },
    1: {
      players: [
        { id: 1, name: "Lehmann", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick throws to start lightning counters", overallRating: 85, age: 34, pounceAbilityInBox: 55 },
        { id: 12, name: "Lauren", position: "RB", x: 8, y: 50, role: "Overlapping RB", detail: "Creates width when Ljungberg cuts inside", overallRating: 82, age: 26, pounceAbilityInBox: 65 },
        { id: 23, name: "Campbell", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Long passes to start attacks from deep", overallRating: 88, age: 29, pounceAbilityInBox: 75 },
        { id: 5, name: "Touré", position: "CB", x: 60, y: 78, role: "Progressive CB", detail: "Steps forward with ball confidently", overallRating: 84, age: 20, pounceAbilityInBox: 70 },
        { id: 3, name: "Cole", position: "LB", x: 92, y: 50, role: "Wing-Back", detail: "Fastest player creating constant overloads", overallRating: 86, age: 22, pounceAbilityInBox: 70 },
        { id: 7, name: "Ljungberg", position: "RM", x: 25, y: 35, role: "Inside Right", detail: "Cuts inside creating central overloads", overallRating: 86, age: 26, pounceAbilityInBox: 85 },
        { id: 4, name: "Vieira", position: "CM", x: 35, y: 60, role: "Box-to-Box General", detail: "French captain covering every blade of grass", overallRating: 90, age: 27, pounceAbilityInBox: 80 },
        { id: 19, name: "Gilberto", position: "CDM", x: 65, y: 60, role: "Deep Anchor", detail: "Brazilian sitting deep, launching attacks", overallRating: 85, age: 27, pounceAbilityInBox: 75 },
        { id: 8, name: "Pires", position: "LM", x: 75, y: 35, role: "Creative Wing", detail: "French artist creating from wide areas", overallRating: 88, age: 30, pounceAbilityInBox: 85 },
        { id: 14, name: "Henry", position: "ST", x: 40, y: 20, role: "Pace Merchant", detail: "In behind constantly with devastating speed", overallRating: 94, age: 26, pounceAbilityInBox: 95 },
        { id: 10, name: "Bergkamp", position: "ST", x: 60, y: 30, role: "Deep-Lying Forward", detail: "Drops deep to orchestrate attacks", overallRating: 88, age: 34, pounceAbilityInBox: 90 }
      ],
      movements: [
        { from: { x: 85, y: 75 }, to: { x: 92, y: 50 }, type: 'movement', player: 'Cole Bombing', color: '#EF0107' },
        { from: { x: 45, y: 25 }, to: { x: 40, y: 20 }, type: 'movement', player: 'Henry Pace Run', color: '#023474' },
        { from: { x: 20, y: 55 }, to: { x: 25, y: 35 }, type: 'movement', player: 'Ljungberg Inside', color: '#FFD700' }
      ],
      zones: [
        { x: 80, y: 35, width: 20, height: 35, color: 'rgba(239, 1, 7, 0.3)', label: 'Left Wing Overload Zone' },
        { x: 30, y: 10, width: 40, height: 25, color: 'rgba(2, 52, 116, 0.3)', label: 'Henry Danger Zone' }
      ]
    },
    2: {
      players: [
        { id: 1, name: "Lehmann", position: "GK", x: 50, y: 88, role: "Sweeper GK", detail: "German madness organizing from back", overallRating: 85, age: 34, pounceAbilityInBox: 55 },
        { id: 12, name: "Lauren", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Cameroonian discipline tracking back", overallRating: 82, age: 26, pounceAbilityInBox: 65 },
        { id: 23, name: "Campbell", position: "CB", x: 40, y: 75, role: "Dominant CB", detail: "English warrior winning every aerial duel", overallRating: 88, age: 29, pounceAbilityInBox: 75 },
        { id: 5, name: "Touré", position: "CB", x: 60, y: 75, role: "Physical CB", detail: "Ivorian strength dominating strikers", overallRating: 84, age: 20, pounceAbilityInBox: 70 },
        { id: 3, name: "Cole", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "Fastest player tracking back instantly", overallRating: 86, age: 22, pounceAbilityInBox: 70 },
        { id: 7, name: "Ljungberg", position: "RM", x: 25, y: 55, role: "Tracking Midfielder", detail: "Swedish work rate never stopping", overallRating: 86, age: 26, pounceAbilityInBox: 85 },
        { id: 4, name: "Vieira", position: "CM", x: 40, y: 60, role: "Midfield Destroyer", detail: "French general dominating battles", overallRating: 90, age: 27, pounceAbilityInBox: 80 },
        { id: 19, name: "Gilberto", position: "CDM", x: 60, y: 60, role: "Defensive Screen", detail: "Brazilian wall protecting defense", overallRating: 85, age: 27, pounceAbilityInBox: 75 },
        { id: 8, name: "Pires", position: "LM", x: 75, y: 55, role: "Defensive Winger", detail: "French artist working back for team", overallRating: 88, age: 30, pounceAbilityInBox: 85 },
        { id: 14, name: "Henry", position: "ST", x: 45, y: 35, role: "Counter Threat", detail: "Always ready to break with pace", overallRating: 94, age: 26, pounceAbilityInBox: 95 },
        { id: 10, name: "Bergkamp", position: "ST", x: 55, y: 35, role: "Link Player", detail: "Dutch master dropping deep to help", overallRating: 88, age: 34, pounceAbilityInBox: 90 }
      ],
      zones: [
        { x: 0, y: 50, width: 100, height: 35, color: 'rgba(2, 52, 116, 0.2)', label: 'Invincibles Defensive Discipline - Unbeaten Season' }
      ]
    },
    3: {
      corners: [
        {
          name: "Campbell Power Header",
          players: [
            { id: 23, name: "Campbell", position: "CB", x: 85, y: 82, role: "Aerial Giant", detail: "English defender unstoppable in the air", overallRating: 88, age: 29, pounceAbilityInBox: 75 },
            { id: 5, name: "Touré", position: "CB", x: 78, y: 78, role: "Physical Presence", detail: "Ivorian power causing chaos", overallRating: 84, age: 20, pounceAbilityInBox: 70 },
            { id: 14, name: "Henry", position: "ST", x: 82, y: 75, role: "Intelligent Runner", detail: "King finding space in crowded areas", overallRating: 94, age: 26, pounceAbilityInBox: 95 },
            { id: 8, name: "Pires", position: "LM", x: 95, y: 85, role: "French Precision", detail: "Perfect left-footed delivery", overallRating: 88, age: 30, pounceAbilityInBox: 85 }
          ],
          opposition: [
            { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
          ]
        }
      ]
    }
  }
}
];