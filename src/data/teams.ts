import { Team } from '../types/tactics';

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
    managerImage: "/managers/pep-2023.jpg",
    phases: {
      0: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Revolutionary goalkeeper - essentially the 11th outfield player with incredible distribution range and composure under pressure" },
          { id: 2, name: "Walker", position: "RB", x: 15, y: 75, role: "Fullback", detail: "Rapid recovery pace, traditional width provider in kickoff shape" },
          { id: 5, name: "Stones", position: "CB", x: 38, y: 80, role: "Ball-Playing CB", detail: "The conductor from deep - reads the game like a quarterback, switches play with pinpoint accuracy" },
          { id: 25, name: "Akanji", position: "CB", x: 62, y: 80, role: "Left-footed CB", detail: "Elegant defender who brings the ball out from the back with confidence and precision" },
          { id: 6, name: "Ake", position: "LB", x: 85, y: 75, role: "Fullback", detail: "Versatile defender who provides balance - can play centrally or wide as needed" },
          { id: 16, name: "Rodri", position: "CDM", x: 50, y: 65, role: "Lone Pivot", detail: "The metronome - controls tempo, screens defense, virtually press-proof with his body positioning" },
          { id: 17, name: "De Bruyne", position: "CM", x: 38, y: 55, role: "Central Midfielder", detail: "The master of the half-space - creates magic between the lines with through balls and late runs" },
          { id: 8, name: "Gündogan", position: "CM", x: 62, y: 55, role: "Central Midfielder", detail: "Intelligent movement, arrives late in the box, technical excellence under pressure" },
          { id: 26, name: "Mahrez", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Left-footed wizard who cuts inside from the right, creating overloads and scoring spectacular goals" },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 25, role: "Striker", detail: "Goal machine - combines raw pace and power with clinical finishing, stretches defenses with his presence" },
          { id: 10, name: "Grealish", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Retention specialist who draws fouls, keeps possession under pressure, creates chaos for defenders" }
        ]
      },
      1: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 90, role: "Sweeper Keeper", detail: "Acts as 11th outfield player - pings 60-yard passes to start attacks instantly" },
          { id: 2, name: "Walker", position: "RB", x: 35, y: 70, role: "Inverted Fullback", detail: "Tucks into midfield creating 3-2-4-1 - covers for Stones when he steps up" },
          { id: 5, name: "Stones", position: "CB", x: 45, y: 75, role: "Stepping CB", detail: "Steps into midfield as auxiliary DM - distributes like a regista from deep" },
          { id: 25, name: "Akanji", position: "CB", x: 65, y: 80, role: "Wide CB", detail: "Drifts wide when Ake attacks - comfortable playing almost as a fullback" },
          { id: 6, name: "Ake", position: "LB", x: 85, y: 60, role: "Orthodox Fullback", detail: "Provides essential width when Grealish cuts inside - overlapping runs and quality crosses" },
          { id: 16, name: "Rodri", position: "CDM", x: 55, y: 65, role: "Deep Playmaker", detail: "Drops between CBs in build-up - the anchor that allows everyone else to roam" },
          { id: 17, name: "De Bruyne", position: "CM", x: 30, y: 45, role: "Advanced Playmaker", detail: "Occupies right half-space - the creative genius who finds impossible passes" },
          { id: 8, name: "Gündogan", position: "CM", x: 70, y: 50, role: "Roaming 8", detail: "Finds pockets between lines - ghosting into the box with perfect timing" },
          { id: 26, name: "Mahrez", position: "RW", x: 15, y: 35, role: "Inverted Winger", detail: "Cuts inside to create central overloads - left foot is a wand" },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 20, role: "Target Man", detail: "Pin the backline - even when marked, his presence creates space for others" },
          { id: 10, name: "Grealish", position: "LW", x: 75, y: 25, role: "Wide Playmaker", detail: "Hugs touchline then cuts inside - draws 2-3 players with his dribbling" }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 35, y: 70 }, type: 'movement', player: 'Walker Inverts', color: '#6CABDD' },
          { from: { x: 85, y: 75 }, to: { x: 85, y: 60 }, type: 'movement', player: 'Ake Bombs Forward', color: '#6CABDD' },
          { from: { x: 50, y: 25 }, to: { x: 45, y: 35 }, type: 'movement', player: 'Haaland Drops Deep', color: '#FFD700' }
        ],
        zones: [
          { x: 25, y: 35, width: 30, height: 25, color: 'rgba(108, 171, 221, 0.3)', label: 'Right Half-Space Overload' },
          { x: 65, y: 35, width: 30, height: 25, color: 'rgba(108, 171, 221, 0.3)', label: 'Left Half-Space Creation' }
        ]
      },
      2: {
        players: [
          { id: 31, name: "Ederson", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Covers space behind the highest defensive line in world football" },
          { id: 2, name: "Walker", position: "RB", x: 20, y: 75, role: "Defensive FB", detail: "Uses recovery pace to get back - can track any winger in the world" },
          { id: 5, name: "Stones", position: "CB", x: 40, y: 78, role: "Aggressive CB", detail: "Steps out to press - reads the game to intercept passes before they develop" },
          { id: 25, name: "Akanji", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Covers for Stones' aggressive pressing - intelligent positioning" },
          { id: 6, name: "Ake", position: "LB", x: 80, y: 75, role: "Defensive FB", detail: "Tracks runners religiously - never gives strikers an easy touch" },
          { id: 16, name: "Rodri", position: "CDM", x: 50, y: 68, role: "Defensive Screen", detail: "Covers space in front of defense - breaks up counter-attacks before they start" },
          { id: 17, name: "De Bruyne", position: "CM", x: 35, y: 60, role: "Pressing Midfielder", detail: "Presses with intelligence - forces opponents into difficult areas" },
          { id: 8, name: "Gündogan", position: "CM", x: 65, y: 60, role: "Supporting Presser", detail: "Supports the press while covering space - positional discipline" },
          { id: 26, name: "Mahrez", position: "RW", x: 20, y: 50, role: "Wide Presser", detail: "Forces play inside where City can win the ball back in numbers" },
          { id: 9, name: "Haaland", position: "ST", x: 50, y: 40, role: "Pressing Forward", detail: "Triggers the press - cuts passing lanes to center-backs with positioning" },
          { id: 10, name: "Grealish", position: "LW", x: 80, y: 50, role: "Wide Presser", detail: "Works back to help press - never stops running for the team" }
        ],
        zones: [
          { x: 0, y: 20, width: 100, height: 15, color: 'rgba(255, 0, 0, 0.2)', label: 'Highest Line in Football' },
          { x: 0, y: 35, width: 100, height: 30, color: 'rgba(255, 165, 0, 0.2)', label: 'Coordinated Pressing Zone' }
        ]
      },
      3: {
        corners: [
          {
            name: "Overload the Keeper",
            players: [
              { id: 5, name: "Stones", position: "CB", x: 85, y: 80, role: "Aerial Threat", detail: "Attacks near post with aggression" },
              { id: 9, name: "Haaland", position: "ST", x: 82, y: 78, role: "Primary Target", detail: "Unstoppable in the air - causes chaos" },
              { id: 25, name: "Akanji", position: "CB", x: 75, y: 82, role: "Secondary Target", detail: "Arrives late with power" },
              { id: 17, name: "De Bruyne", position: "CM", x: 95, y: 85, role: "Corner Taker", detail: "Pinpoint delivery specialist" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 88, y: 82, role: "Defender" }, { x: 78, y: 78, role: "Defender" },
              { x: 82, y: 85, role: "Defender" }, { x: 70, y: 80, role: "Defender" }, { x: 60, y: 75, role: "Midfielder" }
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
    description: "The most intense pressing machine in football history. Klopp's warriors who turned doubters into believers with 6-second gegenpress and fullbacks who were basically wingers.",
    primaryColor: "#C8102E",
    secondaryColor: "#00B2A9", 
    quote: "We must turn from doubters into believers. This is heavy metal football!",
    managerImage: "/managers/klopp-2019.jpg",
    phases: {
      0: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 95, role: "Goalkeeper", detail: "World-class shot-stopper who brought calmness to Liverpool's defense" },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 15, y: 75, role: "Right-Back", detail: "22-year-old quarterback - created more chances than most midfielders" },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 80, role: "Centre-Back", detail: "Colossus who transformed Liverpool's defense - leader and aerial dominance" },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 80, role: "Centre-Back", detail: "Pacey defender who covers for the high line with intelligent positioning" },
          { id: 26, name: "Robertson", position: "LB", x: 85, y: 75, role: "Left-Back", detail: "Scottish warrior with endless energy - bombing forward every attack" },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 65, role: "Holding Mid", detail: "Brazilian destroyer - breaks up everything in front of defense" },
          { id: 14, name: "Henderson", position: "CM", x: 35, y: 55, role: "Central Mid", detail: "Captain who leads by example - drives team forward with passion" },
          { id: 5, name: "Wijnaldum", position: "CM", x: 65, y: 55, role: "Central Mid", detail: "Press-resistant magician who glides through tight spaces" },
          { id: 11, name: "Salah", position: "RW", x: 20, y: 40, role: "Right Winger", detail: "Egyptian King - left foot is deadly, cuts inside with devastating effect" },
          { id: 9, name: "Firmino", position: "ST", x: 50, y: 30, role: "Centre Forward", detail: "False 9 genius - creates space with movement, links everything together" },
          { id: 10, name: "Mané", position: "LW", x: 80, y: 40, role: "Left Winger", detail: "Senegalese speedster - direct running and clinical finishing" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Quick distribution to start counter-attacks - supports high defensive line" },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 10, y: 45, role: "Attacking FB", detail: "Essentially a right winger - creates havoc with crosses and through balls" },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 78, role: "Defensive Leader", detail: "Organizes the highest line in football - pings 50-yard passes to wingers" },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 78, role: "Pace & Recovery", detail: "Uses pace to cover spaces - comfortable playing wide when needed" },
          { id: 26, name: "Robertson", position: "LB", x: 90, y: 45, role: "Overlapping FB", detail: "Hugs the touchline and bombs forward - relentless attacking runs" },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 68, role: "Destroyer", detail: "Covers for both fullbacks - launches quick transitions forward" },
          { id: 14, name: "Henderson", position: "CM", x: 30, y: 55, role: "Box-to-Box", detail: "Covers every blade of grass - switches play with diagonal passes" },
          { id: 5, name: "Wijnaldum", position: "CM", x: 70, y: 55, role: "Press Resistant 8", detail: "Carries ball through lines - makes late runs into the box" },
          { id: 11, name: "Salah", position: "RW", x: 25, y: 25, role: "Inside Forward", detail: "Cuts inside from right half-space - clinical finisher on left foot" },
          { id: 9, name: "Firmino", position: "ST", x: 55, y: 35, role: "False 9", detail: "Drops deep to create the famous 'diamond of space' for Mané and Salah" },
          { id: 10, name: "Mané", position: "LW", x: 75, y: 25, role: "Inside Forward", detail: "Direct running at pace - stretches defense with movement" }
        ],
        movements: [
          { from: { x: 15, y: 75 }, to: { x: 10, y: 45 }, type: 'movement', player: 'TAA Bombs Forward', color: '#C8102E' },
          { from: { x: 85, y: 75 }, to: { x: 90, y: 45 }, type: 'movement', player: 'Robertson Overlaps', color: '#C8102E' },
          { from: { x: 50, y: 30 }, to: { x: 55, y: 35 }, type: 'movement', player: 'Firmino False 9', color: '#FFD700' }
        ],
        zones: [
          { x: 0, y: 30, width: 20, height: 35, color: 'rgba(200, 16, 46, 0.3)', label: 'Right Wing Overload' },
          { x: 80, y: 30, width: 20, height: 35, color: 'rgba(200, 16, 46, 0.3)', label: 'Left Wing Overload' },
          { x: 45, y: 20, width: 30, height: 25, color: 'rgba(255, 215, 0, 0.3)', label: 'Diamond of Space' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Alisson", position: "GK", x: 50, y: 88, role: "Sweeper", detail: "Covers the highest line - quick to come out and clear danger" },
          { id: 66, name: "Alexander-Arnold", position: "RB", x: 20, y: 70, role: "Recovering FB", detail: "Tracks back with pace - can recover from any attacking position" },
          { id: 4, name: "Van Dijk", position: "CB", x: 40, y: 75, role: "Aggressive Press", detail: "Steps out to win the ball high - dominant in the air and on ground" },
          { id: 12, name: "Gomez", position: "CB", x: 60, y: 75, role: "Covering CB", detail: "Uses recovery pace to cover Van Dijk's aggressive pressing" },
          { id: 26, name: "Robertson", position: "LB", x: 80, y: 70, role: "Defensive FB", detail: "Incredible work rate - tracks back from advanced positions instantly" },
          { id: 3, name: "Fabinho", position: "CDM", x: 50, y: 65, role: "Pressing Trigger", detail: "Wins the ball and starts the famous 6-second gegenpress" },
          { id: 14, name: "Henderson", position: "CM", x: 35, y: 50, role: "Gegenpress", detail: "Immediate counter-pressing - never gives opponents time to think" },
          { id: 5, name: "Wijnaldum", position: "CM", x: 65, y: 50, role: "Press Support", detail: "Supports the gegenpress with intelligent positioning" },
          { id: 11, name: "Salah", position: "RW", x: 25, y: 40, role: "Wide Press", detail: "Forces play inside where Liverpool can win it back in numbers" },
          { id: 9, name: "Firmino", position: "ST", x: 50, y: 35, role: "Front Press", detail: "Triggers the press from front - cuts passing lanes to center-backs" },
          { id: 10, name: "Mané", position: "LW", x: 75, y: 40, role: "Intense Press", detail: "Never stops running - pressing intensity that breaks opponents' will" }
        ],
        movements: [
          { from: { x: 50, y: 35 }, to: { x: 50, y: 45 }, type: 'press', player: '6-Second Gegenpress', color: '#FF0000' }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 35, color: 'rgba(255, 0, 0, 0.3)', label: 'Gegenpress Zone - 6 Second Rule' }
        ]
      },
      3: {
        corners: [
          {
            name: "Van Dijk Near Post Special",
            players: [
              { id: 4, name: "Van Dijk", position: "CB", x: 88, y: 82, role: "Near Post Target", detail: "Flicks on with incredible precision" },
              { id: 9, name: "Firmino", position: "ST", x: 78, y: 78, role: "Second Wave", detail: "Attacks flick-ons with intelligent movement" },
              { id: 10, name: "Mané", position: "LW", x: 82, y: 75, role: "Back Post Arrival", detail: "Arrives late at back post with perfect timing" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 85, y: 85, role: "Defender" }, { x: 80, y: 80, role: "Defender" }
            ]
          }
        ]
      }
    }
  },
  {
    name: "Leicester City 2015/16",
    manager: "Claudio Ranieri",
    achievement: "Premier League Champions - 5000/1 Miracle",
    formation: "4-4-2",
    style: "Counter-Attack, Direct Play, Defensive Solidity, Team Spirit",
    description: "The greatest underdog story in football history. From relegation candidates to champions with pace, power, and the finest counter-attacking football England has ever seen.",
    primaryColor: "#003090",
    secondaryColor: "#FDBE11",
    quote: "Dilly ding, dilly dong! My players have the heart of a lion!",
    managerImage: "/managers/ranieri-2016.jpg",
    phases: {
      0: {
        players: [
          { id: 1, name: "Schmeichel", position: "GK", x: 50, y: 95, role: "Traditional GK", detail: "Shot-stopping legend who kept 15 clean sheets in title season" },
          { id: 17, name: "Simpson", position: "RB", x: 15, y: 75, role: "Defensive FB", detail: "Solid right-back who rarely ventured forward but never let you down" },
          { id: 6, name: "Huth", position: "CB", x: 38, y: 80, role: "Stopper", detail: "German tank - aerial dominance and never-say-die defending" },
          { id: 5, name: "Morgan", position: "CB", x: 62, y: 80, role: "Defensive Leader", detail: "Captain fantastic who marshaled the defense with intelligence and grit" },
          { id: 28, name: "Fuchs", position: "LB", x: 85, y: 75, role: "Attacking FB", detail: "Austrian left-back with wicked delivery and set-piece expertise" },
          { id: 14, name: "Kanté", position: "CDM", x: 38, y: 65, role: "Destroyer", detail: "Covered every blade of grass - won the ball back more than any player in Europe" },
          { id: 4, name: "Drinkwater", position: "CM", x: 62, y: 65, role: "Deep Playmaker", detail: "Perfect partner for Kanté - sprayed passes to Vardy and Mahrez all season" },
          { id: 11, name: "Albrighton", position: "RM", x: 20, y: 55, role: "Traditional Winger", detail: "Work-horse winger who tracked back religiously and delivered quality crosses" },
          { id: 26, name: "Mahrez", position: "LM", x: 80, y: 55, role: "Creative Winger", detail: "Algerian magician - PFA Player of the Year with 17 goals and 11 assists" },
          { id: 20, name: "Okazaki", position: "ST", x: 40, y: 40, role: "False 9", detail: "Japanese warrior who worked tirelessly to create space for Vardy" },
          { id: 9, name: "Vardy", position: "ST", x: 60, y: 40, role: "Poacher", detail: "Chat shit get banged - 24 goals and the most lethal counter-attacking striker ever" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Schmeichel", position: "GK", x: 50, y: 88, role: "Distribution GK", detail: "Quick throws and long kicks to start lightning counter-attacks" },
          { id: 17, name: "Simpson", position: "RB", x: 20, y: 70, role: "Defensive FB", detail: "Stays back while Fuchs provides width - solid defensive base" },
          { id: 6, name: "Huth", position: "CB", x: 40, y: 75, role: "Ball-winning CB", detail: "Wins headers and plays simple passes to midfield - no nonsense" },
          { id: 5, name: "Morgan", position: "CB", x: 60, y: 75, role: "Organizing CB", detail: "Commands the backline and launches attacks with long balls to Vardy" },
          { id: 28, name: "Fuchs", position: "LB", x: 85, y: 50, role: "Attacking FB", detail: "Bombs forward to support attacks - crucial width in attacking phase" },
          { id: 14, name: "Kanté", position: "CDM", x: 45, y: 60, role: "Ball Winner", detail: "Wins the ball and immediately looks for Vardy or Mahrez - simple but deadly" },
          { id: 4, name: "Drinkwater", position: "CM", x: 55, y: 60, role: "Quarterback", detail: "The key to Leicester's success - found Vardy with inch-perfect through balls" },
          { id: 11, name: "Albrighton", position: "RM", x: 25, y: 50, role: "Supporting Winger", detail: "Provides width and crosses - work rate that never drops" },
          { id: 26, name: "Mahrez", position: "LM", x: 75, y: 45, role: "Creative Force", detail: "Drifts inside to create magic - the x-factor in Leicester's counter-attacks" },
          { id: 20, name: "Okazaki", position: "ST", x: 45, y: 35, role: "Link Player", detail: "Links play and creates space for Vardy with intelligent movement" },
          { id: 9, name: "Vardy", position: "ST", x: 65, y: 25, role: "Speed Merchant", detail: "Runs in behind defenses at pace - the ultimate counter-attacking weapon" }
        ],
        movements: [
          { from: { x: 45, y: 60 }, to: { x: 65, y: 25 }, type: 'pass', player: 'Kanté to Vardy', color: '#003090' },
          { from: { x: 60, y: 40 }, to: { x: 65, y: 25 }, type: 'movement', player: 'Vardy Counter', color: '#FDBE11' }
        ],
        zones: [
          { x: 30, y: 50, width: 40, height: 25, color: 'rgba(0, 48, 144, 0.3)', label: 'Compact Midfield Block' },
          { x: 50, y: 15, width: 30, height: 20, color: 'rgba(253, 190, 17, 0.3)', label: 'Counter-Attack Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Schmeichel", position: "GK", x: 50, y: 88, role: "Shot Stopper", detail: "Incredible reflexes - made crucial saves when Leicester needed them most" },
          { id: 17, name: "Simpson", position: "RB", x: 20, y: 65, role: "Defensive FB", detail: "Tight marking and solid tackling - never gave wingers an inch" },
          { id: 6, name: "Huth", position: "CB", x: 40, y: 70, role: "Aggressive CB", detail: "Physical battles won in the air - cleared everything in the box" },
          { id: 5, name: "Morgan", position: "CB", x: 60, y: 70, role: "Defensive Leader", detail: "Organized the low block perfectly - communication was key" },
          { id: 28, name: "Fuchs", position: "LB", x: 80, y: 65, role: "Defensive FB", detail: "Tracked back religiously from attacking positions" },
          { id: 14, name: "Kanté", position: "CDM", x: 45, y: 55, role: "Midfield Destroyer", detail: "Broke up play in front of defense - made 175 tackles in the season" },
          { id: 4, name: "Drinkwater", position: "CM", x: 55, y: 55, role: "Defensive Mid", detail: "Sat deeper to help Kanté screen the defense" },
          { id: 11, name: "Albrighton", position: "RM", x: 25, y: 50, role: "Defensive Winger", detail: "Tracked back to help Simpson - incredible work rate" },
          { id: 26, name: "Mahrez", position: "LM", x: 75, y: 50, role: "Counter Threat", detail: "Stayed high to threaten on the break" },
          { id: 20, name: "Okazaki", position: "ST", x: 50, y: 40, role: "Pressing Forward", detail: "Never stopped running - pressed defenders into mistakes" },
          { id: 9, name: "Vardy", position: "ST", x: 60, y: 35, role: "Outlet", detail: "Ready to run in behind on any loose ball or clearance" }
        ],
        zones: [
          { x: 15, y: 45, width: 70, height: 35, color: 'rgba(0, 48, 144, 0.4)', label: 'Defensive Low Block' }
        ]
      },
      3: {
        corners: [
          {
            name: "Fuchs Delivery Special",
            players: [
              { id: 6, name: "Huth", position: "CB", x: 85, y: 80, role: "Aerial Target", detail: "Dominant in the air - scored crucial headers" },
              { id: 5, name: "Morgan", position: "CB", x: 78, y: 78, role: "Aerial Threat", detail: "Captain led by example in the box" },
              { id: 28, name: "Fuchs", position: "LB", x: 95, y: 85, role: "Corner Specialist", detail: "Wicked left-footed delivery" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 82, y: 85, role: "Defender" }, { x: 80, y: 80, role: "Defender" }
            ]
          }
        ]
      }
    }
  },
  {
    name: "Barcelona 2010/11",
    manager: "Pep Guardiola",
    achievement: "Champions League Winners - Tiki-Taka Perfection",
    formation: "4-3-3",
    style: "Tiki-Taka Mastery, False 9 Revolution, Total Domination",
    description: "Peak Pep's Barcelona - the greatest club team ever assembled. Messi as false 9, Xavi-Iniesta magic, and football played like poetry in motion.",
    primaryColor: "#A50044",
    secondaryColor: "#004D98",
    quote: "The ball is always the fastest player on the pitch.",
    managerImage: "/managers/pep-2011.jpg",
    phases: {
      0: {
        players: [
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 95, role: "Sweeper Keeper", detail: "Revolutionary goalkeeper comfortable with feet - key part of build-up play" },
          { id: 2, name: "Alves", position: "RB", x: 20, y: 75, role: "Attacking FB", detail: "Brazilian magician - created width and chaos down the right flank" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 80, role: "Ball-Playing CB", detail: "Elegant defender who stepped into midfield with ball-playing ability" },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 80, role: "Defensive Leader", detail: "Warrior captain who organized defense and covered for Piqué's forward runs" },
          { id: 22, name: "Abidal", position: "LB", x: 80, y: 75, role: "Defensive FB", detail: "Stayed back to provide balance while Alves attacked" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Deep-Lying Playmaker", detail: "Master of time and space - press resistant and perfect passing" },
          { id: 6, name: "Xavi", position: "CM", x: 40, y: 55, role: "Regista", detail: "Metronome of the team - 91% pass accuracy and tempo control" },
          { id: 8, name: "Iniesta", position: "CM", x: 60, y: 55, role: "Creative 8", detail: "Magician who dribbled through impossible spaces" },
          { id: 7, name: "Villa", position: "RW", x: 25, y: 40, role: "Inside Forward", detail: "Clinical finisher who cut inside from wide positions" },
          { id: 10, name: "Messi", position: "ST", x: 50, y: 30, role: "False 9", detail: "Revolutionary false 9 role - dropped deep to create chaos" },
          { id: 9, name: "Pedro", position: "LW", x: 75, y: 40, role: "Wide Forward", detail: "Versatile forward who stretched defenses with pace and movement" }
        ]
      },
      1: {
        players: [
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 88, role: "Sweeper Keeper", detail: "Essential part of passing game - comfortable receiving back-passes under pressure" },
          { id: 2, name: "Alves", position: "RB", x: 20, y: 50, role: "Attacking FB", detail: "Provided width when Villa cut inside - overlaps and underlaps" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 75, role: "Stepping CB", detail: "Stepped into midfield regularly - comfortable playing as auxiliary DM" },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 78, role: "Covering CB", detail: "Covered spaces when Piqué advanced - intelligent positioning" },
          { id: 22, name: "Abidal", position: "LB", x: 80, y: 60, role: "Balanced FB", detail: "Provided width when needed but maintained defensive stability" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 68, role: "Deep Playmaker", detail: "Dropped between center-backs in build-up - never lost possession" },
          { id: 6, name: "Xavi", position: "CM", x: 40, y: 50, role: "Tempo Controller", detail: "Dictated rhythm of entire game - found Messi between the lines constantly" },
          { id: 8, name: "Iniesta", position: "CM", x: 60, y: 55, role: "Creative Genius", detail: "Dribbled through tight spaces to create overloads" },
          { id: 7, name: "Villa", position: "RW", x: 25, y: 30, role: "Inside Forward", detail: "Cut inside to create 4v3 overloads in central areas" },
          { id: 10, name: "Messi", position: "ST", x: 50, y: 45, role: "False 9", detail: "Dropped into midfield to create confusion - defenders didn't know whether to follow" },
          { id: 9, name: "Pedro", position: "LW", x: 75, y: 30, role: "Wide Forward", detail: "Made runs into space created by Messi's movement" }
        ],
        movements: [
          { from: { x: 50, y: 30 }, to: { x: 50, y: 45 }, type: 'movement', player: 'Messi False 9 Drop', color: '#FFD700' },
          { from: { x: 40, y: 75 }, to: { x: 40, y: 65 }, type: 'movement', player: 'Piqué Steps Up', color: '#A50044' }
        ],
        zones: [
          { x: 30, y: 40, width: 40, height: 30, color: 'rgba(165, 0, 68, 0.3)', label: 'Tiki-Taka Central Triangle' },
          { x: 20, y: 25, width: 60, height: 25, color: 'rgba(255, 215, 0, 0.3)', label: 'False 9 Chaos Zone' }
        ]
      },
      2: {
        players: [
          { id: 1, name: "Valdés", position: "GK", x: 50, y: 88, role: "Sweeper", detail: "Swept behind high defensive line" },
          { id: 2, name: "Alves", position: "RB", x: 20, y: 70, role: "Pressing FB", detail: "High line pressing with coordinated movement" },
          { id: 3, name: "Piqué", position: "CB", x: 40, y: 75, role: "Aggressive CB", detail: "Stepped out to press with ball-playing ability" },
          { id: 5, name: "Puyol", position: "CB", x: 60, y: 75, role: "Covering CB", detail: "Covered for Piqué's aggressive pressing" },
          { id: 22, name: "Abidal", position: "LB", x: 80, y: 70, role: "Pressing FB", detail: "Maintained high line discipline" },
          { id: 16, name: "Busquets", position: "CDM", x: 50, y: 65, role: "Defensive Screen", detail: "Broke up play intelligently with positioning" },
          { id: 6, name: "Xavi", position: "CM", x: 40, y: 55, role: "Pressing Mid", detail: "Coordinated pressing movements with intelligence" },
          { id: 8, name: "Iniesta", position: "CM", x: 60, y: 55, role: "Press Support", detail: "Supported team pressing with work rate" },
          { id: 7, name: "Villa", position: "RW", x: 25, y: 45, role: "Wide Press", detail: "Forced play inside with intelligent pressing angles" },
          { id: 10, name: "Messi", position: "ST", x: 50, y: 40, role: "False 9 Press", detail: "Triggered coordinated press from false 9 position" },
          { id: 9, name: "Pedro", position: "LW", x: 75, y: 45, role: "Wide Press", detail: "High defensive work rate complemented attacking play" }
        ],
        zones: [
          { x: 0, y: 30, width: 100, height: 40, color: 'rgba(165, 0, 68, 0.3)', label: 'High Press Coordination' }
        ]
      },
      3: {
        corners: [
          {
            name: "Piqué Aerial Power",
            players: [
              { id: 3, name: "Piqué", position: "CB", x: 82, y: 78, role: "Aerial Target", detail: "Dominant header of the ball" },
              { id: 5, name: "Puyol", position: "CB", x: 85, y: 82, role: "Warrior Header", detail: "Never gave up on any ball" },
              { id: 6, name: "Xavi", position: "CM", x: 95, y: 85, role: "Corner Taker", detail: "Pinpoint accuracy from corners" }
            ],
            opposition: [
              { x: 50, y: 90, role: "GK" }, { x: 80, y: 85, role: "Defender" }, { x: 82, y: 80, role: "Defender" }
            ]
          }
        ]
      }
    }
  }
];