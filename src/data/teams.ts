import { Team } from '../types/tactics';

// Using UI Avatars API for free manager portraits (no signup required)
const getManagerImage = (name: string, teamColor: string) => {
  const cleanColor = teamColor.replace('#', '');
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=${cleanColor}&color=fff&font-size=0.4`;
};

export const legendaryTeams: Team[] = [
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
  }
];