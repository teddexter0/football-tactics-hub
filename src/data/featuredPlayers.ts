import type { Edition, PlayerProfile, Position } from '@/data/squad';

const portraits: Record<string, [file: string, directory: string]> = {
  'Lionel Messi': ['Lionel_Messi_2018.jpg', 'b/b0'],
  'Cristiano Ronaldo': ['Cristiano_Ronaldo_in_2018.jpg', '3/32'],
  Neymar: ['Neymar_2018.jpg', 'd/d0'],
  'Kylian Mbappé': ['Kylian_Mbappé_2018.jpg', 'e/e5'],
  Pelé: ['Pele_celebrating_1970_(cropped).jpg', '8/88'],
  Ronaldinho: ['Ronaldinho_Gaúcho_em_junho_de_2019_(cropped).jpg', '5/5b'],
  'Diego Maradona': ['Diego_Maradona_on_29_June_1986.jpg', '8/8b'],
  'Ronaldo (Brazilian footballer)': [
    'Ronaldo_Luís_Nazário_de_Lima_2019_(3x4_cropped).jpg',
    '7/78',
  ],
  'Zinedine Zidane': ['Zinedine_Zidane_by_Tasnim_01.jpg', '8/82'],
  'Thierry Henry': ['Thierry_Henry_2008.jpg', '6/6e'],
  'Paolo Maldini': ['PaoloMaldini.jpg', '1/1c'],
  'Lev Yashin': ['Lev_Yashin.jpg', 'a/a3'],
  'Johan Cruyff': ['Johan_Cruijff_cropped.jpg', '2/28'],
  'David Beckham': ['Beckswimbledon.jpg', '9/9e'],
  'Carles Puyol': ['Carles_Puyol_Joan_Gamper-Tr.jpg', '6/60'],
  'Radja Nainggolan': ['Radja_Nainggolan01.jpg', 'd/df'],
  'Paul Pogba': ['Paul_Pogba_2017.jpg', 'a/af'],
  'Marek Hamšík': ['Marek_Hamšík.jpg', '6/69'],
};

export function featuredPortrait(title: string) {
  const entry = portraits[title];
  if (!Object.prototype.hasOwnProperty.call(portraits, title)) return {};
  const [filename, directory] = entry;
  const file = encodeURIComponent(filename);
  return {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/' +
      directory +
      '/' +
      file,
    imageSource: 'https://commons.wikimedia.org/wiki/File:' + file,
  };
}

const outfield = ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'];
const goalkeeper = ['DIV', 'HAN', 'KIC', 'REF', 'SPD', 'POS'];

function card(
  year: 17 | 20 | 22 | 23,
  name: string,
  position: Position,
  overall: number,
  values: number[],
  url = 'https://wefut.com/league/2118/' + year
): Edition {
  return {
    id: [year, name, position, overall].join('-'),
    label: 'FIFA ' + year + ' · ' + name,
    position,
    overall,
    url,
    stats: (position === 'GK' ? goalkeeper : outfield).map((label, i) => ({
      label,
      value: values[i],
    })),
  };
}

function profile(
  title: string,
  description: string,
  ...editions: Edition[]
): PlayerProfile {
  return {
    ...featuredPortrait(title),
    id: title,
    name: title.replace(' (Brazilian footballer)', ''),
    source:
      'https://en.wikipedia.org/wiki/' +
      encodeURIComponent(title.replace(/ /g, '_')),
    description,
    editions,
  };
}

export const featuredPlayers: PlayerProfile[] = [
  profile(
    'Lionel Messi',
    'Argentine forward',
    card(
      23,
      'Premium FUTTIES',
      'ST',
      99,
      [95, 98, 99, 99, 41, 81],
      'https://wefut.com/player/23/21929/lionel-messi'
    ),
    card(
      22,
      'Shapeshifters',
      'CF',
      99,
      [95, 98, 99, 99, 42, 78],
      'https://www.futbin.com/22/players'
    ),
    card(
      22,
      'Team of the Year',
      'RW',
      98,
      [93, 97, 98, 99, 40, 76],
      'https://www.futbin.com/22/players'
    ),
    card(
      23,
      'Team of the Year',
      'RW',
      98,
      [93, 98, 97, 99, 40, 77],
      'https://www.futwiz.com/player/history/158023'
    )
  ),
  profile(
    'Cristiano Ronaldo',
    'Portuguese forward',
    card(
      23,
      'Premium FUTTIES',
      'ST',
      99,
      [97, 99, 93, 97, 41, 88],
      'https://wefut.com/player/23/21914/cristiano-ronaldo'
    ),
    card(
      22,
      'Shapeshifters',
      'LW',
      99,
      [99, 99, 90, 97, 50, 92],
      'https://www.futbin.com/22/players'
    )
  ),
  profile(
    'Neymar',
    'Brazilian forward · Neymar Jr.',
    card(
      23,
      'FUTTIES',
      'CAM',
      99,
      [99, 96, 95, 99, 50, 78],
      'https://www.futbin.com/23/players'
    )
  ),
  profile(
    'Kylian Mbappé',
    'French forward',
    card(
      23,
      'FUTTIES',
      'ST',
      99,
      [99, 98, 92, 99, 45, 87],
      'https://www.futbin.com/23/players'
    )
  ),
  profile(
    'Pelé',
    'Brazilian forward',
    card(22, 'Icon Moments', 'CAM', 99, [96, 97, 96, 97, 62, 79]),
    card(23, 'Shapeshifters Icon', 'LW', 99, [96, 97, 94, 99, 61, 78]),
    card(23, 'Prime Icon', 'CAM', 98, [95, 96, 93, 96, 60, 76])
  ),
  profile(
    'Ronaldinho',
    'Brazilian attacking midfielder',
    card(23, 'FUTTIES Icon', 'CAM', 98, [98, 94, 95, 99, 50, 88]),
    card(22, 'Icon Moments', 'LW', 95, [94, 93, 92, 98, 39, 82]),
    card(23, 'Prime Icon', 'LW', 95, [94, 91, 92, 97, 38, 83])
  ),
  profile(
    'Diego Maradona',
    'Argentine attacking midfielder',
    card(22, 'Icon Moments', 'CAM', 98, [93, 94, 95, 98, 42, 78]),
    card(22, 'Prime Icon', 'CAM', 97, [92, 93, 92, 97, 40, 76])
  ),
  profile(
    'Ronaldo (Brazilian footballer)',
    'Brazilian striker · Ronaldo Nazário',
    card(22, 'Icon Moments', 'ST', 97, [98, 97, 83, 97, 46, 79]),
    card(23, 'Team of the Year Icon', 'ST', 97, [97, 96, 82, 96, 45, 82]),
    card(23, 'Prime Icon', 'ST', 96, [97, 95, 81, 95, 45, 76])
  ),
  profile(
    'Zinedine Zidane',
    'French attacking midfielder',
    card(23, 'Cover Star Icon', 'CAM', 99, [92, 96, 99, 97, 87, 90]),
    card(23, 'Prime Icon', 'CAM', 96, [85, 92, 96, 95, 75, 86])
  ),
  profile(
    'Thierry Henry',
    'French forward',
    card(23, 'Cover Star Icon', 'ST', 99, [99, 99, 92, 99, 62, 90]),
    card(23, 'Shapeshifters Icon', 'RW', 98, [98, 95, 93, 98, 70, 86]),
    card(22, 'Icon Moments', 'ST', 94, [96, 96, 85, 93, 54, 81])
  ),
  profile(
    'Paolo Maldini',
    'Italian defender',
    card(22, 'Icon Moments', 'CB', 95, [87, 65, 77, 70, 98, 85])
  ),
  profile(
    'Lev Yashin',
    'Soviet goalkeeper',
    card(22, 'Icon Moments', 'GK', 95, [98, 90, 76, 99, 62, 98])
  ),
  profile(
    'Johan Cruyff',
    'Dutch forward',
    card(22, 'Icon Moments', 'CF', 95, [92, 94, 92, 98, 43, 75])
  ),
  profile(
    'David Beckham',
    'English midfielder',
    card(22, 'Icon Moments', 'RM', 94, [86, 89, 97, 90, 73, 83])
  ),
  profile(
    'Carles Puyol',
    'Spanish defender',
    card(22, 'Icon Moments', 'CB', 94, [79, 49, 69, 60, 96, 92])
  ),
  {
    ...profile(
      'Radja Nainggolan',
      'Belgian central midfielder',
      card(
        20,
        'Team of the Season Moments',
        'CAM',
        93,
        [85, 89, 90, 93, 93, 93],
        'https://www.fut.gg/players/178518-radja-nainggolan/'
      ),
      card(
        20,
        'Headliners',
        'CAM',
        88,
        [80, 87, 86, 88, 88, 87],
        'https://www.fut.gg/players/178518-radja-nainggolan/'
      )
    ),
    position: 'CM',
    aliases: ['Radja Naingolan', 'Il Ninja'],
  },
  {
    ...profile(
      'Paul Pogba',
      'French central midfielder',
      card(
        23,
        'Flashback',
        'CM',
        90,
        [81, 86, 89, 90, 80, 91],
        'https://www.futwiz.com/fifa23/player/paul-pogba/19471'
      )
    ),
    position: 'CM',
    aliases: ['Paul Labile Pogba'],
  },
  {
    ...profile(
      'Marek Hamšík',
      'Slovak central midfielder',
      card(
        17,
        'Team of the Season',
        'CM',
        94,
        [84, 95, 96, 97, 85, 92],
        'https://www.fut.gg/players/171877-marek-hamsik/'
      ),
      card(
        17,
        'Team of the Week',
        'CM',
        89,
        [80, 90, 91, 92, 80, 86],
        'https://www.fut.gg/players/171877-marek-hamsik/'
      )
    ),
    position: 'CM',
    aliases: ['Marekiaro'],
  },
];
