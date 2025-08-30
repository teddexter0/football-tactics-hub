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
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Revolutionary goalkeeper comfortable with feet" },
          { id: 2, name: "Alves", position: "RB", x: 15, y: 75, role: "Attacking FB", detail: "Brazilian wizard who redefined fullback play" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Elegant defender who started attacks from deep" },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 80, role: "Warrior Leader", detail: "Captain fantastic who bled for the shirt" },
          { id: 22, name: "Abidal", position: "LB", x: 85, y: 75, role: "Defensive FB", detail: "Solid French defender providing balance" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Deep Playmaker", detail: "The metronome who made everything tick" },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Maestro", detail: "The conductor of football's greatest orchestra" },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Magician", detail: "Pure artistry and press resistance combined" },
          { id: 7, name: "Villa", position: "LW", x: 80, y: 40, role: "Inside Forward", detail: "Spanish striker who cut inside perfectly" },
          { id: 10, name: "Messi", position: "F9", x: 50, y: 35, role: "False 9", detail: "The GOAT in his most devastating position" },
          { id: 9, name: "Pedro", position: "RW", x: 20, y: 40, role: "Work Rate Winger", detail: "Pressed relentlessly and scored crucial goals" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 88, role: "11th Outfield Player", detail: "More touches than most midfielders" },
          { id: 2, name: "Alves", position: "RB", x: 8, y: 50, role: "Wing-Back", detail: "Creates width while Pedro cuts inside" },
          { id: 3, name: "Piqué", position: "CB", x: 35, y: 75, role: "Playmaker CB", detail: "Sprays passes like a quarterback" },
          { id: 5, name: "Puyol", position: "CB", x: 65, y: 75, role: "Covering Leader", detail: "Covers for Alves with incredible reading" },
          { id: 22, name: "Abidal", position: "LB", x: 88, y: 60, role: "Supporting FB", detail: "Provides balance when Villa drifts inside" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 70, role: "Pivot", detail: "Drops between CBs, creates 3-man defense" },
          { id: 8, name: "Xavi", position: "CM", x: 25, y: 50, role: "Right Interior", detail: "Occupies half-spaces with genius passing" },
          { id: 6, name: "Iniesta", position: "CM", x: 75, y: 50, role: "Left Interior", detail: "Dribbles through impossible spaces" },
          { id: 7, name: "Villa", position: "LW", x: 70, y: 25, role: "False Winger", detail: "Cuts inside creating overloads" },
          { id: 10, name: "Messi", position: "F9", x: 55, y: 40, role: "False 9 God", detail: "Drops deep, creates chaos, pure genius" },
          { id: 9, name: "Pedro", position: "RW", x: 30, y: 25, role: "Inside Forward", detail: "Runs into space Messi creates" }
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
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 88, role: "Sweeping GK", detail: "Covers space behind high line" },
          { id: 2, name: "Alves", position: "RB", x: 20, y: 70, role: "Recovery FB", detail: "Tracks back with Brazilian pace" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 72, role: "Aggressive CB", detail: "Steps out to win ball high" },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 72, role: "Covering Warrior", detail: "Uses pace and intelligence to cover" },
          { id: 22, name: "Abidal", position: "LB", x: 80, y: 70, role: "Disciplined FB", detail: "Maintains defensive shape always" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Press Resistant", detail: "Never loses ball under pressure" },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Pressing Mid", detail: "Intelligent pressing to win ball" },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Pressing Artist", detail: "Even magicians pressed for the team" },
          { id: 7, name: "Villa", position: "LW", x: 75, y: 45, role: "Tracking Forward", detail: "Works back to help defensive effort" },
          { id: 10, name: "Messi", position: "F9", x: 50, y: 40, role: "Pressing False 9", detail: "Led from front with intelligent pressing" },
          { id: 9, name: "Pedro", position: "RW", x: 25, y: 45, role: "Defensive Winger", detail: "Never stopped running for the team" }
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
              { id: 5, name: "Puyol", position: "CB", x: 85, y: 82, role: "Aerial Leader", detail: "Captain who led by example in air" },
              { id: 3, name: "Piqué", position: "CB", x: 78, y: 78, role: "Tall Target", detail: "Uses height and timing perfectly" },
              { id: 10, name: "Messi", position: "F9", x: 82, y: 75, role: "Genius Header", detail: "Even at 5'7 found ways to score" },
              { id: 8, name: "Xavi", position: "CM", x: 95, y: 85, role: "Precision Crosser", detail: "Perfect delivery every single time" }
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
    description: "The ultimate evolution of Pep's philosophy - inverted fullbacks creating midfield overloads, Haaland as the perfect false 9, and positional mastery that dismantled every opponent.",
    primaryColor: "#6CABDD",
    secondaryColor: "#1C2C5B",
    quote: "We don't want the ball, we want the ball in the right place at the right time.",
    managerImage: getManagerImage("Pep Guardiola", "#6CABDD"),
    phases: {
      0: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Revolutionary goalkeeper - essentially the 11th outfield player with incredible distribution range" },
          { id: 2, name: "Walker", position: "RB", x: 15, y: 75, role: "Right-Back", detail: "Rapid recovery pace, traditional width provider in kickoff shape" },
          { id: 5, name: "Stones", position: "CB", x: 38, y: 80, role: "Ball-Playing CB", detail: "The conductor from deep - reads the game like a quarterback" },
          { id: 25, name: "Akanji", position: "CB", x: 62, y: 80, role: "Left-footed CB", detail: "Elegant defender who brings the ball out with confidence" },
          { id: 6, name: "Ake", position: "LB", x: 85, y: 75, role: "Left-Back", detail: "Versatile defender who provides balance when needed" },
          { id: 16, name: "Rodri", position: "CDM", x: 50, y: 65, role: "Lone Pivot", detail: "The metronome - controls tempo, screens defense, virtually press-proof" },
          { id: 17, name: "De Bruyne", position: "CM", x: 38, y: 55, role: "Right 8", detail: "The master of the half-space - creates magic between the lines" },
          { id: 8, name: "Gündogan", position: "CM", x: 62, y: 55, role: "Left 8", detail: "Intelligent movement, arrives late in the box, technical excellence" },
          { id: 26, name: "Mahrez", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Left-footed wizard who cuts inside creating overloads" },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 25, role: "Striker", detail: "Goal machine - combines pace, power with clinical finishing" },
          { id: 10, name: "Grealish", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Retention specialist who draws fouls, creates chaos for defenders" }
        ]
      },
      1: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 90, role: "Sweeper Keeper", detail: "Acts as 11th outfield player - pings 60-yard passes to start attacks" },
          { id: 2, name: "Walker", position: "RB", x: 35, y: 70, role: "Inverted Fullback", detail: "Tucks into midfield creating 3-2-4-1 formation" },
          { id: 5, name: "Stones", position: "CB", x: 45, y: 75, role: "Stepping CB", detail: "Steps into midfield as auxiliary DM, distributes like a regista" },
          { id: 25, name: "Akanji", position: "CB", x: 65, y: 80, role: "Wide CB", detail: "Drifts wide when Ake attacks, comfortable as auxiliary fullback" },
          { id: 6, name: "Ake", position: "LB", x: 85, y: 55, role: "Attacking FB", detail: "Provides width when Grealish cuts inside, quality crosses" },
          { id: 16, name: "Rodri", position: "CDM", x: 55, y: 65, role: "Deep Playmaker", detail: "Drops between CBs in build-up, anchors the system" },
          { id: 17, name: "De Bruyne", position: "CM", x: 25, y: 45, role: "Advanced Playmaker", detail: "Occupies right half-space, creative genius with impossible passes" },
          { id: 8, name: "Gündogan", position: "CM", x: 70, y: 50, role: "Roaming 8", detail: "Finds pockets between lines, ghosting into box with perfect timing" },
          { id: 26, name: "Mahrez", position: "RW", x: 15, y: 30, role: "Inverted Winger", detail: "Cuts inside creating central overloads, left foot is deadly" },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 20, role: "Target Man", detail: "Pins backline, creates space for others even when marked" },
          { id: 10, name: "Grealish", position: "LW", x: 75, y: 25, role: "Wide Playmaker", detail: "Hugs touchline then cuts inside, draws 2-3 players with dribbling" }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 35, y: 70 }, type: 'movement', player: 'Walker Inverts', color: '#6CABDD' },
          { from: { x: 85, y: 75 }, to: { x: 85, y: 55 }, type: 'movement', player: 'Ake Attacks', color: '#6CABDD' },
          { from: { x: 50, y: 25 }, to: { x: 45, y: 35 }, type: 'movement', player: 'Haaland Drops', color: '#FFD700' }
        ],
        zones: [
          { x: 20, y: 35, width: 35, height: 25, color: 'rgba(108, 171, 221, 0.3)', label: 'Right Half-Space Overload' },
          { x: 60, y: 35, width: 35, height: 25, color: 'rgba(108, 171, 221, 0.3)', label: 'Left Half-Space Creation' }
        ]
      },
      2: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Covers space behind highest defensive line in world football" },
          { id: 2, name: "Walker", position: "RB", x: 20, y: 75, role: "Recovery FB", detail: "Uses pace to track back from any position instantly" },
          { id: 5, name: "Stones", position: "CB", x: 40, y: 78, role: "Aggressive CB", detail: "Steps out to press, reads game to intercept early" },
          { id: 25, name: "Akanji", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Covers for Stones' pressing with intelligent positioning" },
          { id: 6, name: "Ake", position: "LB", x: 80, y: 75, role: "Tracking FB", detail: "Tracks runners religiously from attacking positions" },
          { id: 16, name: "Rodri", position: "CDM", x: 50, y: 68, role: "Defensive Screen", detail: "Covers space in front of defense, breaks up counters" },
          { id: 17, name: "De Bruyne", position: "CM", x: 35, y: 60, role: "Pressing Midfielder", detail: "Intelligent pressing forces opponents into difficult areas" },
          { id: 8, name: "Gündogan", position: "CM", x: 65, y: 60, role: "Supporting Presser", detail: "Supports press while maintaining positional discipline" },
          { id: 26, name: "Mahrez", position: "RW", x: 20, y: 50, role: "Wide Presser", detail: "Forces play inside where City can win ball in numbers" },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 40, role: "Pressing Forward", detail: "Triggers press by cutting passing lanes to center-backs" },
          { id: 10, name: "Grealish", position: "LW", x: 80, y: 50, role: "Defensive Winger", detail: "Works back to help press, never stops running for team" }
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
              { id: 5, name: "Stones", position: "CB", x: 85, y: 80, role: "Near Post Target", detail: "Attacks near post with aggression and timing" },
              { id: 9, name: "Haaland", position: "ST", x: 82, y: 78, role: "Primary Threat", detail: "Unstoppable in air, causes chaos in box" },
              { id: 25, name: "Akanji", position: "CB", x: 75, y: 82, role: "Secondary Target", detail: "Arrives late with power header" },
              { id: 17, name: "De Bruyne", position: "CM", x: 95, y: 85, role: "Corner Specialist", detail: "Pinpoint delivery with both feet" }
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
          { id: 1, name: "van der Sar", position: "GK", x: 50, y: 95, role: "Commanding GK", detail: "Dutch legend bringing calmness to United defense" },
          { id: 2, name: "Brown", position: "RB", x: 15, y: 75, role: "Solid RB", detail: "Academy graduate providing defensive stability" },
          { id: 15, name: "Vidić", position: "CB", x: 40, y: 80, role: "Warrior CB", detail: "Serbian warrior who feared nothing" },
          { id: 5, name: "Ferdinand", position: "CB", x: 60, y: 80, role: "Ball-Playing CB", detail: "England's finest center-back with elegance" },
          { id: 3, name: "Evra", position: "LB", x: 85, y: 75, role: "Attacking LB", detail: "French speed demon bombing up and down" },
          { id: 18, name: "Scholes", position: "CM", x: 35, y: 55, role: "Deep Playmaker", detail: "Ginger genius with incredible passing range" },
          { id: 16, name: "Carrick", position: "CDM", x: 65, y: 55, role: "Anchor Man", detail: "England's most underrated midfielder" },
          { id: 7, name: "Ronaldo", position: "RW", x: 20, y: 40, role: "Superstar Winger", detail: "Portuguese phenomenon at his explosive peak" },
          { id: 8, name: "Anderson", position: "LM", x: 80, y: 55, role: "Brazilian Flair", detail: "Samba skills in midfield battles" },
          { id: 10, name: "Rooney", position: "ST", x: 45, y: 25, role: "Complete Forward", detail: "England's golden boy with incredible work rate" },
          { id: 9, name: "Tevez", position: "ST", x: 55, y: 25, role: "Argentine Bulldog", detail: "Never stopped running, fighting, creating" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "van der Sar", position: "GK", x: 50, y: 88, role: "Distribution Master", detail: "Quick throws to wingers starting attacks" },
          { id: 2, name: "Brown", position: "RB", x: 12, y: 65, role: "Overlapping RB", detail: "Supports Ronaldo with crossing ability" },
          { id: 15, name: "Vidić", position: "CB", x: 40, y: 78, role: "Aggressive CB", detail: "Steps out to win ball with authority" },
          { id: 5, name: "Ferdinand", position: "CB", x: 60, y: 78, role: "Playmaker CB", detail: "Sprays passes to start attacks" },
          { id: 3, name: "Evra", position: "LB", x: 92, y: 60, role: "Wing-Back", detail: "Creates width down the left flank" },
          { id: 18, name: "Scholes", position: "CM", x: 35, y: 65, role: "Deep Maestro", detail: "Dictates tempo from deep position" },
          { id: 16, name: "Carrick", position: "CDM", x: 65, y: 65, role: "Protective Mid", detail: "Shields defense, launches attacks" },
          { id: 7, name: "Ronaldo", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside for devastating shots" },
          { id: 8, name: "Anderson", position: "LM", x: 75, y: 50, role: "Wide Playmaker", detail: "Brazilian magic creating from wide" },
          { id: 10, name: "Rooney", position: "ST", x: 40, y: 20, role: "False 9", detail: "Drops deep to create space" },
          { id: 9, name: "Tevez", position: "ST", x: 60, y: 20, role: "Pressing Forward", detail: "Harasses defenders constantly" }
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
          { id: 1, name: "van der Sar", position: "GK", x: 50, y: 88, role: "Veteran Leader", detail: "Organizing defense with Dutch authority" },
          { id: 2, name: "Brown", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Academy product never out of position" },
          { id: 15, name: "Vidić", position: "CB", x: 40, y: 75, role: "Destroyer CB", detail: "Serbian wall winning every duel" },
          { id: 5, name: "Ferdinand", position: "CB", x: 60, y: 75, role: "Covering CB", detail: "Uses pace and reading to cover" },
          { id: 3, name: "Evra", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "French pace tracking back instantly" },
          { id: 18, name: "Scholes", position: "CM", x: 35, y: 60, role: "Pressing Mid", detail: "Ginger genius with tough tackling" },
          { id: 16, name: "Carrick", position: "CDM", x: 65, y: 60, role: "Defensive Screen", detail: "England's shield protecting defense" },
          { id: 7, name: "Ronaldo", position: "RW", x: 25, y: 50, role: "Tracking Winger", detail: "Even the superstar worked back" },
          { id: 8, name: "Anderson", position: "LM", x: 75, y: 50, role: "Defensive Mid", detail: "Brazilian covering every blade of grass" },
          { id: 10, name: "Rooney", position: "ST", x: 45, y: 35, role: "Pressing Forward", detail: "England's bulldog harassing defenders" },
          { id: 9, name: "Tevez", position: "ST", x: 55, y: 35, role: "Work Rate Forward", detail: "Argentine never stopping his pressing" }
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
              { id: 15, name: "Vidić", position: "CB", x: 85, y: 82, role: "Aerial Warrior", detail: "Serbian destroyer unstoppable in air" },
              { id: 5, name: "Ferdinand", position: "CB", x: 78, y: 78, role: "England Captain", detail: "Leadership and aerial ability" },
              { id: 10, name: "Rooney", position: "ST", x: 82, y: 75, role: "All-Round Threat", detail: "Dangerous anywhere in the box" },
              { id: 7, name: "Ronaldo", position: "RW", x: 95, y: 85, role: "Portuguese Precision", detail: "Perfect delivery with either foot" }
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
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "World-class shot-stopper who brought calmness to defense" },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 15, y: 75, role: "Right-Back", detail: "22-year-old quarterback creating more chances than most midfielders" },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 80, role: "Defensive Leader", detail: "Colossus who transformed Liverpool's defense completely" },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 80, role: "Pace & Coverage", detail: "Covers for high line with intelligent positioning" },
          { id: 26, name: "Robertson", position: "LB", x: 85, y: 75, role: "Left-Back", detail: "Scottish warrior with endless energy bombing forward" },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 65, role: "Holding Mid", detail: "Brazilian destroyer who breaks up everything" },
          { id: 14, name: "Henderson", position: "CM", x: 35, y: 55, role: "Captain", detail: "Leads by example, drives team forward with passion" },
          { id: 5, name: "Wijnaldum", position: "CM", x: 65, y: 55, role: "Press Resistant", detail: "Glides through tight spaces with technical excellence" },
          { id: 11, name: "Salah", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Egyptian King with deadly left foot cutting inside" },
          { id: 9, name: "Firmino", position: "ST", x: 50, y: 30, role: "False 9", detail: "Creates space with movement, links everything together" },
          { id: 10, name: "Mané", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Senegalese speedster with direct running and clinical finishing" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick distribution starts counter-attacks instantly" },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 8, y: 45, role: "Wing-Back", detail: "Essentially right winger creating havoc with crosses" },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Pings 50-yard passes to wingers with precision" },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Uses pace to cover spaces when fullbacks attack" },
          { id: 26, name: "Robertson", position: "LB", x: 92, y: 45, role: "Attack FB", detail: "Hugs touchline, relentless overlapping runs" },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 68, role: "Defensive Anchor", detail: "Covers for both fullbacks, launches quick transitions" },
          { id: 14, name: "Henderson", position: "CM", x: 28, y: 55, role: "Box-to-Box", detail: "Covers every blade of grass, switches play perfectly" },
          { id: 5, name: "Wijnaldum", position: "CM", x: 72, y: 55, role: "Advanced 8", detail: "Makes late runs into box, press resistant in tight spaces" },
          { id: 11, name: "Salah", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside from right half-space for left-foot finishes" },
          { id: 9, name: "Firmino", position: "ST", x: 55, y: 35, role: "False 9", detail: "Drops deep creating 'diamond of space' for front three" },
          { id: 10, name: "Mané", position: "LW", x: 75, y: 25, role: "Wide Forward", detail: "Direct running at pace, stretches defense with movement" }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 8, y: 45 }, type: 'movement', player: 'TAA Bombs Forward', color: '#C8102E' },
          { from: { x: 85, y: 75 }, to: { x: 92, y: 45 }, type: 'movement', player: 'Robertson Overlaps', color: '#C8102E' }
        ],
        zones: [
          { x: 0, y: 30, width: 20, height: 40, color: 'rgba(200, 16, 46, 0.3)', label: 'Right Wing Overload' },
          { x: 80, y: 30, width: 20, height: 40, color: 'rgba(200, 16, 46, 0.3)', label: 'Left Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 88, role: "Sweeper", detail: "Covers highest line, quick to clear danger" },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 20, y: 70, role: "Recovery FB", detail: "Incredible pace to track back from advanced positions" },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 75, role: "Aggressive Press", detail: "Steps out to win ball high, dominant in duels" },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 75, role: "Recovery Pace", detail: "Uses pace to cover Van Dijk's aggressive pressing" },
          { id: 26, name: "Robertson", position: "LB", x: 80, y: 70, role: "Work Rate FB", detail: "Incredible stamina to track back instantly" },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 65, role: "Press Trigger", detail: "Wins ball and starts famous 6-second gegenpress" },
          { id: 14, name: "Henderson", position: "CM", x: 35, y: 50, role: "Gegenpress Leader", detail: "Immediate counter-pressing, no time for opponents" },
          { id: 5, name: "Wijnaldum", position: "CM", x: 65, y: 50, role: "Press Support", detail: "Intelligent positioning to support gegenpress" },
          { id: 11, name: "Salah", position: "RW", x: 25, y: 40, role: "Wide Presser", detail: "Forces play inside where Liverpool wins in numbers" },
          { id: 9, name: "Firmino", position: "ST", x: 50, y: 35, role: "False 9 Press", detail: "Triggers press, cuts passing lanes to center-backs" },
          { id: 10, name: "Mané", position: "LW", x: 75, y: 40, role: "Intense Presser", detail: "Never stops running, breaks opponents' will with pressing" }
        ],
        zones: [
          { x: 0, y: 20, width: 100, height: 40, color: 'rgba(255, 0, 0, 0.3)', label: 'Gegenpress Zone - 6 Second Rule' }
        ]
      },
      3: {
        corners: [
          {
            name: "Van Dijk Near Post Flick",
            players: [
              { id: 4, name: "Van Dijk", position: "CB", x: 88, y: 82, role: "Near Post Target", detail: "Flicks on with incredible precision and timing" },
              { id: 9, name: "Firmino", position: "ST", x: 78, y: 78, role: "Second Wave", detail: "Attacks flick-ons with intelligent movement" },
              { id: 10, name: "Mané", position: "LW", x: 82, y: 75, role: "Back Post", detail: "Times arrival perfectly at back post" },
              { id: 26, name: "Robertson", position: "LB", x: 95, y: 85, role: "Corner Taker", detail: "Pinpoint left-footed delivery" }
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
          { id: 1, name: "Courtois", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Belgian giant who commanded his area" },
          { id: 24, name: "Cahill", position: "RCB", x: 25, y: 80, role: "Right CB", detail: "English warrior who adapted to three-man defense" },
          { id: 30, name: "Luiz", position: "CB", x: 50, y: 80, role: "Ball-Playing CB", detail: "Brazilian flair in central defense, long passing expert" },
          { id: 6, name: "Azpilicueta", position: "LCB", x: 75, y: 80, role: "Left CB", detail: "Spanish perfectionist who could play anywhere" },
          { id: 28, name: "Moses", position: "RWB", x: 12, y: 65, role: "Right Wing-Back", detail: "Nigerian speed merchant bombing up and down flank" },
          { id: 3, name: "Alonso", position: "LWB", x: 88, y: 65, role: "Left Wing-Back", detail: "Spanish overlord who redefined the wing-back role" },
          { id: 7, name: "Kanté", position: "CM", x: 40, y: 55, role: "Destroyer", detail: "French octopus who was everywhere at once" },
          { id: 4, name: "Matić", position: "CM", x: 60, y: 55, role: "Deep Playmaker", detail: "Serbian metronome controlling tempo" },
          { id: 22, name: "Willian", position: "RW", x: 25, y: 40, role: "Right Winger", detail: "Brazilian trickster with incredible work rate" },
          { id: 19, name: "Costa", position: "ST", x: 50, y: 25, role: "Target Man", detail: "Spanish-Brazilian warrior who fought for every ball" },
          { id: 10, name: "Hazard", position: "LW", x: 75, y: 40, role: "Inverted Winger", detail: "Belgian magician who tormented Premier League defenders" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Courtois", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Long kicks to wing-backs starting attacks" },
          { id: 24, name: "Cahill", position: "RCB", x: 25, y: 75, role: "Aggressive CB", detail: "Steps out to press and win ball" },
          { id: 30, name: "Luiz", position: "CB", x: 50, y: 75, role: "Playmaker CB", detail: "Pings long balls to wing-backs and forwards" },
          { id: 6, name: "Azpilicueta", position: "LCB", x: 75, y: 75, role: "Covering CB", detail: "Covers for attacking wing-backs" },
          { id: 28, name: "Moses", position: "RWB", x: 8, y: 45, role: "Attacking WB", detail: "Bombs forward creating width and crosses" },
          { id: 3, name: "Alonso", position: "LWB", x: 92, y: 45, role: "Overlapping WB", detail: "Overlaps Hazard with perfect timing" },
          { id: 7, name: "Kanté", position: "CM", x: 40, y: 65, role: "Box-to-Box", detail: "Covers ground, wins ball, starts attacks" },
          { id: 4, name: "Matić", position: "CM", x: 60, y: 65, role: "Deep Anchor", detail: "Sits deep, switches play to wing-backs" },
          { id: 22, name: "Willian", position: "RW", x: 30, y: 25, role: "Inside Right", detail: "Cuts inside creating overloads" },
          { id: 19, name: "Costa", position: "ST", x: 50, y: 20, role: "False 9", detail: "Drops deep to create space for wingers" },
          { id: 10, name: "Hazard", position: "LW", x: 70, y: 25, role: "Free Role", detail: "Drifts inside and wide with complete freedom" }
        ],
        movements: [
          { from: { x: 12, y: 65 }, to: { x: 8, y: 45 }, type: 'movement', player: 'Moses Bombs Forward', color: '#034694' },
          { from: { x: 88, y: 65 }, to: { x: 92, y: 45 }, type: 'movement', player: 'Alonso Overlaps', color: '#034694' },
          { from: { x: 75, y: 40 }, to: { x: 70, y: 25 }, type: 'movement', player: 'Hazard Free Role', color: '#FFFFFF' }
        ],
        zones: [
          { x: 0, y: 35, width: 20, height: 35, color: 'rgba(3, 70, 148, 0.3)', label: 'Right Wing-Back Zone' },
          { x: 80, y: 35, width: 20, height: 35, color: 'rgba(3, 70, 148, 0.3)', label: 'Left Wing-Back Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Courtois", position: "GK", x: 50, y: 88, role: "Sweeper", detail: "Covers space behind high defensive line" },
          { id: 24, name: "Cahill", position: "RCB", x: 25, y: 72, role: "Pressing CB", detail: "Steps out aggressively to win ball" },
          { id: 30, name: "Luiz", position: "CB", x: 50, y: 72, role: "Central Organizer", detail: "Commands defense with Brazilian flair" },
          { id: 6, name: "Azpilicueta", position: "LCB", x: 75, y: 72, role: "Disciplined CB", detail: "Never out of position, perfect timing" },
          { id: 28, name: "Moses", position: "RWB", x: 18, y: 65, role: "Tracking WB", detail: "Works back immediately after losing ball" },
          { id: 3, name: "Alonso", position: "LWB", x: 82, y: 65, role: "Recovery WB", detail: "Tracks back with surprising pace" },
          { id: 7, name: "Kanté", position: "CM", x: 40, y: 60, role: "Ball Winner", detail: "Wins every 50-50 and second ball" },
          { id: 4, name: "Matić", position: "CM", x: 60, y: 60, role: "Protective Mid", detail: "Shields defense with intelligent positioning" },
          { id: 22, name: "Willian", position: "RW", x: 30, y: 50, role: "Defensive Winger", detail: "Tracks back to help Moses defensively" },
          { id: 19, name: "Costa", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Harasses center-backs constantly" },
          { id: 10, name: "Hazard", position: "LW", x: 70, y: 50, role: "Tracking Winger", detail: "Even the star tracked back for Conte" }
        ],
        zones: [
          { x: 0, y: 50, width: 100, height: 35, color: 'rgba(255, 255, 255, 0.2)', label: 'Compact 3-4-3 Defensive Block' }
        ]
      },
      3: {
        corners: [
          {
            name: "Luiz Long Ball Special",
            players: [
              { id: 30, name: "Luiz", position: "CB", x: 85, y: 82, role: "Aerial Threat", detail: "Brazilian center-back deadly in the air" },
              { id: 24, name: "Cahill", position: "RCB", x: 78, y: 78, role: "Physical Presence", detail: "English warrior causing chaos" },
              { id: 19, name: "Costa", position: "ST", x: 82, y: 75, role: "Box Predator", detail: "Lived for moments like these" },
              { id: 22, name: "Willian", position: "RW", x: 95, y: 85, role: "Corner Specialist", detail: "Perfect delivery with either foot" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Chelsea 2020/21 - Tuchel
  {
    name: "Chelsea 2020/21",
    manager: "Thomas Tuchel",
    achievement: "Champions League Winners - Defensive Revolution",
    formation: "3-4-2-1",
    style: "High Press, Defensive Solidity, Counter-Attacking",
    description: "Tuchel's tactical masterclass transformed Chelsea into European champions. A rock-solid 3-4-2-1 system with aggressive pressing and devastating counter-attacks through pace and precision.",
    primaryColor: "#034694",
    secondaryColor: "#FFFFFF",
    quote: "We defend together, we attack together. This is what makes us strong.",
    managerImage: getManagerImage("Thomas Tuchel", "#034694"),
    phases: {
      0: {
        players: [
          { id: 16, name: "Mendy", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Senegalese wall who transformed Chelsea's defense" },
          { id: 28, name: "Azpilicueta", position: "RCB", x: 25, y: 80, role: "Right CB", detail: "Spanish captain leading by example" },
          { id: 6, name: "Silva", position: "CB", x: 50, y: 80, role: "Defensive Leader", detail: "Brazilian legend organizing from the back at 36" },
          { id: 2, name: "Rüdiger", position: "LCB", x: 75, y: 80, role: "Aggressive CB", detail: "German warrior with pace and power" },
          { id: 24, name: "James", position: "RWB", x: 12, y: 65, role: "Right Wing-Back", detail: "England's finest attacking fullback" },
          { id: 3, name: "Chilwell", position: "LWB", x: 88, y: 65, role: "Left Wing-Back", detail: "Leicester legend bombing forward constantly" },
          { id: 7, name: "Kanté", position: "CDM", x: 40, y: 55, role: "Destroyer", detail: "French magician winning everything in midfield" },
          { id: 5, name: "Jorginho", position: "CDM", x: 60, y: 55, role: "Regista", detail: "Italian conductor controlling tempo perfectly" },
          { id: 19, name: "Mount", position: "CAM", x: 45, y: 40, role: "Academy Graduate", detail: "Chelsea's golden boy with work rate and vision" },
          { id: 22, name: "Havertz", position: "CAM", x: 55, y: 40, role: "False 10", detail: "German elegance between the lines" },
          { id: 11, name: "Werner", position: "ST", x: 50, y: 25, role: "Pace Merchant", detail: "German speed creating chaos in behind" }
        ]
      },
      1: {
        players: [
          { id: 16, name: "Mendy", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick throws to wing-backs starting attacks" },
          { id: 28, name: "Azpilicueta", position: "RCB", x: 25, y: 75, role: "Progressive CB", detail: "Steps forward with ball confidently" },
          { id: 6, name: "Silva", position: "CB", x: 50, y: 75, role: "Deep Playmaker", detail: "Sprays passes like a quarterback" },
          { id: 2, name: "Rüdiger", position: "LCB", x: 75, y: 75, role: "Ball-Carrying CB", detail: "Drives forward with German power" },
          { id: 24, name: "James", position: "RWB", x: 8, y: 45, role: "Attacking WB", detail: "Creates width with pace and crossing" },
          { id: 3, name: "Chilwell", position: "LWB", x: 92, y: 45, role: "Overlapping WB", detail: "Bombs forward creating overloads" },
          { id: 7, name: "Kanté", position: "CDM", x: 40, y: 65, role: "Box-to-Box", detail: "Covers every blade of grass" },
          { id: 5, name: "Jorginho", position: "CDM", x: 60, y: 65, role: "Deep Regista", detail: "Sits deep, controls tempo and space" },
          { id: 19, name: "Mount", position: "CAM", x: 35, y: 35, role: "Advanced Playmaker", detail: "Makes runs between lines" },
          { id: 22, name: "Havertz", position: "CAM", x: 65, y: 35, role: "False 10", detail: "Drifts wide creating space centrally" },
          { id: 11, name: "Werner", position: "ST", x: 50, y: 20, role: "Stretching Forward", detail: "Runs in behind stretching defense" }
        ],
        movements: [
          { from: { x: 12, y: 65 }, to: { x: 8, y: 45 }, type: 'movement', player: 'James Bombs Forward', color: '#034694' },
          { from: { x: 88, y: 65 }, to: { x: 92, y: 45 }, type: 'movement', player: 'Chilwell Overlaps', color: '#034694' },
          { from: { x: 55, y: 40 }, to: { x: 65, y: 35 }, type: 'movement', player: 'Havertz Drifts', color: '#FFFFFF' }
        ],
        zones: [
          { x: 0, y: 35, width: 20, height: 35, color: 'rgba(3, 70, 148, 0.3)', label: 'James Creation Zone' },
          { x: 80, y: 35, width: 20, height: 35, color: 'rgba(3, 70, 148, 0.3)', label: 'Chilwell Overload Zone' }
        ]
      },
      2: {
        players: [
          { id: 16, name: "Mendy", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Organizes defense with authority" },
          { id: 28, name: "Azpilicueta", position: "RCB", x: 25, y: 72, role: "Disciplined CB", detail: "Never caught out of position" },
          { id: 6, name: "Silva", position: "CB", x: 50, y: 72, role: "Defensive General", detail: "Reads game perfectly at 36 years old" },
          { id: 2, name: "Rüdiger", position: "LCB", x: 75, y: 72, role: "Aggressive Presser", detail: "Steps out to win ball with authority" },
          { id: 24, name: "James", position: "RWB", x: 18, y: 65, role: "Tracking WB", detail: "Works back with incredible stamina" },
          { id: 3, name: "Chilwell", position: "LWB", x: 82, y: 65, role: "Defensive WB", detail: "Tracks back religiously for the team" },
          { id: 7, name: "Kanté", position: "CDM", x: 40, y: 60, role: "Midfield Destroyer", detail: "Wins every second ball and tackle" },
          { id: 5, name: "Jorginho", position: "CDM", x: 60, y: 60, role: "Protective Regista", detail: "Shields defense with intelligence" },
          { id: 19, name: "Mount", position: "CAM", x: 35, y: 50, role: "Pressing 10", detail: "Academy graduate who never stops running" },
          { id: 22, name: "Havertz", position: "CAM", x: 65, y: 50, role: "Defensive 10", detail: "German work rate for defensive phases" },
          { id: 11, name: "Werner", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Harasses center-backs constantly" }
        ],
        zones: [
          { x: 0, y: 50, width: 100, height: 35, color: 'rgba(255, 255, 255, 0.2)', label: 'Tuchel Defensive Block - Unbreakable' }
        ]
      },
      3: {
        corners: [
          {
            name: "Silva Leadership",
            players: [
              { id: 6, name: "Silva", position: "CB", x: 85, y: 82, role: "Veteran Leader", detail: "Brazilian legend dangerous at set pieces" },
              { id: 2, name: "Rüdiger", position: "LCB", x: 78, y: 78, role: "Aerial Threat", detail: "German power in the air" },
              { id: 22, name: "Havertz", position: "CAM", x: 82, y: 75, role: "Tall Target", detail: "Uses height effectively in box" },
              { id: 19, name: "Mount", position: "CAM", x: 95, y: 85, role: "Set Piece Taker", detail: "Academy product with perfect delivery" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Leicester City 2015/16 - Greatest Underdog Story
  {
    name: "Leicester City 2015/16",
    manager: "Claudio Ranieri",
    achievement: "Premier League Winners - Greatest Underdog Story",
    formation: "4-4-2",
    style: "Counter-Attacking, Defensive Solidity, Leicester Miracle",
    description: "The impossible dream. Ranieri's tactical discipline and perfect counter-attacking football created the greatest underdog story in football history. 5000/1 odds conquered the Premier League.",
    primaryColor: "#003090",
    secondaryColor: "#FDBE11",
    quote: "Dilly ding, dilly dong! Keep dreaming because dreams can come true!",
    managerImage: getManagerImage("Claudio Ranieri", "#003090"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Schmeichel", position: "GK", x: 50, y: 95, role: "Shot Stopper", detail: "Danish son of a legend, crucial saves all season" },
          { id: 17, name: "Simpson", position: "RB", x: 15, y: 75, role: "Defensive RB", detail: "Solid English defender who rarely ventured forward" },
          { id: 6, name: "Morgan", position: "CB", x: 40, y: 80, role: "Defensive Leader", detail: "Jamaica captain organizing Leicester's defense" },
          { id: 5, name: "Huth", position: "CB", x: 60, y: 80, role: "German Wall", detail: "Physical presence who won every aerial duel" },
          { id: 28, name: "Fuchs", position: "LB", x: 85, y: 75, role: "Attacking LB", detail: "Austrian left-back with dangerous delivery" },
          { id: 14, name: "Kanté", position: "CDM", x: 45, y: 65, role: "Destroyer", detail: "French magician who covered the entire pitch" },
          { id: 4, name: "Drinkwater", position: "CM", x: 55, y: 65, role: "Deep Playmaker", detail: "English passer who switched play perfectly" },
          { id: 26, name: "Mahrez", position: "RM", x: 20, y: 55, role: "Right Winger", detail: "Algerian wizard who tormented Premier League" },
          { id: 10, name: "Albrighton", position: "LM", x: 80, y: 55, role: "Work Rate Winger", detail: "English grafter who worked tirelessly" },
          { id: 20, name: "Okazaki", position: "ST", x: 45, y: 30, role: "Link-Up Forward", detail: "Japanese warrior who created space for Vardy" },
          { id: 9, name: "Vardy", position: "ST", x: 55, y: 30, role: "Pace Merchant", detail: "English speed demon who broke Premier League" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Schmeichel", position: "GK", x: 50, y: 88, role: "Quick Distribution", detail: "Long kicks to Vardy starting counters" },
          { id: 17, name: "Simpson", position: "RB", x: 18, y: 70, role: "Supporting RB", detail: "Overlaps Mahrez when needed" },
          { id: 6, name: "Morgan", position: "CB", x: 40, y: 78, role: "Long Ball CB", detail: "Pings long balls to Vardy's runs" },
          { id: 5, name: "Huth", position: "CB", x: 60, y: 78, role: "Physical CB", detail: "Wins headers, starts attacks" },
          { id: 28, name: "Fuchs", position: "LB", x: 88, y: 65, role: "Overlapping LB", detail: "Bombs forward creating width" },
          { id: 14, name: "Kanté", position: "CDM", x: 45, y: 70, role: "Ball Winner", detail: "Wins ball, launches immediate counters" },
          { id: 4, name: "Drinkwater", position: "CM", x: 55, y: 70, role: "Counter Specialist", detail: "Perfect passes to start lightning breaks" },
          { id: 26, name: "Mahrez", position: "RM", x: 25, y: 45, role: "Creative Winger", detail: "Algerian magic creating chances from nothing" },
          { id: 10, name: "Albrighton", position: "LM", x: 75, y: 45, role: "Crossing Specialist", detail: "Perfect crosses for Vardy and Okazaki" },
          { id: 20, name: "Okazaki", position: "ST", x: 40, y: 20, role: "False 9", detail: "Drops deep creating space for Vardy" },
          { id: 9, name: "Vardy", position: "ST", x: 60, y: 15, role: "Counter Machine", detail: "In behind constantly, clinical finishing" }
        ],
        movements: [
          { from: { x: 45, y: 65 }, to: { x: 45, y: 70 }, type: 'movement', player: 'Kanté Wins Ball', color: '#003090' },
          { from: { x: 55, y: 30 }, to: { x: 60, y: 15 }, type: 'movement', player: 'Vardy Counter Run', color: '#FDBE11' },
          { from: { x: 85, y: 75 }, to: { x: 88, y: 65 }, type: 'movement', player: 'Fuchs Overlaps', color: '#003090' }
        ],
        zones: [
          { x: 40, y: 10, width: 40, height: 25, color: 'rgba(0, 48, 144, 0.3)', label: 'Vardy Danger Zone' },
          { x: 15, y: 35, width: 30, height: 25, color: 'rgba(253, 190, 17, 0.3)', label: 'Mahrez Magic Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Schmeichel", position: "GK", x: 50, y: 88, role: "Last Line", detail: "Crucial saves when Leicester needed them" },
          { id: 17, name: "Simpson", position: "RB", x: 20, y: 70, role: "Defensive RB", detail: "Solid as a rock defensively" },
          { id: 6, name: "Morgan", position: "CB", x: 40, y: 75, role: "Organizing CB", detail: "Jamaica captain commanding defense" },
          { id: 5, name: "Huth", position: "CB", x: 60, y: 75, role: "Warrior CB", detail: "Won every header, every battle" },
          { id: 28, name: "Fuchs", position: "LB", x: 80, y: 70, role: "Disciplined LB", detail: "Tracked back religiously" },
          { id: 14, name: "Kanté", position: "CDM", x: 45, y: 65, role: "Midfield Vacuum", detail: "Won everything in midfield" },
          { id: 4, name: "Drinkwater", position: "CM", x: 55, y: 65, role: "Defensive Mid", detail: "Shielded defense perfectly" },
          { id: 26, name: "Mahrez", position: "RM", x: 25, y: 55, role: "Tracking Winger", detail: "Even the magician worked back" },
          { id: 10, name: "Albrighton", position: "LM", x: 75, y: 55, role: "Defensive Winger", detail: "Never stopped running back" },
          { id: 20, name: "Okazaki", position: "ST", x: 45, y: 45, role: "Pressing Forward", detail: "Japanese work rate closing down" },
          { id: 9, name: "Vardy", position: "ST", x: 55, y: 35, role: "Counter Threat", detail: "Always ready to break on counter" }
        ],
        zones: [
          { x: 0, y: 55, width: 100, height: 30, color: 'rgba(253, 190, 17, 0.2)', label: 'Leicester Defensive Block - Miracle Workers' }
        ]
      },
      3: {
        corners: [
          {
            name: "Huth Aerial Dominance",
            players: [
              { id: 5, name: "Huth", position: "CB", x: 85, y: 82, role: "Aerial Giant", detail: "German wall unstoppable in the air" },
              { id: 6, name: "Morgan", position: "CB", x: 78, y: 78, role: "Physical Captain", detail: "Jamaica captain leading by example" },
              { id: 9, name: "Vardy", position: "ST", x: 82, y: 75, role: "Poacher", detail: "Found space in crowded boxes" },
              { id: 28, name: "Fuchs", position: "LB", x: 95, y: 85, role: "Austrian Crosser", detail: "Perfect left-footed delivery" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Barcelona 2014/15 - Luis Enrique
  {
    name: "Barcelona 2014/15",
    manager: "Luis Enrique",
    achievement: "MSN Treble - Champions League, La Liga, Copa del Rey",
    formation: "4-3-3",
    style: "MSN Trinity, Vertical Passing, High Intensity Pressing",
    description: "Luis Enrique's revolutionary Barcelona with the legendary MSN front three. More direct than Pep's tiki-taka, combining possession with devastating vertical attacks and the greatest attacking trio ever.",
    primaryColor: "#A50044",
    secondaryColor: "#004D98",
    quote: "We have three extraterrestrials up front. My job is to give them freedom to create magic.",
    managerImage: getManagerImage("Luis Enrique", "#A50044"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Ter Stegen", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "German precision replacing Valdés perfectly" },
          { id: 2, name: "Alves", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Brazilian overlord still flying at 32" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Catalan elegance starting attacks from deep" },
          { id: 14, name: "Mascherano", position: "CB", x: 60, y: 80, role: "Warrior CB", detail: "Argentine lion playing out of position" },
          { id: 18, name: "Alba", position: "LB", x: 85, y: 75, role: "Speed Demon LB", detail: "Spanish rocket bombing up and down" },
          { id: 5, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Pivot Master", detail: "La Masia genius making everything look simple" },
          { id: 4, name: "Rakitić", position: "CM", x: 35, y: 55, role: "Box-to-Box", detail: "Croatian engine covering every blade of grass" },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Magician", detail: "Pure artistry even in his 30s" },
          { id: 10, name: "Messi", position: "RW", x: 20, y: 40, role: "False Winger", detail: "The GOAT creating magic from the right" },
          { id: 9, name: "Suárez", position: "ST", x: 50, y: 25, role: "Complete Striker", detail: "Uruguayan warrior who could do everything" },
          { id: 11, name: "Neymar", position: "LW", x: 80, y: 40, role: "Brazilian Flair", detail: "Samba magic tormenting La Liga defenders" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Ter Stegen", position: "GK", x: 50, y: 88, role: "Distribution Master", detail: "German precision starting attacks instantly" },
          { id: 2, name: "Alves", position: "RB", x: 8, y: 50, role: "Wing-Back", detail: "Provides width when Messi cuts inside" },
          { id: 3, name: "Piqué", position: "CB", x: 35, y: 75, role: "Playmaker CB", detail: "Pings balls to MSN with precision" },
          { id: 14, name: "Mascherano", position: "CB", x: 65, y: 75, role: "Covering CB", detail: "Argentine warrior covering for Alves" },
          { id: 18, name: "Alba", position: "LB", x: 92, y: 50, role: "Overlapping Demon", detail: "Creates overloads with Neymar constantly" },
          { id: 5, name: "Busquets", position: "CDM", x: 50, y: 70, role: "Deep Regista", detail: "Drops between CBs, dictates tempo" },
          { id: 4, name: "Rakitić", position: "CM", x: 30, y: 55, role: "Right Interior", detail: "Croatian workhorse supporting Messi" },
          { id: 6, name: "Iniesta", position: "CM", x: 70, y: 55, role: "Left Interior", detail: "Connects with Neymar through impossible passes" },
          { id: 10, name: "Messi", position: "RW", x: 25, y: 25, role: "False Winger God", detail: "Cuts inside creating space for Alves" },
          { id: 9, name: "Suárez", position: "ST", x: 50, y: 20, role: "Complete 9", detail: "Holds up, scores, creates - the perfect striker" },
          { id: 11, name: "Neymar", position: "LW", x: 75, y: 25, role: "Brazilian Wizard", detail: "Direct dribbling and pace stretching defense" }
        ],
        movements: [
          { from: { x: 20, y: 40 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Messi Cuts Inside', color: '#A50044' },
          { from: { x: 15, y: 75 }, to: { x: 8, y: 50 }, type: 'movement', player: 'Alves Overlaps', color: '#004D98' },
          { from: { x: 85, y: 75 }, to: { x: 92, y: 50 }, type: 'movement', player: 'Alba Bombs Forward', color: '#A50044' }
        ],
        zones: [
          { x: 15, y: 15, width: 70, height: 30, color: 'rgba(165, 0, 68, 0.3)', label: 'MSN Trinity Zone - Unstoppable' },
          { x: 0, y: 40, width: 25, height: 30, color: 'rgba(0, 77, 152, 0.3)', label: 'Right Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Ter Stegen", position: "GK", x: 50, y: 88, role: "Sweeping GK", detail: "Covers high line with German intelligence" },
          { id: 2, name: "Alves", position: "RB", x: 20, y: 70, role: "Recovery RB", detail: "Brazilian pace tracking back instantly" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 72, role: "Aggressive CB", detail: "Steps out to press with perfect timing" },
          { id: 14, name: "Mascherano", position: "CB", x: 60, y: 72, role: "Warrior CB", detail: "Argentine fighter winning every duel" },
          { id: 18, name: "Alba", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "Lightning speed tracking back" },
          { id: 5, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Press Resistant", detail: "Never loses ball under any pressure" },
          { id: 4, name: "Rakitić", position: "CM", x: 35, y: 55, role: "Pressing Mid", detail: "Croatian work rate in defensive phases" },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Intelligent Presser", detail: "Even artists pressed for Luis Enrique" },
          { id: 10, name: "Messi", position: "RW", x: 25, y: 45, role: "Defensive Messi", detail: "The GOAT tracking back when needed" },
          { id: 9, name: "Suárez", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Uruguayan intensity leading press" },
          { id: 11, name: "Neymar", position: "LW", x: 75, y: 45, role: "Tracking Brazilian", detail: "Samba star working for the team" }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 45, color: 'rgba(255, 0, 0, 0.3)', label: 'High Intensity Press - Luis Enrique Style' }
        ]
      },
      3: {
        corners: [
          {
            name: "Piqué Aerial Mastery",
            players: [
              { id: 3, name: "Piqué", position: "CB", x: 85, y: 82, role: "Aerial Giant", detail: "Catalan defender deadly at set pieces" },
              { id: 14, name: "Mascherano", position: "CB", x: 78, y: 78, role: "Argentine Warrior", detail: "Small but fierce in the air" },
              { id: 9, name: "Suárez", position: "ST", x: 82, y: 75, role: "Box Predator", detail: "Uruguayan finding space anywhere" },
              { id: 10, name: "Messi", position: "RW", x: 95, y: 85, role: "Corner Genius", detail: "Left foot magic from dead balls" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Treble-winning PSG under Luis Enrique
  {
    name: "PSG 2024/25",
    manager: "Luis Enrique",
    achievement: "Historic Treble - Ligue 1, Champions League, Coupe de France",
    formation: "4-3-3 / 4-2-3-1",
    style: "Positional Play, High Press, Creative Freedom",
    description: "Luis Enrique's PSG reached new heights with perfect tactical balance. High-intensity pressing combined with positional play and individual brilliance created the most complete PSG team ever.",
    primaryColor: "#004170",
    secondaryColor: "#ED1C24",
    quote: "We have created a team that plays beautiful football while winning everything.",
    managerImage: getManagerImage("Luis Enrique", "#004170"),
    phases: {
      0: {
        players: [
          { id: 99, name: "Donnarumma", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Italian wall who revolutionized PSG's build-up" },
          { id: 2, name: "Hakimi", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Moroccan rocket providing width and pace" },
          { id: 4, name: "Marquinhos", position: "CB", x: 40, y: 80, role: "Defensive Leader", detail: "Brazilian captain organizing from the back" },
          { id: 15, name: "Danilo", position: "CB", x: 60, y: 80, role: "Ball-Playing CB", detail: "Portuguese elegance in central defense" },
          { id: 25, name: "Mendes", position: "LB", x: 85, y: 75, role: "Overlapping LB", detail: "Portuguese speed demon bombing forward" },
          { id: 33, name: "Zaïre-Emery", position: "CDM", x: 50, y: 65, role: "Deep Playmaker", detail: "French wonderkid controlling the tempo" },
          { id: 8, name: "Ruiz", position: "CM", x: 35, y: 55, role: "Box-to-Box", detail: "Spanish engine covering every blade of grass" },
          { id: 17, name: "Vitinha", position: "CM", x: 65, y: 55, role: "Creative Mid", detail: "Portuguese magic between the lines" },
          { id: 7, name: "Mbappé", position: "RW", x: 20, y: 40, role: "Inside Forward", detail: "French phenomenon with devastating pace" },
          { id: 9, name: "Gonçalo Ramos", position: "ST", x: 50, y: 25, role: "Complete Striker", detail: "Portuguese striker with perfect movement" },
          { id: 29, name: "Barcola", position: "LW", x: 80, y: 40, role: "Wide Forward", detail: "French talent stretching defenses" }
        ]
      },
      1: {
        players: [
          { id: 99, name: "Donnarumma", position: "GK", x: 50, y: 88, role: "Playing GK", detail: "Italian precision starting attacks from deep" },
          { id: 2, name: "Hakimi", position: "RB", x: 8, y: 50, role: "Wing-Back", detail: "Creates width when Mbappé cuts inside" },
          { id: 4, name: "Marquinhos", position: "CB", x: 35, y: 75, role: "Progressive CB", detail: "Steps forward with ball confidently" },
          { id: 15, name: "Danilo", position: "CB", x: 65, y: 75, role: "Playmaker CB", detail: "Portuguese passing range from defense" },
          { id: 25, name: "Mendes", position: "LB", x: 92, y: 50, role: "Attacking LB", detail: "Overlaps Barcola creating overloads" },
          { id: 33, name: "Zaïre-Emery", position: "CDM", x: 50, y: 70, role: "Pivot", detail: "French genius dropping between center-backs" },
          { id: 8, name: "Ruiz", position: "CM", x: 30, y: 55, role: "Interior Right", detail: "Spanish intelligence in half-spaces" },
          { id: 17, name: "Vitinha", position: "CM", x: 70, y: 55, role: "Interior Left", detail: "Portuguese creativity unlocking defenses" },
          { id: 7, name: "Mbappé", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside for devastating left foot" },
          { id: 9, name: "Gonçalo Ramos", position: "ST", x: 50, y: 20, role: "Target Man", detail: "Holds up play and creates space" },
          { id: 29, name: "Barcola", position: "LW", x: 75, y: 25, role: "Direct Winger", detail: "French pace stretching defense wide" }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 8, y: 50 }, type: 'movement', player: 'Hakimi Bombs', color: '#004170' },
          { from: { x: 20, y: 40 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Mbappé Cuts Inside', color: '#ED1C24' },
          { from: { x: 85, y: 75 }, to: { x: 92, y: 50 }, type: 'movement', player: 'Mendes Overlaps', color: '#004170' }
        ],
        zones: [
          { x: 15, y: 15, width: 70, height: 30, color: 'rgba(0, 65, 112, 0.3)', label: 'PSG Attack Zone - Unstoppable' },
          { x: 0, y: 40, width: 25, height: 30, color: 'rgba(237, 28, 36, 0.3)', label: 'Right Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 99, name: "Donnarumma", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Italian authority organizing high line" },
          { id: 2, name: "Hakimi", position: "RB", x: 20, y: 70, role: "Recovery RB", detail: "Moroccan pace tracking back instantly" },
          { id: 4, name: "Marquinhos", position: "CB", x: 40, y: 72, role: "Aggressive CB", detail: "Brazilian warrior stepping out to press" },
          { id: 15, name: "Danilo", position: "CB", x: 60, y: 72, role: "Covering CB", detail: "Portuguese intelligence covering space" },
          { id: 25, name: "Mendes", position: "LB", x: 80, y: 70, role: "Disciplined LB", detail: "Tracks back with Portuguese discipline" },
          { id: 33, name: "Zaïre-Emery", position: "CDM", x: 50, y: 65, role: "Press Resistant", detail: "French composure under any pressure" },
          { id: 8, name: "Ruiz", position: "CM", x: 35, y: 55, role: "Pressing Mid", detail: "Spanish intensity in defensive phases" },
          { id: 17, name: "Vitinha", position: "CM", x: 65, y: 55, role: "Defensive Mid", detail: "Portuguese work rate for the team" },
          { id: 7, name: "Mbappé", position: "RW", x: 25, y: 45, role: "Tracking Star", detail: "Even the superstar pressed for Luis Enrique" },
          { id: 9, name: "Gonçalo Ramos", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Portuguese striker leading from front" },
          { id: 29, name: "Barcola", position: "LW", x: 75, y: 45, role: "Defensive Winger", detail: "French talent working back religiously" }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 45, color: 'rgba(237, 28, 36, 0.3)', label: 'Luis Enrique High Intensity Press' }
        ]
      },
      3: {
        corners: [
          {
            name: "Marquinhos Leadership",
            players: [
              { id: 4, name: "Marquinhos", position: "CB", x: 85, y: 82, role: "Captain Leader", detail: "Brazilian captain dangerous at set pieces" },
              { id: 15, name: "Danilo", position: "CB", x: 78, y: 78, role: "Aerial Threat", detail: "Portuguese defender with perfect timing" },
              { id: 9, name: "Gonçalo Ramos", position: "ST", x: 82, y: 75, role: "Box Predator", detail: "Portuguese striker finding space everywhere" },
              { id: 17, name: "Vitinha", position: "CM", x: 95, y: 85, role: "Set Piece Master", detail: "Portuguese precision from dead balls" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // France 2018 World Cup Winners
  {
    name: "France 2018",
    manager: "Didier Deschamps",
    achievement: "World Cup Winners - Les Bleus Return to Glory",
    formation: "4-2-3-1 / 4-4-2",
    style: "Defensive Solidity, Counter-Attacking, Individual Brilliance",
    description: "Deschamps' pragmatic masterpiece that conquered Russia 2018. Perfect blend of defensive organization and explosive counter-attacks with Mbappé's pace and Griezmann's intelligence.",
    primaryColor: "#0055A4",
    secondaryColor: "#EF4135",
    quote: "We have a strong mentality. When we need to defend, we defend together. When we attack, we have incredible quality.",
    managerImage: getManagerImage("Didier Deschamps", "#0055A4"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Lloris", position: "GK", x: 50, y: 95, role: "Captain GK", detail: "Tottenham legend leading France from the back" },
          { id: 2, name: "Pavard", position: "RB", x: 15, y: 75, role: "Defensive RB", detail: "Stuttgart defender with thunderbolt right foot" },
          { id: 4, name: "Varane", position: "CB", x: 40, y: 80, role: "Elegant CB", detail: "Real Madrid class bringing calm to defense" },
          { id: 5, name: "Umtiti", position: "CB", x: 60, y: 80, role: "Ball-Playing CB", detail: "Barcelona defender comfortable on the ball" },
          { id: 21, name: "Hernández", position: "LB", x: 85, y: 75, role: "Attacking LB", detail: "Bayern Munich speed merchant" },
          { id: 6, name: "Pogba", position: "CM", x: 40, y: 55, role: "Box-to-Box", detail: "Manchester United powerhouse with incredible range" },
          { id: 13, name: "Kanté", position: "CDM", x: 60, y: 55, role: "Destroyer", detail: "Chelsea octopus covering every blade of grass" },
          { id: 14, name: "Matuidi", position: "LM", x: 80, y: 55, role: "Work Rate Mid", detail: "Juventus warrior who never stopped running" },
          { id: 7, name: "Griezmann", position: "CAM", x: 50, y: 40, role: "Second Striker", detail: "Atlético Madrid genius with perfect football brain" },
          { id: 10, name: "Mbappé", position: "RM", x: 20, y: 55, role: "Speed Demon", detail: "PSG phenomenon terrorizing defenses with pace" },
          { id: 9, name: "Giroud", position: "ST", x: 50, y: 25, role: "Target Man", detail: "Arsenal/Chelsea warrior holding up play perfectly" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Lloris", position: "GK", x: 50, y: 88, role: "Distribution Captain", detail: "Quick throws to start counter-attacks" },
          { id: 2, name: "Pavard", position: "RB", x: 18, y: 70, role: "Supporting RB", detail: "Provides width when Mbappé cuts inside" },
          { id: 4, name: "Varane", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Long passes to start attacks" },
          { id: 5, name: "Umtiti", position: "CB", x: 60, y: 78, role: "Progressive CB", detail: "Steps forward with ball confidently" },
          { id: 21, name: "Hernández", position: "LB", x: 88, y: 65, role: "Overlapping LB", detail: "Bombs forward creating overloads" },
          { id: 6, name: "Pogba", position: "CM", x: 35, y: 60, role: "Creative Powerhouse", detail: "Sprays passes with incredible range" },
          { id: 13, name: "Kanté", position: "CDM", x: 65, y: 60, role: "Defensive Anchor", detail: "Wins ball and launches quick counters" },
          { id: 14, name: "Matuidi", position: "LM", x: 75, y: 50, role: "Wide Support", detail: "Supports Hernández with work rate" },
          { id: 7, name: "Griezmann", position: "CAM", x: 50, y: 35, role: "False 10", detail: "Drops deep to create space for others" },
          { id: 10, name: "Mbappé", position: "RM", x: 25, y: 25, role: "Counter Weapon", detail: "Lightning pace on the break" },
          { id: 9, name: "Giroud", position: "ST", x: 50, y: 20, role: "Target Man", detail: "Holds up ball for Mbappé and Griezmann" }
        ],
        movements: [
          { from: { x: 20, y: 55 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Mbappé Counter Run', color: '#0055A4' },
          { from: { x: 85, y: 75 }, to: { x: 88, y: 65 }, type: 'movement', player: 'Hernández Bombs', color: '#EF4135' },
          { from: { x: 50, y: 40 }, to: { x: 50, y: 35 }, type: 'movement', player: 'Griezmann Drops', color: '#0055A4' }
        ],
        zones: [
          { x: 15, y: 15, width: 70, height: 25, color: 'rgba(0, 85, 164, 0.3)', label: 'French Counter-Attack Zone' },
          { x: 75, y: 45, width: 25, height: 30, color: 'rgba(239, 65, 53, 0.3)', label: 'Left Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Lloris", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Organizes defense with authority" },
          { id: 2, name: "Pavard", position: "RB", x: 20, y: 70, role: "Solid RB", detail: "Disciplined defensive work" },
          { id: 4, name: "Varane", position: "CB", x: 40, y: 75, role: "Dominant CB", detail: "Wins every aerial duel" },
          { id: 5, name: "Umtiti", position: "CB", x: 60, y: 75, role: "Composed CB", detail: "Calm under any pressure" },
          { id: 21, name: "Hernández", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "Tracks back with Bayern pace" },
          { id: 6, name: "Pogba", position: "CM", x: 35, y: 60, role: "Defensive Mid", detail: "Uses physicality to dominate midfield" },
          { id: 13, name: "Kanté", position: "CDM", x: 65, y: 60, role: "Ball Winner", detail: "Wins everything in midfield" },
          { id: 14, name: "Matuidi", position: "LM", x: 75, y: 55, role: "Tracking Mid", detail: "Juventus work rate tracking back" },
          { id: 7, name: "Griezmann", position: "CAM", x: 50, y: 45, role: "Defensive 10", detail: "Even the star pressed for France" },
          { id: 10, name: "Mbappé", position: "RM", x: 25, y: 55, role: "Counter Threat", detail: "Always ready to punish on break" },
          { id: 9, name: "Giroud", position: "ST", x: 50, y: 35, role: "Isolated Forward", detail: "Holds position ready for counters" }
        ],
        zones: [
          { x: 0, y: 50, width: 100, height: 35, color: 'rgba(239, 65, 53, 0.2)', label: 'French Defensive Discipline - World Cup Winners' }
        ]
      },
      3: {
        corners: [
          {
            name: "Varane Aerial Mastery",
            players: [
              { id: 4, name: "Varane", position: "CB", x: 85, y: 82, role: "Aerial Leader", detail: "Real Madrid defender deadly in air" },
              { id: 5, name: "Umtiti", position: "CB", x: 78, y: 78, role: "Physical Presence", detail: "Barcelona strength at set pieces" },
              { id: 9, name: "Giroud", position: "ST", x: 82, y: 75, role: "Target Man", detail: "Perfect positioning and timing" },
              { id: 7, name: "Griezmann", position: "CAM", x: 95, y: 85, role: "Set Piece Artist", detail: "Atlético precision from dead balls" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // 2010 Inter - Jose
  {
    name: "Inter Milan 2009/10", 
    manager: "José Mourinho",
    achievement: "Historic Treble - Serie A, Coppa Italia, Champions League",
    formation: "4-2-3-1 / 4-5-1",
    style: "Tactical Flexibility, Defensive Masterclass, Counter-Attacking Genius",
    description: "Mourinho's tactical masterpiece that conquered Europe. The 'small car' that beat Ferrari through perfect game management, tactical discipline, and big-game mentality.",
    primaryColor: "#0068A8",
    secondaryColor: "#000000",
    quote: "If you have a Ferrari and I have a small car, to beat you I have to break your wheel or put sugar in your tank.",
    managerImage: getManagerImage("Jose Mourinho", "#0068A8"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Júlio César", position: "GK", x: 50, y: 95, role: "Shot Stopper", detail: "Brazilian wall who saved Inter in crucial moments" },
          { id: 13, name: "Maicon", position: "RB", x: 15, y: 75, role: "Attacking FB", detail: "Brazilian phenomenon with unstoppable right foot" },
          { id: 6, name: "Lúcio", position: "CB", x: 40, y: 80, role: "Aggressive CB", detail: "Physical presence who stepped out to press" },
          { id: 25, name: "Samuel", position: "CB", x: 60, y: 80, role: "Stopper", detail: "Argentine warrior who won every aerial duel" },
          { id: 4, name: "Zanetti", position: "LB", x: 85, y: 75, role: "Captain Leader", detail: "Il Capitano - leadership personified at 37" },
          { id: 19, name: "Cambiasso", position: "CDM", x: 45, y: 65, role: "Unsung Hero", detail: "The engine - did everything without recognition" },
          { id: 8, name: "Motta", position: "CM", x: 55, y: 65, role: "Tactical Brain", detail: "Italian intelligence in midfield battles" },
          { id: 10, name: "Sneijder", position: "CAM", x: 50, y: 50, role: "Creative Heart", detail: "Dutch genius who orchestrated everything" },
          { id: 22, name: "Milito", position: "ST", x: 50, y: 30, role: "Clinical Pivot", detail: "Argentine prince who scored in every final" },
          { id: 27, name: "Pandev", position: "RW", x: 20, y: 40, role: "Wide Support", detail: "Macedonian worker who provided width" },
          { id: 9, name: "Eto'o", position: "LW", x: 80, y: 40, role: "Sacrificed Star", detail: "African legend who played for the team" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Júlio César", position: "GK", x: 50, y: 88, role: "Distribution", detail: "Quick launches for counter-attacks" },
          { id: 13, name: "Maicon", position: "RB", x: 8, y: 55, role: "Wing-Back", detail: "Overlaps constantly creating width" },
          { id: 6, name: "Lúcio", position: "CB", x: 40, y: 78, role: "Ball Carrier", detail: "Drives forward with the ball" },
          { id: 25, name: "Samuel", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Covers for Maicon's attacking runs" },
          { id: 4, name: "Zanetti", position: "LB", x: 88, y: 60, role: "Veteran Leader", detail: "Provides balance and crosses" },
          { id: 19, name: "Cambiasso", position: "CDM", x: 50, y: 70, role: "Transition Master", detail: "Wins ball and starts attacks instantly" },
          { id: 8, name: "Motta", position: "CM", x: 35, y: 58, role: "Deep Playmaker", detail: "Dictates tempo from deep" },
          { id: 10, name: "Sneijder", position: "CAM", x: 55, y: 40, role: "Creative Genius", detail: "Magic between the lines" },
          { id: 22, name: "Milito", position: "ST", x: 45, y: 25, role: "Target Man", detail: "Holds up play perfectly" },
          { id: 27, name: "Pandev", position: "RW", x: 20, y: 30, role: "Inside Forward", detail: "Cuts inside for goal threat" },
          { id: 9, name: "Eto'o", position: "LW", x: 75, y: 35, role: "Wide Forward", detail: "Stretches defense with pace" }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 8, y: 55 }, type: 'movement', player: 'Maicon Attacks', color: '#0068A8' },
          { from: { x: 50, y: 50 }, to: { x: 55, y: 40 }, type: 'movement', player: 'Sneijder Creates', color: '#FFD700' }
        ],
        zones: [
          { x: 0, y: 40, width: 25, height: 30, color: 'rgba(0, 104, 168, 0.3)', label: 'Maicon Highway' },
          { x: 40, y: 30, width: 30, height: 25, color: 'rgba(255, 215, 0, 0.3)', label: 'Sneijder Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Júlio César", position: "GK", x: 50, y: 88, role: "Last Line", detail: "Organizes the defensive fortress" },
          { id: 13, name: "Maicon", position: "RB", x: 20, y: 70, role: "Defensive RB", detail: "Tracks back with discipline" },
          { id: 6, name: "Lúcio", position: "CB", x: 40, y: 75, role: "Defensive Leader", detail: "Commands the defensive line" },
          { id: 25, name: "Samuel", position: "CB", x: 60, y: 75, role: "Warrior CB", detail: "Wins every physical battle" },
          { id: 4, name: "Zanetti", position: "LB", x: 80, y: 70, role: "Defensive LB", detail: "Disciplined positioning always" },
          { id: 19, name: "Cambiasso", position: "CDM", x: 45, y: 65, role: "Destroyer", detail: "Breaks up every attack" },
          { id: 8, name: "Motta", position: "CDM", x: 55, y: 65, role: "Shield", detail: "Double pivot for extra protection" },
          { id: 10, name: "Sneijder", position: "CM", x: 50, y: 55, role: "Defensive Mid", detail: "Even the star tracks back" },
          { id: 22, name: "Milito", position: "ST", x: 50, y: 40, role: "Lone Forward", detail: "Isolated but ready to counter" },
          { id: 27, name: "Pandev", position: "RM", x: 25, y: 50, role: "Defensive Winger", detail: "Works back religiously" },
          { id: 9, name: "Eto'o", position: "LM", x: 75, y: 50, role: "Tracking Winger", detail: "Defensive work rate incredible" }
        ],
        zones: [
          { x: 0, y: 45, width: 100, height: 40, color: 'rgba(255, 0, 0, 0.3)', label: 'Defensive Fortress - Historic 4-5-0 vs Barcelona' }
        ]
      },
      3: {
        corners: [
          {
            name: "Lúcio Power Header",
            players: [
              { id: 6, name: "Lúcio", position: "CB", x: 85, y: 82, role: "Aerial Dominance", detail: "Brazilian center-back unstoppable in the air" },
              { id: 25, name: "Samuel", position: "CB", x: 78, y: 78, role: "Physical Presence", detail: "Argentine warrior causing chaos" },
              { id: 22, name: "Milito", position: "ST", x: 82, y: 75, role: "Clinical Finisher", detail: "Prince of finals, deadly at set pieces" },
              { id: 10, name: "Sneijder", position: "CAM", x: 95, y: 85, role: "Dead Ball Specialist", detail: "Dutch precision with both feet" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // 05 Jose - Chelsea
  {
    name: "Chelsea 2004/05",
    manager: "José Mourinho",
    achievement: "Premier League Winners - The Special One Arrives",
    formation: "4-3-3 / 4-5-1",
    style: "Defensive Solidity, Counter-Attacking, Big Game Mentality",
    description: "Mourinho's debut season masterpiece that transformed Chelsea into champions. Rock-solid defense conceding only 15 goals all season combined with devastating counter-attacks and tactical genius.",
    primaryColor: "#034694",
    secondaryColor: "#FFFFFF",
    quote: "I am not one from the bottle. I am a special one.",
    managerImage: getManagerImage("Jose Mourinho", "#034694"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Čech", position: "GK", x: 50, y: 95, role: "Wall", detail: "Czech legend who set clean sheet records" },
          { id: 20, name: "Ferreira", position: "RB", x: 15, y: 75, role: "Defensive RB", detail: "Portuguese fullback who rarely ventured forward" },
          { id: 6, name: "Terry", position: "CB", x: 40, y: 80, role: "Defensive Leader", detail: "Chelsea captain bleeding blue every game" },
          { id: 26, name: "Carvalho", position: "CB", x: 60, y: 80, role: "Elegant CB", detail: "Portuguese class alongside Terry" },
          { id: 3, name: "Cole", position: "LB", x: 85, y: 75, role: "Attacking LB", detail: "England's finest left-back bombing forward" },
          { id: 4, name: "Makélélé", position: "CDM", x: 50, y: 65, role: "Destroyer", detail: "French destroyer who redefined the holding role" },
          { id: 8, name: "Lampard", position: "CM", x: 35, y: 55, role: "Box-to-Box", detail: "England's goalscoring midfield machine" },
          { id: 10, name: "Cole", position: "CM", x: 65, y: 55, role: "Creative Mid", detail: "West Ham legend with magical left foot" },
          { id: 11, name: "Duff", position: "LW", x: 80, y: 40, role: "Pacey Winger", detail: "Irish speed merchant tormenting fullbacks" },
          { id: 15, name: "Drogba", position: "ST", x: 50, y: 25, role: "Target Man", detail: "Ivorian monster who could do everything" },
          { id: 16, name: "Robben", position: "RW", x: 20, y: 40, role: "Inside Winger", detail: "Dutch wizard cutting inside on left foot" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Čech", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick throws to start counter-attacks" },
          { id: 20, name: "Ferreira", position: "RB", x: 18, y: 70, role: "Overlapping RB", detail: "Supports Robben when needed" },
          { id: 6, name: "Terry", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Long passes to start attacks" },
          { id: 26, name: "Carvalho", position: "CB", x: 60, y: 78, role: "Composed CB", detail: "Portuguese elegance bringing ball out" },
          { id: 3, name: "Cole", position: "LB", x: 88, y: 65, role: "Wing-Back", detail: "Creates width and overloads" },
          { id: 4, name: "Makélélé", position: "CDM", x: 50, y: 70, role: "Deep Anchor", detail: "Protects defense, launches counters" },
          { id: 8, name: "Lampard", position: "CM", x: 30, y: 50, role: "Advanced Mid", detail: "Makes late runs into the box" },
          { id: 10, name: "Cole", position: "CM", x: 70, y: 50, role: "Creative Genius", detail: "West Ham magic creating chances" },
          { id: 11, name: "Duff", position: "LW", x: 75, y: 25, role: "Direct Winger", detail: "Irish pace stretching defense" },
          { id: 15, name: "Drogba", position: "ST", x: 50, y: 20, role: "Complete Forward", detail: "Holds up play and scores spectacular goals" },
          { id: 16, name: "Robben", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside for devastating left foot" }
        ],
        movements: [
          { from: { x: 85, y: 75 }, to: { x: 88, y: 65 }, type: 'movement', player: 'Cole Bombs Forward', color: '#034694' },
          { from: { x: 20, y: 40 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Robben Cuts Inside', color: '#FFFFFF' },
          { from: { x: 35, y: 55 }, to: { x: 30, y: 50 }, type: 'movement', player: 'Lampard Late Run', color: '#034694' }
        ],
        zones: [
          { x: 15, y: 15, width: 70, height: 30, color: 'rgba(3, 70, 148, 0.3)', label: 'Chelsea Counter-Attack Zone' },
          { x: 80, y: 50, width: 20, height: 30, color: 'rgba(255, 255, 255, 0.2)', label: 'Left Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Čech", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Czech authority organizing defense" },
          { id: 20, name: "Ferreira", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Portuguese discipline never failing" },
          { id: 6, name: "Terry", position: "CB", x: 40, y: 75, role: "Warrior CB", detail: "Chelsea captain winning every duel" },
          { id: 26, name: "Carvalho", position: "CB", x: 60, y: 75, role: "Elegant CB", detail: "Portuguese class under any pressure" },
          { id: 3, name: "Cole", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "England pace tracking back instantly" },
          { id: 4, name: "Makélélé", position: "CDM", x: 50, y: 65, role: "Midfield Destroyer", detail: "French master breaking up everything" },
          { id: 8, name: "Lampard", position: "CM", x: 35, y: 60, role: "Defensive Mid", detail: "England work rate in defensive phases" },
          { id: 10, name: "Cole", position: "CM", x: 65, y: 60, role: "Pressing Mid", detail: "West Ham legend working back" },
          { id: 11, name: "Duff", position: "LW", x: 75, y: 50, role: "Tracking Winger", detail: "Irish commitment tracking back" },
          { id: 15, name: "Drogba", position: "ST", x: 50, y: 35, role: "Isolated Forward", detail: "Ready to hold up and counter" },
          { id: 16, name: "Robben", position: "RW", x: 25, y: 50, role: "Defensive Winger", detail: "Dutch star working for team" }
        ],
        zones: [
          { x: 0, y: 50, width: 100, height: 35, color: 'rgba(255, 255, 255, 0.2)', label: 'Mourinho Defensive Wall - 15 Goals Conceded' }
        ]
      },
      3: {
        corners: [
          {
            name: "Terry Leadership Header",
            players: [
              { id: 6, name: "Terry", position: "CB", x: 85, y: 82, role: "Captain Leader", detail: "Chelsea legend dangerous at set pieces" },
              { id: 26, name: "Carvalho", position: "CB", x: 78, y: 78, role: "Portuguese Precision", detail: "Perfect timing in the air" },
              { id: 15, name: "Drogba", position: "ST", x: 82, y: 75, role: "Ivorian Monster", detail: "Unstoppable power and positioning" },
              { id: 10, name: "Cole", position: "CM", x: 95, y: 85, role: "Left Foot Magician", detail: "West Ham legend's perfect delivery" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // RMA 2012/13
  {
    name: "Real Madrid 2011/12",
    manager: "José Mourinho",
    achievement: "La Liga Winners - Counter-Attacking Perfection",
    formation: "4-2-3-1 / 4-3-3",
    style: "Counter-Attacking, Defensive Discipline, Individual Brilliance",
    description: "Mourinho's masterpiece that dethroned Pep's Barcelona. Perfect counter-attacking football with rock-solid defense and devastating pace on the break through Ronaldo and Benzema.",
    primaryColor: "#FFFFFF",
    secondaryColor: "#FEBE10",
    quote: "We played the perfect game against the best team in the world. This is football at its highest level.",
    managerImage: getManagerImage("Jose Mourinho", "#FFFFFF"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 95, role: "Captain GK", detail: "Spanish legend leading from the back" },
          { id: 4, name: "Ramos", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Center-back playing fullback with aggression" },
          { id: 3, name: "Pepe", position: "CB", x: 40, y: 80, role: "Aggressive CB", detail: "Portuguese warrior who feared nobody" },
          { id: 2, name: "Varane", position: "CB", x: 60, y: 80, role: "Pace CB", detail: "French teenager with incredible maturity" },
          { id: 12, name: "Marcelo", position: "LB", x: 85, y: 75, role: "Brazilian Magician", detail: "Samba magic bombing up and down" },
          { id: 6, name: "Khedira", position: "CDM", x: 40, y: 65, role: "Box-to-Box", detail: "German engine covering every blade of grass" },
          { id: 14, name: "Xabi Alonso", position: "CDM", x: 60, y: 65, role: "Deep Playmaker", detail: "Spanish conductor with incredible range" },
          { id: 22, name: "Di María", position: "CAM", x: 50, y: 50, role: "Creative Genius", detail: "Argentine magic creating from center" },
          { id: 8, name: "Kaká", position: "RM", x: 20, y: 40, role: "Right Midfielder", detail: "Brazilian legend still showing class" },
          { id: 7, name: "Ronaldo", position: "LW", x: 80, y: 40, role: "Superstar Winger", detail: "Portuguese phenomenon at his absolute peak" },
          { id: 9, name: "Benzema", position: "ST", x: 50, y: 25, role: "Complete Forward", detail: "French genius linking play perfectly" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 88, role: "Quick Distribution", detail: "Spanish precision starting counters" },
          { id: 4, name: "Ramos", position: "RB", x: 12, y: 65, role: "Overlapping RB", detail: "Bombs forward creating width" },
          { id: 3, name: "Pepe", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Portuguese aggression with distribution" },
          { id: 2, name: "Varane", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "French pace covering for Marcelo" },
          { id: 12, name: "Marcelo", position: "LB", x: 92, y: 50, role: "Wing-Back", detail: "Brazilian attacking like a winger" },
          { id: 6, name: "Khedira", position: "CDM", x: 40, y: 70, role: "Dynamic Mid", detail: "German box-to-box covering ground" },
          { id: 14, name: "Xabi Alonso", position: "CDM", x: 60, y: 70, role: "Deep Regista", detail: "Spanish passes launching attacks" },
          { id: 22, name: "Di María", position: "CAM", x: 50, y: 45, role: "Creative Hub", detail: "Argentine vision finding space" },
          { id: 8, name: "Kaká", position: "RM", x: 25, y: 30, role: "Supporting Mid", detail: "Brazilian class supporting attacks" },
          { id: 7, name: "Ronaldo", position: "LW", x: 75, y: 25, role: "Inside Forward", detail: "Cuts inside for left foot rockets" },
          { id: 9, name: "Benzema", position: "ST", x: 50, y: 20, role: "False 9", detail: "Drops deep creating space for Ronaldo" }
        ],
        movements: [
          { from: { x: 85, y: 75 }, to: { x: 92, y: 50 }, type: 'movement', player: 'Marcelo Bombs', color: '#FFFFFF' },
          { from: { x: 80, y: 40 }, to: { x: 75, y: 25 }, type: 'movement', player: 'Ronaldo Cuts Inside', color: '#FEBE10' },
          { from: { x: 50, y: 25 }, to: { x: 50, y: 20 }, type: 'movement', player: 'Benzema Drops', color: '#FFFFFF' }
        ],
        zones: [
          { x: 70, y: 15, width: 30, height: 35, color: 'rgba(254, 190, 16, 0.3)', label: 'Ronaldo Danger Zone' },
          { x: 80, y: 40, width: 20, height: 30, color: 'rgba(255, 255, 255, 0.2)', label: 'Left Wing Overload' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 88, role: "Organizing GK", detail: "Spanish captain commanding defense" },
          { id: 4, name: "Ramos", position: "RB", x: 20, y: 70, role: "Defensive RB", detail: "Tracks back with Spanish discipline" },
          { id: 3, name: "Pepe", position: "CB", x: 40, y: 75, role: "Destroyer CB", detail: "Portuguese warrior winning every battle" },
          { id: 2, name: "Varane", position: "CB", x: 60, y: 75, role: "Elegant CB", detail: "French class under pressure" },
          { id: 12, name: "Marcelo", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "Brazilian pace tracking back" },
          { id: 6, name: "Khedira", position: "CDM", x: 40, y: 65, role: "Defensive Mid", detail: "German destroyer in midfield battles" },
          { id: 14, name: "Xabi Alonso", position: "CDM", x: 60, y: 65, role: "Deep Anchor", detail: "Spanish intelligence protecting defense" },
          { id: 22, name: "Di María", position: "CAM", x: 50, y: 55, role: "Defensive CAM", detail: "Argentine working back for team" },
          { id: 8, name: "Kaká", position: "RM", x: 25, y: 50, role: "Tracking Mid", detail: "Brazilian legend working defensively" },
          { id: 7, name: "Ronaldo", position: "LW", x: 75, y: 50, role: "Counter Threat", detail: "Always ready to break on counter" },
          { id: 9, name: "Benzema", position: "ST", x: 50, y: 35, role: "Isolated Forward", detail: "French striker ready to hold up" }
        ],
        zones: [
          { x: 0, y: 50, width: 100, height: 35, color: 'rgba(254, 190, 16, 0.2)', label: 'Mourinho Defensive Block vs Barcelona' }
        ]
      },
      3: {
        corners: [
          {
            name: "Ramos Header Magic",
            players: [
              { id: 4, name: "Ramos", position: "RB", x: 85, y: 82, role: "Aerial Leader", detail: "Spanish defender deadly at set pieces" },
              { id: 3, name: "Pepe", position: "CB", x: 78, y: 78, role: "Physical Threat", detail: "Portuguese warrior causing chaos" },
              { id: 7, name: "Ronaldo", position: "LW", x: 82, y: 75, role: "Aerial Genius", detail: "Best header of ball in history" },
              { id: 14, name: "Xabi Alonso", position: "CDM", x: 95, y: 85, role: "Spanish Precision", detail: "Perfect delivery every time" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

  // Germany 2014
  {
    name: "Germany 2014",
    manager: "Joachim Löw",
    achievement: "World Cup Winners - Die Mannschaft's Systematic Excellence",
    formation: "4-2-3-1 / 4-3-3",
    style: "Systematic Preparation, Tactical Adaptability, Modern Possession",
    description: "15 years of systematic development culminated in World Cup glory. Löw's methodical approach combined traditional German discipline with modern positional play and devastating counter-attacks.",
    primaryColor: "#000000",
    secondaryColor: "#DD0000",
    quote: "One cannot win titles with result-orientated football anymore.",
    managerImage: getManagerImage("Joachim Low", "#000000"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Neuer", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Revolutionary goalkeeper who redefined the position" },
          { id: 16, name: "Lahm", position: "RB", x: 15, y: 75, role: "Versatile Captain", detail: "Could play RB or DM with equal brilliance" },
          { id: 17, name: "Boateng", position: "CB", x: 40, y: 80, role: "Modern CB", detail: "Pace, power and passing ability" },
          { id: 5, name: "Hummels", position: "CB", x: 60, y: 80, role: "Ball-Playing CB", detail: "Elegant defender who reads the game perfectly" },
          { id: 4, name: "Höwedes", position: "LB", x: 85, y: 75, role: "Adaptable Defender", detail: "Center-back playing left-back for the team" },
          { id: 7, name: "Schweinsteiger", position: "CDM", x: 45, y: 65, role: "Deep Playmaker", detail: "The leader who controlled tempo and space" },
          { id: 6, name: "Khedira", position: "CM", x: 55, y: 65, role: "Box-to-Box", detail: "Physical presence with intelligent movement" },
          { id: 8, name: "Özil", position: "CAM", x: 50, y: 50, role: "Creative Hub", detail: "Vision and technique between the lines" },
          { id: 18, name: "Kroos", position: "CM", x: 35, y: 55, role: "Metronome", detail: "Passes like a computer - never misplaced" },
          { id: 13, name: "Müller", position: "RW", x: 20, y: 40, role: "Space Interpreter", detail: "Finds spaces that don't exist for others" },
          { id: 11, name: "Klose", position: "ST", x: 50, y: 25, role: "Clinical Finisher", detail: "World Cup's greatest goalscorer" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Neuer", position: "GK", x: 50, y: 88, role: "11th Player", detail: "Plays as sweeper-keeper, almost a libero" },
          { id: 16, name: "Lahm", position: "RB", x: 12, y: 60, role: "Inverted FB", detail: "Drifts into midfield creating overloads" },
          { id: 17, name: "Boateng", position: "CB", x: 40, y: 78, role: "Progressive CB", detail: "Carries ball forward with confidence" },
          { id: 5, name: "Hummels", position: "CB", x: 60, y: 78, role: "Quarterback", detail: "Long passes to start attacks" },
          { id: 4, name: "Höwedes", position: "LB", x: 88, y: 65, role: "Supporting FB", detail: "Provides width when team needs it" },
          { id: 7, name: "Schweinsteiger", position: "CDM", x: 50, y: 70, role: "Regista", detail: "Orchestrates everything from deep" },
          { id: 18, name: "Kroos", position: "CM", x: 30, y: 55, role: "Deep Playmaker", detail: "Switches play with unmatched precision" },
          { id: 6, name: "Khedira", position: "CM", x: 70, y: 55, role: "Dynamic 8", detail: "Makes late runs into the box" },
          { id: 8, name: "Özil", position: "CAM", x: 55, y: 40, role: "False 10", detail: "Drifts wide creating space centrally" },
          { id: 13, name: "Müller", position: "RW", x: 25, y: 25, role: "Raumdeuter", detail: "Space investigator - always in right place" },
          { id: 11, name: "Klose", position: "ST", x: 45, y: 20, role: "Movement Master", detail: "Creates space through intelligent runs" }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 12, y: 60 }, type: 'movement', player: 'Lahm Inverts', color: '#000000' },
          { from: { x: 50, y: 50 }, to: { x: 55, y: 40 }, type: 'movement', player: 'Özil Drifts', color: '#DD0000' },
          { from: { x: 20, y: 40 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Müller Finds Space', color: '#FFD700' }
        ],
        zones: [
          { x: 25, y: 40, width: 50, height: 30, color: 'rgba(0, 0, 0, 0.3)', label: 'Systematic Possession Play' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Neuer", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Organizes highest defensive line" },
          { id: 16, name: "Lahm", position: "RB", x: 20, y: 70, role: "Disciplined FB", detail: "Tracks back with German precision" },
          { id: 17, name: "Boateng", position: "CB", x: 40, y: 75, role: "Physical CB", detail: "Wins duels with power and pace" },
          { id: 5, name: "Hummels", position: "CB", x: 60, y: 75, role: "Reading CB", detail: "Anticipates danger before it develops" },
          { id: 4, name: "Höwedes", position: "LB", x: 80, y: 70, role: "Solid LB", detail: "Defensive reliability personified" },
          { id: 7, name: "Schweinsteiger", position: "CDM", x: 50, y: 68, role: "Defensive Shield", detail: "Protects defense with intelligent positioning" },
          { id: 18, name: "Kroos", position: "CM", x: 35, y: 60, role: "Pressing Mid", detail: "Intelligent pressing to win possession" },
          { id: 6, name: "Khedira", position: "CM", x: 65, y: 60, role: "Energetic Presser", detail: "High energy pressing from midfield" },
          { id: 8, name: "Özil", position: "CAM", x: 50, y: 50, role: "Defensive CAM", detail: "Even artists worked for the team" },
          { id: 13, name: "Müller", position: "RW", x: 25, y: 45, role: "Wide Presser", detail: "Intelligent pressing triggers" },
          { id: 11, name: "Klose", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Cuts passing lanes with experience" }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 45, color: 'rgba(221, 0, 0, 0.3)', label: 'Systematic Pressing - German Efficiency' }
        ]
      },
      3: {
        corners: [
          {
            name: "German Set Piece Precision",
            players: [
              { id: 5, name: "Hummels", position: "CB", x: 85, y: 82, role: "Aerial Leader", detail: "Dominant in the air at both ends" },
              { id: 17, name: "Boateng", position: "CB", x: 78, y: 78, role: "Power Header", detail: "Athletic ability and timing" },
              { id: 13, name: "Müller", position: "RW", x: 82, y: 75, role: "Space Finder", detail: "Finds gaps others can't see" },
              { id: 18, name: "Kroos", position: "CM", x: 95, y: 85, role: "Precision Crosser", detail: "Perfect delivery every time" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }
            ]
          }
        ]
      }
    }
  },

// Real Madrid 2016-2018
  {
    name: "Real Madrid 2016-2018",
    manager: "Zinedine Zidane",
    achievement: "Three Consecutive Champions Leagues - Unprecedented",
    formation: "4-3-3 / 4-4-2 Diamond",
    style: "Galactico Flexibility, Clinical Finishing, Big Game Mentality",
    description: "Zidane's magic touch created the most successful Champions League team ever. Perfect blend of individual brilliance and collective intelligence with Ronaldo's big-game genius.",
    primaryColor: "#FFFFFF",
    secondaryColor: "#FEBE10",
    quote: "In football, the most important thing is what happens in the decisive moments.",
    managerImage: getManagerImage("Zinedine Zidane", "#FFFFFF"),
    phases: {
      0: {
        players: [
          { id: 1, name: "Navas", position: "GK", x: 50, y: 95, role: "Big Game Keeper", detail: "Costa Rican cat who saved everything" },
          { id: 2, name: "Carvajal", position: "RB", x: 15, y: 75, role: "Attacking FB", detail: "Spanish speed merchant bombing forward" },
          { id: 4, name: "Ramos", position: "CB", x: 40, y: 80, role: "Warrior Leader", detail: "Captain who scored when it mattered most" },
          { id: 5, name: "Varane", position: "CB", x: 60, y: 80, role: "Elegant CB", detail: "French class and pace in defense" },
          { id: 12, name: "Marcelo", position: "LB", x: 85, y: 75, role: "Brazilian Magician", detail: "Left-back who played like a winger" },
          { id: 14, name: "Casemiro", position: "CDM", x: 50, y: 65, role: "Destroyer", detail: "Brazilian warrior who broke up everything" },
          { id: 8, name: "Kroos", position: "CM", x: 35, y: 55, role: "Metronome", detail: "German precision with every pass" },
          { id: 10, name: "Modrić", position: "CM", x: 65, y: 55, role: "Magic Midfielder", detail: "Croatian wizard who never aged" },
          { id: 11, name: "Bale", position: "RW", x: 20, y: 40, role: "Speed Merchant", detail: "Welsh dragon with pace and power" },
          { id: 7, name: "Ronaldo", position: "ST", x: 50, y: 25, role: "Mr. Champions League", detail: "The ultimate big-game player" },
          { id: 22, name: "Isco", position: "LW", x: 80, y: 40, role: "Spanish Silky", detail: "Andalusian artist with magical feet" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Navas", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick throws to start counter-attacks" },
          { id: 2, name: "Carvajal", position: "RB", x: 8, y: 50, role: "Wing-Back", detail: "Creates width when Bale cuts inside" },
          { id: 4, name: "Ramos", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Long passes to start attacks" },
          { id: 5, name: "Varane", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Uses pace to cover for attacking fullbacks" },
          { id: 12, name: "Marcelo", position: "LB", x: 92, y: 45, role: "Fourth Attacker", detail: "Essentially a left winger in attack" },
          { id: 14, name: "Casemiro", position: "CDM", x: 50, y: 70, role: "Defensive Anchor", detail: "Covers for both attacking fullbacks" },
          { id: 8, name: "Kroos", position: "CM", x: 30, y: 55, role: "Deep Playmaker", detail: "Switches play with perfect precision" },
          { id: 10, name: "Modrić", position: "CM", x: 70, y: 55, role: "Box-to-Box Magic", detail: "Covers entire pitch with endless energy" },
          { id: 11, name: "Bale", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside for devastating left foot" },
          { id: 7, name: "Ronaldo", position: "ST", x: 45, y: 20, role: "Goal Machine", detail: "Penalty box predator with killer instinct" },
          { id: 22, name: "Isco", position: "CAM", x: 55, y: 40, role: "False 10", detail: "Drifts to create space and overloads" }
        ],
        movements: [
          { from: { x: 85, y: 75 }, to: { x: 92, y: 45 }, type: 'movement', player: 'Marcelo Bombs', color: '#FFFFFF' },
          { from: { x: 20, y: 40 }, to: { x: 25, y: 25 }, type: 'movement', player: 'Bale Cuts Inside', color: '#FEBE10' },
          { from: { x: 65, y: 55 }, to: { x: 70, y: 55 }, type: 'movement', player: 'Modrić Roams', color: '#FFFFFF' }
        ],
        zones: [
          { x: 0, y: 35, width: 30, height: 30, color: 'rgba(254, 190, 16, 0.3)', label: 'Left Wing Overload' },
          { x: 15, y: 15, width: 70, height: 30, color: 'rgba(255, 255, 255, 0.2)', label: 'Galactico Attack Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Navas", position: "GK", x: 50, y: 88, role: "Shot Stopper", detail: "Crucial saves in big moments" },
          { id: 2, name: "Carvajal", position: "RB", x: 20, y: 70, role: "Tracking RB", detail: "Never stops running back" },
          { id: 4, name: "Ramos", position: "CB", x: 40, y: 75, role: "Aggressive Leader", detail: "Steps out to win ball with authority" },
          { id: 5, name: "Varane", position: "CB", x: 60, y: 75, role: "Pace CB", detail: "Uses speed to cover high line" },
          { id: 12, name: "Marcelo", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "Incredible pace to track back" },
          { id: 14, name: "Casemiro", position: "CDM", x: 50, y: 65, role: "Midfield Destroyer", detail: "Breaks up play with perfect timing" },
          { id: 8, name: "Kroos", position: "CM", x: 35, y: 55, role: "Pressing Mid", detail: "Intelligent pressing without wasting energy" },
          { id: 10, name: "Modrić", position: "CM", x: 65, y: 55, role: "Energetic Presser", detail: "Never stops running for 90 minutes" },
          { id: 11, name: "Bale", position: "RW", x: 25, y: 45, role: "Wide Presser", detail: "Uses pace to press and track back" },
          { id: 7, name: "Ronaldo", position: "ST", x: 50, y: 35, role: "Counter Threat", detail: "Always ready to punish on break" },
          { id: 22, name: "Isco", position: "LW", x: 75, y: 45, role: "Pressing Artist", detail: "Technical player who worked for team" }
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
              { id: 4, name: "Ramos", position: "CB", x: 85, y: 82, role: "Captain Clutch", detail: "Scored crucial headers in finals" },
              { id: 5, name: "Varane", position: "CB", x: 78, y: 78, role: "French Height", detail: "Uses athleticism in the air" },
              { id: 7, name: "Ronaldo", position: "ST", x: 82, y: 75, role: "Aerial Genius", detail: "Best header of ball in football history" },
              { id: 8, name: "Kroos", position: "CM", x: 95, y: 85, role: "German Precision", detail: "Perfect delivery with either foot" }
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
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 95, role: "Saint Iker", detail: "Spanish legend and captain who organized from back" },
          { id: 15, name: "Ramos", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Center-back playing fullback for Spain" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Barcelona elegance in Spanish defense" },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 80, role: "Captain Warrior", detail: "Heart and soul of Spanish defense" },
          { id: 11, name: "Capdevila", position: "LB", x: 85, y: 75, role: "Overlapping FB", detail: "Provided width in possession system" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Pivot Master", detail: "Made the impossible look simple" },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Pass Master", detail: "The architect of Spanish dominance" },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "La Roja Magic", detail: "Scored World Cup final winner" },
          { id: 21, name: "Silva", position: "RW", x: 20, y: 40, role: "False Winger", detail: "Drifted inside creating overloads" },
          { id: 7, name: "Villa", position: "ST", x: 50, y: 25, role: "False 9", detail: "Top scorer without being a traditional striker" },
          { id: 18, name: "Pedro", position: "LW", x: 80, y: 40, role: "Work Rate Winger", detail: "Barcelona intensity for Spain" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Comfortable with feet, started attacks" },
          { id: 15, name: "Ramos", position: "RB", x: 12, y: 60, role: "Inverted FB", detail: "Tucked inside to create midfield overloads" },
          { id: 3, name: "Piqué", position: "CB", x: 35, y: 75, role: "Progressive CB", detail: "Stepped forward with ball confidently" },
          { id: 5, name: "Puyol", position: "CB", x: 65, y: 75, role: "Covering Captain", detail: "Covered for Ramos with intelligent positioning" },
          { id: 11, name: "Capdevila", position: "LB", x: 88, y: 55, role: "High FB", detail: "Provided width when Pedro cut inside" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 70, role: "Deep Regista", detail: "Dropped between CBs to create 3-man build-up" },
          { id: 8, name: "Xavi", position: "CM", x: 25, y: 50, role: "Right Interior", detail: "Occupied half-spaces with genius" },
          { id: 6, name: "Iniesta", position: "CM", x: 75, y: 50, role: "Left Interior", detail: "Glided through tightest spaces" },
          { id: 21, name: "Silva", position: "RW", x: 30, y: 30, role: "False Winger", detail: "Created central overloads" },
          { id: 7, name: "Villa", position: "F9", x: 55, y: 40, role: "False 9 Master", detail: "Dropped deep to create space" },
          { id: 18, name: "Pedro", position: "LW", x: 70, y: 30, role: "Inside Left", detail: "Ran into spaces Villa created" }
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
          { id: 1, name: "Casillas", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Organized defense with authority" },
          { id: 15, name: "Ramos", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Maintained defensive shape" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 75, role: "Pressing CB", detail: "Stepped out to win ball high" },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 75, role: "Warrior CB", detail: "Led defensive effort with passion" },
          { id: 11, name: "Capdevila", position: "LB", x: 80, y: 70, role: "Tracking LB", detail: "Worked back with Spanish discipline" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Press Resistant", detail: "Never lost ball under pressure" },
          { id: 8, name: "Xavi", position: "CM", x: 35, y: 55, role: "Intelligent Presser", detail: "Pressed with tactical intelligence" },
          { id: 6, name: "Iniesta", position: "CM", x: 65, y: 55, role: "Pressing Artist", detail: "Even artists pressed for La Roja" },
          { id: 21, name: "Silva", position: "RW", x: 25, y: 45, role: "Tracking Winger", detail: "Worked back without compromise" },
          { id: 7, name: "Villa", position: "ST", x: 50, y: 35, role: "Pressing Forward", detail: "Led press from the front" },
          { id: 18, name: "Pedro", position: "LW", x: 75, y: 45, role: "Defensive Winger", detail: "Barcelona work rate for Spain" }
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
              { id: 5, name: "Puyol", position: "CB", x: 85, y: 82, role: "Captain Leader", detail: "Led by example in crucial moments" },
              { id: 15, name: "Ramos", position: "RB", x: 78, y: 78, role: "Aerial Threat", detail: "Dangerous at both ends" },
              { id: 3, name: "Piqué", position: "CB", x: 82, y: 75, role: "Tall Target", detail: "Used height effectively" },
              { id: 8, name: "Xavi", position: "CM", x: 95, y: 85, role: "Precision Crosser", detail: "Perfect delivery as always" }
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
          { id: 1, name: "Dida", position: "GK", x: 50, y: 95, role: "Brazilian Wall", detail: "Samba goalkeeper with incredible reflexes" },
          { id: 44, name: "Oddo", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Italian fullback providing width" },
          { id: 13, name: "Nesta", position: "CB", x: 40, y: 80, role: "Elegant Leader", detail: "Italian legend reading game perfectly" },
          { id: 3, name: "Maldini", position: "CB", x: 60, y: 80, role: "Captain Legend", detail: "Milan icon playing center-back at 38" },
          { id: 18, name: "Jankulovski", position: "LB", x: 85, y: 75, role: "Balanced LB", detail: "Macedonian providing defensive stability" },
          { id: 23, name: "Ambrosini", position: "CDM", x: 45, y: 65, role: "Destroyer", detail: "Italian warrior winning midfield battles" },
          { id: 8, name: "Gattuso", position: "CDM", x: 55, y: 65, role: "Pitbull", detail: "Calabrian fighter never giving up" },
          { id: 21, name: "Pirlo", position: "CM", x: 50, y: 55, role: "Regista Maestro", detail: "Italian genius with impossible passes" },
          { id: 22, name: "Kaká", position: "CAM", x: 45, y: 40, role: "Ballon d'Or Winner", detail: "Brazilian magician at his absolute peak" },
          { id: 10, name: "Seedorf", position: "CAM", x: 55, y: 40, role: "Dutch Master", detail: "Surinamese-Dutch with incredible technique" },
          { id: 7, name: "Inzaghi", position: "ST", x: 50, y: 25, role: "Super Pippo", detail: "Italian fox who lived offside" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Dida", position: "GK", x: 50, y: 88, role: "Distribution Master", detail: "Brazilian precision starting attacks" },
          { id: 44, name: "Oddo", position: "RB", x: 12, y: 65, role: "Overlapping RB", detail: "Italian providing width and crosses" },
          { id: 13, name: "Nesta", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Italian class bringing ball forward" },
          { id: 3, name: "Maldini", position: "CB", x: 60, y: 78, role: "Veteran Leader", detail: "Milan legend organizing from defense" },
          { id: 18, name: "Jankulovski", position: "LB", x: 88, y: 65, role: "Supporting LB", detail: "Provides balance when needed" },
          { id: 23, name: "Ambrosini", position: "CDM", x: 45, y: 70, role: "Dynamic Mid", detail: "Italian covering ground efficiently" },
          { id: 8, name: "Gattuso", position: "CDM", x: 55, y: 70, role: "Ball Winner", detail: "Wins everything, launches attacks" },
          { id: 21, name: "Pirlo", position: "CM", x: 50, y: 60, role: "Deep Playmaker", detail: "Italian conductor orchestrating attacks" },
          { id: 22, name: "Kaká", position: "CAM", x: 40, y: 30, role: "Creative Genius", detail: "Brazilian magic creating everything" },
          { id: 10, name: "Seedorf", position: "CAM", x: 60, y: 30, role: "Dutch Elegance", detail: "Technique and vision combined" },
          { id: 7, name: "Inzaghi", position: "ST", x: 50, y: 20, role: "Poacher Supreme", detail: "Italian fox finding space everywhere" }
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
          { id: 1, name: "Dida", position: "GK", x: 50, y: 88, role: "Commanding GK", detail: "Brazilian authority in goal" },
          { id: 44, name: "Oddo", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Italian defensive discipline" },
          { id: 13, name: "Nesta", position: "CB", x: 40, y: 75, role: "Defensive Maestro", detail: "Italian legend reading everything" },
          { id: 3, name: "Maldini", position: "CB", x: 60, y: 75, role: "Captain Leader", detail: "Milan icon leading by example at 38" },
          { id: 18, name: "Jankulovski", position: "LB", x: 80, y: 70, role: "Solid LB", detail: "Macedonian defensive reliability" },
          { id: 23, name: "Ambrosini", position: "CDM", x: 45, y: 65, role: "Defensive Mid", detail: "Italian warrior protecting defense" },
          { id: 8, name: "Gattuso", position: "CDM", x: 55, y: 65, role: "Midfield Destroyer", detail: "Calabrian pitbull winning everything" },
          { id: 21, name: "Pirlo", position: "CM", x: 50, y: 60, role: "Deep Anchor", detail: "Italian genius even defended with class" },
          { id: 22, name: "Kaká", position: "CAM", x: 45, y: 50, role: "Defensive CAM", detail: "Brazilian star tracking back" },
          { id: 10, name: "Seedorf", position: "CAM", x: 55, y: 50, role: "Work Rate CAM", detail: "Dutch experience working for team" },
          { id: 7, name: "Inzaghi", position: "ST", x: 50, y: 35, role: "Counter Threat", detail: "Italian fox ready for counter" }
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
              { id: 3, name: "Maldini", position: "CB", x: 85, y: 82, role: "Captain Legend", detail: "Milan icon dangerous at set pieces even at 38" },
              { id: 13, name: "Nesta", position: "CB", x: 78, y: 78, role: "Elegant Threat", detail: "Italian class with perfect timing" },
              { id: 7, name: "Inzaghi", position: "ST", x: 82, y: 75, role: "Box Predator", detail: "Italian fox finding space in chaos" },
              { id: 21, name: "Pirlo", position: "CM", x: 95, y: 85, role: "Set Piece Master", detail: "Italian genius with impossible precision" }
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
          { id: 1, name: "Galli", position: "GK", x: 50, y: 95, role: "Traditional GK", detail: "Solid shot-stopper behind the revolutionary high line" },
          { id: 2, name: "Tassotti", position: "RB", x: 15, y: 75, role: "Attacking FB", detail: "Disciplined defender who provided width in attack" },
          { id: 5, name: "Costacurta", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Elegant defender comfortable on the ball" },
          { id: 6, name: "Baresi", position: "CB", x: 60, y: 80, role: "Libero", detail: "The conductor - reading the game and orchestrating the offside trap" },
          { id: 3, name: "Maldini", position: "LB", x: 85, y: 75, role: "Attacking FB", detail: "Revolutionary fullback who attacked relentlessly" },
          { id: 8, name: "Donadoni", position: "RM", x: 25, y: 55, role: "Wide Midfielder", detail: "Intelligent wide player providing balance" },
          { id: 4, name: "Ancelotti", position: "CM", x: 40, y: 55, role: "Deep Playmaker", detail: "The tactical brain who controlled tempo" },
          { id: 10, name: "Rijkaard", position: "CM", x: 60, y: 55, role: "Box-to-Box", detail: "Physical presence with technical ability" },
          { id: 11, name: "Colombo", position: "LM", x: 75, y: 55, role: "Wide Midfielder", detail: "Provided width and defensive balance" },
          { id: 9, name: "Van Basten", position: "ST", x: 45, y: 30, role: "Clinical Finisher", detail: "The most complete striker - technique, power, intelligence" },
          { id: 7, name: "Gullit", position: "ST", x: 55, y: 30, role: "Complete Forward", detail: "Total footballer who could do everything" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Galli", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick distribution to start attacks" },
          { id: 2, name: "Tassotti", position: "RB", x: 12, y: 65, role: "Overlapping FB", detail: "Bombs forward to create width" },
          { id: 5, name: "Costacurta", position: "CB", x: 40, y: 75, role: "High Line CB", detail: "Maintains incredibly high defensive line" },
          { id: 6, name: "Baresi", position: "CB", x: 60, y: 75, role: "Sweeping Leader", detail: "Commands the offside trap with perfect timing" },
          { id: 3, name: "Maldini", position: "LB", x: 88, y: 65, role: "Attacking FB", detail: "Creates overloads down the left flank" },
          { id: 8, name: "Donadoni", position: "RM", x: 20, y: 45, role: "Advanced Winger", detail: "Stretches play and creates space inside" },
          { id: 4, name: "Ancelotti", position: "CM", x: 35, y: 50, role: "Regista", detail: "Dictates tempo and switches play" },
          { id: 10, name: "Rijkaard", position: "CM", x: 65, y: 50, role: "Dynamic 8", detail: "Covers ground and provides physicality" },
          { id: 11, name: "Colombo", position: "LM", x: 80, y: 45, role: "Supporting Winger", detail: "Supports Maldini's overlapping runs" },
          { id: 9, name: "Van Basten", position: "ST", x: 40, y: 25, role: "Target Man", detail: "Holds up play and creates for Gullit" },
          { id: 7, name: "Gullit", position: "ST", x: 60, y: 25, role: "Roaming Forward", detail: "Drops deep and wide creating confusion" }
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
          { id: 1, name: "Galli", position: "GK", x: 50, y: 88, role: "High Line GK", detail: "Covers space behind the highest line in football" },
          { id: 2, name: "Tassotti", position: "RB", x: 20, y: 70, role: "Pressing FB", detail: "Immediate pressing to win ball high" },
          { id: 5, name: "Costacurta", position: "CB", x: 40, y: 72, role: "Stepping CB", detail: "Steps out to press with perfect timing" },
          { id: 6, name: "Baresi", position: "CB", x: 60, y: 72, role: "Press Leader", detail: "Commands the press with hand signals" },
          { id: 3, name: "Maldini", position: "LB", x: 80, y: 70, role: "Recovery FB", detail: "Uses pace to recover from attacking positions" },
          { id: 8, name: "Donadoni", position: "RM", x: 30, y: 55, role: "Wide Presser", detail: "Forces play centrally for the trap" },
          { id: 4, name: "Ancelotti", position: "CM", x: 40, y: 60, role: "Central Presser", detail: "Wins ball in central areas" },
          { id: 10, name: "Rijkaard", position: "CM", x: 60, y: 60, role: "Physical Presser", detail: "Uses strength to dominate midfield battles" },
          { id: 11, name: "Colombo", position: "LM", x: 70, y: 55, role: "Tactical Presser", detail: "Intelligent positioning to support press" },
          { id: 9, name: "Van Basten", position: "ST", x: 45, y: 45, role: "Press Trigger", detail: "Cuts passing lanes to trigger the press" },
          { id: 7, name: "Gullit", position: "ST", x: 55, y: 45, role: "Harassing Forward", detail: "Never gives center-backs a moment's peace" }
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
              { id: 7, name: "Gullit", position: "ST", x: 85, y: 80, role: "Aerial Threat", detail: "Incredible in the air with power and precision" },
              { id: 9, name: "Van Basten", position: "ST", x: 78, y: 78, role: "Clinical Finisher", detail: "Perfect positioning for any loose balls" },
              { id: 6, name: "Baresi", position: "CB", x: 82, y: 75, role: "Leadership Presence", detail: "Organizes the attack from set pieces" },
              { id: 8, name: "Donadoni", position: "RM", x: 95, y: 85, role: "Corner Specialist", detail: "Precise delivery from wide areas" }
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
        { id: 1, name: "Zubizarreta", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Spanish goalkeeper who was ahead of his time with ball distribution" },
        { id: 2, name: "Ferrer", position: "RCB", x: 25, y: 80, role: "Right CB", detail: "Catalan defender who could step into midfield" },
        { id: 6, name: "Koeman", position: "CB", x: 50, y: 80, role: "Libero", detail: "Dutch master who revolutionized the sweeper role" },
        { id: 12, name: "Nando", position: "LCB", x: 75, y: 80, role: "Left CB", detail: "Spanish defender who provided balance in the back three" },
        { id: 4, name: "Guardiola", position: "CDM", x: 50, y: 65, role: "Pivot", detail: "The student learning from the master - future tactical genius" },
        { id: 11, name: "Bakero", position: "CM", x: 35, y: 55, role: "Right Interior", detail: "Spanish midfielder with incredible work rate and intelligence" },
        { id: 5, name: "Eusebio", position: "CM", x: 65, y: 55, role: "Left Interior", detail: "Versatile Spanish midfielder who covered every position" },
        { id: 10, name: "Laudrup", position: "CAM", x: 50, y: 45, role: "False 9 Playmaker", detail: "Danish genius who dropped deep to orchestrate attacks" },
        { id: 8, name: "Stoichkov", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Bulgarian magician with incredible technique and pace" },
        { id: 9, name: "Salinas", position: "ST", x: 45, y: 25, role: "Mobile Striker", detail: "Spanish forward who created space for others" },
        { id: 7, name: "Juan Carlos", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Direct winger who provided width and pace" }
      ]
    },
    1: {
      players: [
        { id: 1, name: "Zubizarreta", position: "GK", x: 50, y: 88, role: "Playing GK", detail: "Comfortable with feet, started attacks from deep" },
        { id: 2, name: "Ferrer", position: "RCB", x: 25, y: 75, role: "Attacking CB", detail: "Steps into midfield to create overloads" },
        { id: 6, name: "Koeman", position: "CB", x: 50, y: 75, role: "Deep Playmaker", detail: "Sprays passes like a quarterback from defense" },
        { id: 12, name: "Nando", position: "LCB", x: 75, y: 75, role: "Covering CB", detail: "Maintains balance when others step forward" },
        { id: 4, name: "Guardiola", position: "CDM", x: 50, y: 68, role: "Orchestrator", detail: "Controls tempo and dictates play from the base" },
        { id: 11, name: "Bakero", position: "CM", x: 30, y: 50, role: "Box-to-Box", detail: "Covers ground and supports both phases" },
        { id: 5, name: "Eusebio", position: "CM", x: 70, y: 50, role: "Supporting Mid", detail: "Intelligent positioning and movement" },
        { id: 10, name: "Laudrup", position: "F9", x: 55, y: 35, role: "False 9", detail: "Drops deep to create chaos and space" },
        { id: 8, name: "Stoichkov", position: "LW", x: 75, y: 25, role: "Inside Forward", detail: "Cuts inside for devastating shots" },
        { id: 9, name: "Salinas", position: "ST", x: 40, y: 20, role: "Roaming Forward", detail: "Creates space through intelligent movement" },
        { id: 7, name: "Juan Carlos", position: "RW", x: 25, y: 25, role: "Wide Forward", detail: "Stretches defense with pace and crosses" }
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
        { id: 1, name: "Zubizarreta", position: "GK", x: 50, y: 88, role: "Sweeper GK", detail: "Covers space behind high defensive line" },
        { id: 2, name: "Ferrer", position: "RCB", x: 25, y: 72, role: "Pressing CB", detail: "Steps out to press with aggression" },
        { id: 6, name: "Koeman", position: "CB", x: 50, y: 72, role: "Organizing CB", detail: "Commands defense with Dutch intelligence" },
        { id: 12, name: "Nando", position: "LCB", x: 75, y: 72, role: "Aggressive CB", detail: "High line discipline and pressing" },
        { id: 4, name: "Guardiola", position: "CDM", x: 50, y: 65, role: "Press Trigger", detail: "Initiates collective pressing with positioning" },
        { id: 11, name: "Bakero", position: "CM", x: 35, y: 55, role: "Energetic Presser", detail: "Never stops running and pressing" },
        { id: 5, name: "Eusebio", position: "CM", x: 65, y: 55, role: "Intelligent Presser", detail: "Smart pressing to cut passing lanes" },
        { id: 10, name: "Laudrup", position: "CAM", x: 50, y: 45, role: "Pressing Playmaker", detail: "Even genius pressed in Cruyff system" },
        { id: 8, name: "Stoichkov", position: "LW", x: 75, y: 50, role: "Wing Presser", detail: "Bulgarian intensity in defensive phases" },
        { id: 9, name: "Salinas", position: "ST", x: 45, y: 35, role: "Pressing Forward", detail: "Triggers press by closing down center-backs" },
        { id: 7, name: "Juan Carlos", position: "RW", x: 25, y: 50, role: "Defensive Winger", detail: "Total commitment to collective pressing" }
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
            { id: 6, name: "Koeman", position: "CB", x: 85, y: 82, role: "Set Piece Master", detail: "Dutch defender with incredible shooting power" },
            { id: 8, name: "Stoichkov", position: "LW", x: 78, y: 78, role: "Bulgarian Bullet", detail: "Dangerous in air and on ground" },
            { id: 9, name: "Salinas", position: "ST", x: 82, y: 75, role: "Box Predator", detail: "Perfect positioning in crowded areas" },
            { id: 10, name: "Laudrup", position: "CAM", x: 95, y: 85, role: "Danish Precision", detail: "Perfect delivery with either foot" }
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
        { id: 1, name: "Lehmann", position: "GK", x: 50, y: 95, role: "Mad Genius GK", detail: "German eccentric who brought unpredictability and shot-stopping excellence" },
        { id: 12, name: "Lauren", position: "RB", x: 15, y: 75, role: "Attacking RB", detail: "Cameroonian warrior who bombed forward relentlessly" },
        { id: 23, name: "Campbell", position: "CB", x: 40, y: 80, role: "English Rock", detail: "Tottenham legend who chose Arsenal - dominant in air" },
        { id: 5, name: "Touré", position: "CB", x: 60, y: 80, role: "Ivorian Wall", detail: "Colossus who partnered Campbell perfectly" },
        { id: 3, name: "Cole", position: "LB", x: 85, y: 75, role: "Speed Demon LB", detail: "Fastest fullback in the world bombing up and down" },
        { id: 7, name: "Ljungberg", position: "RM", x: 20, y: 55, role: "Swedish Magician", detail: "Red mohawk wizard with incredible technical ability" },
        { id: 4, name: "Vieira", position: "CM", x: 40, y: 55, role: "Captain Fantastic", detail: "French general who dominated every midfield battle" },
        { id: 19, name: "Gilberto", position: "CDM", x: 60, y: 55, role: "Brazilian Shield", detail: "The invisible wall protecting defense" },
        { id: 8, name: "Pires", position: "LM", x: 80, y: 55, role: "French Artist", detail: "Pure silk on the ball, created magic from nothing" },
        { id: 14, name: "Henry", position: "ST", x: 45, y: 25, role: "King of Highbury", detail: "The greatest striker in Premier League history" },
        { id: 10, name: "Bergkamp", position: "ST", x: 55, y: 25, role: "Dutch Master", detail: "Non-flying Dutchman with genius first touch" }
      ]
    },
    1: {
      players: [
        { id: 1, name: "Lehmann", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick throws to start lightning counters" },
        { id: 12, name: "Lauren", position: "RB", x: 8, y: 50, role: "Overlapping RB", detail: "Creates width when Ljungberg cuts inside" },
        { id: 23, name: "Campbell", position: "CB", x: 40, y: 78, role: "Ball-Playing CB", detail: "Long passes to start attacks from deep" },
        { id: 5, name: "Touré", position: "CB", x: 60, y: 78, role: "Progressive CB", detail: "Steps forward with ball confidently" },
        { id: 3, name: "Cole", position: "LB", x: 92, y: 50, role: "Wing-Back", detail: "Fastest player creating constant overloads" },
        { id: 7, name: "Ljungberg", position: "RM", x: 25, y: 35, role: "Inside Right", detail: "Cuts inside creating central overloads" },
        { id: 4, name: "Vieira", position: "CM", x: 35, y: 60, role: "Box-to-Box General", detail: "French captain covering every blade of grass" },
        { id: 19, name: "Gilberto", position: "CDM", x: 65, y: 60, role: "Deep Anchor", detail: "Brazilian sitting deep, launching attacks" },
        { id: 8, name: "Pires", position: "LM", x: 75, y: 35, role: "Creative Wing", detail: "French artist creating from wide areas" },
        { id: 14, name: "Henry", position: "ST", x: 40, y: 20, role: "Pace Merchant", detail: "In behind constantly with devastating speed" },
        { id: 10, name: "Bergkamp", position: "ST", x: 60, y: 30, role: "Deep-Lying Forward", detail: "Drops deep to orchestrate attacks" }
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
        { id: 1, name: "Lehmann", position: "GK", x: 50, y: 88, role: "Sweeper GK", detail: "German madness organizing from back" },
        { id: 12, name: "Lauren", position: "RB", x: 20, y: 70, role: "Disciplined RB", detail: "Cameroonian discipline tracking back" },
        { id: 23, name: "Campbell", position: "CB", x: 40, y: 75, role: "Dominant CB", detail: "English warrior winning every aerial duel" },
        { id: 5, name: "Touré", position: "CB", x: 60, y: 75, role: "Physical CB", detail: "Ivorian strength dominating strikers" },
        { id: 3, name: "Cole", position: "LB", x: 80, y: 70, role: "Recovery LB", detail: "Fastest player tracking back instantly" },
        { id: 7, name: "Ljungberg", position: "RM", x: 25, y: 55, role: "Tracking Midfielder", detail: "Swedish work rate never stopping" },
        { id: 4, name: "Vieira", position: "CM", x: 40, y: 60, role: "Midfield Destroyer", detail: "French general dominating battles" },
        { id: 19, name: "Gilberto", position: "CDM", x: 60, y: 60, role: "Defensive Screen", detail: "Brazilian wall protecting defense" },
        { id: 8, name: "Pires", position: "LM", x: 75, y: 55, role: "Defensive Winger", detail: "French artist working back for team" },
        { id: 14, name: "Henry", position: "ST", x: 45, y: 35, role: "Counter Threat", detail: "Always ready to break with pace" },
        { id: 10, name: "Bergkamp", position: "ST", x: 55, y: 35, role: "Link Player", detail: "Dutch master dropping deep to help" }
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
            { id: 23, name: "Campbell", position: "CB", x: 85, y: 82, role: "Aerial Giant", detail: "English defender unstoppable in the air" },
            { id: 5, name: "Touré", position: "CB", x: 78, y: 78, role: "Physical Presence", detail: "Ivorian power causing chaos" },
            { id: 14, name: "Henry", position: "ST", x: 82, y: 75, role: "Intelligent Runner", detail: "King finding space in crowded areas" },
            { id: 8, name: "Pires", position: "LM", x: 95, y: 85, role: "French Precision", detail: "Perfect left-footed delivery" }
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