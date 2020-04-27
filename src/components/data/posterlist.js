const posterList = [
  {
    image: '009_01.jpg',
    id: 9,
    author: 'Greta Huang Skagerlind',
    author_url: 'http://gskagerlind.com/',
    size: '30"W×40"H',
    install_date: '27 April 2020'
  },

  {
    image: '009_02.jpg',
    id: 9,
    author: 'Greta Huang Skagerlind',
    author_url: 'http://gskagerlind.com/',
    size: '30"W×40"H',
    install_date: '27 April 2020'
  },

  {
    image: '009_03.jpg',
    id: 9,
    author: 'Greta Huang Skagerlind',
    author_url: 'http://gskagerlind.com/',
    size: '30"W×40"H',
    install_date: '27 April 2020'
  },

  {
    image: '009_04.jpg',
    id: 9,
    author: 'Greta Huang Skagerlind',
    author_url: 'http://gskagerlind.com/',
    size: '30"W×40"H',
    install_date: '27 April 2020'
  },

  {
    image: '008_01.jpg',
    id: 8,
    repost: true,
    size: '30"W×40"H',
    install_date: '26 April 2020',
    description: `Pandemic haikus by <a href='https://www.instagram.com/notborninjune/' target='_blank' rel='noopener noreferrer'>June Shin</a>, design by <a href='https://jackf.me' target='_blank' rel='noopener noreferrer'>Jack Halten Fahnestock</a>`
  },

  {
    image: '008_02.jpg',
    id: 8,
    repost: true,
    size: '30"W×40"H',
    install_date: '26 April 2020',
    description: `Pandemic haikus by <a href='https://www.instagram.com/notborninjune/' target='_blank' rel='noopener noreferrer'>June Shin</a>, design by <a href='https://jackf.me' target='_blank' rel='noopener noreferrer'>Jack Halten Fahnestock</a>`
  },

  {
    image: '008_03.jpg',
    id: 8,
    repost: true,
    size: '30"W×40"H',
    install_date: '26 April 2020',
    description: `Pandemic haikus by <a href='https://www.instagram.com/notborninjune/' target='_blank' rel='noopener noreferrer'>June Shin</a>, design by <a href='https://jackf.me' target='_blank' rel='noopener noreferrer'>Jack Halten Fahnestock</a>`
  },

  {
    image: '008_04.jpg',
    id: 8,
    repost: true,
    size: '30"W×40"H',
    install_date: '26 April 2020',
    description: `Pandemic haikus by <a href='https://www.instagram.com/notborninjune/' target='_blank' rel='noopener noreferrer'>June Shin</a>, design by <a href='https://jackf.me' target='_blank' rel='noopener noreferrer'>Jack Halten Fahnestock</a>`
  },

  {
    image: '008_05.jpg',
    id: 8,
    repost: true,
    size: '30"W×40"H',
    install_date: '26 April 2020',
    description: `Pandemic haikus by <a href='https://www.instagram.com/notborninjune/' target='_blank' rel='noopener noreferrer'>June Shin</a>, design by <a href='https://jackf.me' target='_blank' rel='noopener noreferrer'>Jack Halten Fahnestock</a>`
  },

  {
    image: '007_01.jpg',
    id: 7,
    author: 'Aaron S Moran',
    author_url: 'http://aaronsmoran.com/',
    size: '30"W×40"H',
    install_date: '24 April 2020',
    description: 'Stills of television screens as pictured in film. Captured off various streaming platforms in response to binge watching and escapism during COVID-19.'
  },

  {
    image: '007_02.jpg',
    id: 7,
    author: 'Aaron S Moran',
    author_url: 'http://aaronsmoran.com/',
    size: '30"W×40"H',
    install_date: '24 April 2020',
    description: 'Stills of television screens as pictured in film. Captured off various streaming platforms in response to binge watching and escapism during COVID-19.'
  },

  {
    image: '007_03.jpg',
    id: 7,
    author: 'Aaron S Moran',
    author_url: 'http://aaronsmoran.com/',
    size: '30"W×40"H',
    install_date: '24 April 2020',
    description: 'Stills of television screens as pictured in film. Captured off various streaming platforms in response to binge watching and escapism during COVID-19.'
  },

  {
    image: '007_04.jpg',
    id: 7,
    author: 'Aaron S Moran',
    author_url: 'http://aaronsmoran.com/',
    size: '30"W×40"H',
    install_date: '24 April 2020',
    description: 'Stills of television screens as pictured in film. Captured off various streaming platforms in response to binge watching and escapism during COVID-19.'
  },

  {
    image: '007_05.jpg',
    id: 7,
    author: 'Aaron S Moran',
    author_url: 'http://aaronsmoran.com/',
    size: '30"W×40"H',
    install_date: '24 April 2020',
    description: 'Stills of television screens as pictured in film. Captured off various streaming platforms in response to binge watching and escapism during COVID-19.'
  },

  {
    image: '007_06.jpg',
    id: 7,
    author: 'Aaron S Moran',
    author_url: 'http://aaronsmoran.com/',
    size: '30"W×40"H',
    install_date: '24 April 2020',
    description: 'Stills of television screens as pictured in film. Captured off various streaming platforms in response to binge watching and escapism during COVID-19.'
  },

  {
    image: '007_07.jpg',
    id: 7,
    author: 'Aaron S Moran',
    author_url: 'http://aaronsmoran.com/',
    size: '30"W×40"H',
    install_date: '24 April 2020',
    description: 'Stills of television screens as pictured in film. Captured off various streaming platforms in response to binge watching and escapism during COVID-19.'
  },

  {
    image: '006_01.jpg',
    id: 6,
    author: 'Samuli & Johanna Lindberg',
    author_url: 'http://www.samulilindberg.fi/',
    size: '30"W×40"H',
    install_date: '22 April 2020'
  },

  {
    image: '006_02.jpg',
    id: 6,
    author: 'Samuli & Johanna Lindberg',
    author_url: 'http://www.samulilindberg.fi/',
    size: '30"W×40"H',
    install_date: '22 April 2020'
  },

  {
    image: '006_03.jpg',
    id: 6,
    author: 'Samuli & Johanna Lindberg',
    author_url: 'http://www.samulilindberg.fi/',
    size: '30"W×40"H',
    install_date: '22 April 2020'
  },

  {
    image: '006_04.jpg',
    id: 6,
    author: 'Samuli & Johanna Lindberg',
    author_url: 'http://www.samulilindberg.fi/',
    size: '30"W×40"H',
    install_date: '22 April 2020'
  },

  {
    image: '005_01.jpg',
    id: 5,
    author: 'Urgency Reader 2',
    author_url: 'https://queer.archive.work/urgencyreader2/',
    size: '30"W×40"H',
    install_date: '20 April 2020',
    description: 'Selections featured here by arthur katrina, Joshua Duttweiler, Kitt Peacock, Marisa Fulper Estrada, Molly Soda, nicole killian, Elisabeth Nicula, Danny Aldred, Rebecca Wilkinson, Sal Randolph, Ruben Castillo, anobelisk, Carmen Ribaudo. Edited and published by Paul Soulellis, Providence, RI April 2020'
  },

  {
    image: '005_02.jpg',
    id: 5,
    author: 'Urgency Reader 2',
    author_url: 'https://queer.archive.work/urgencyreader2/',
    size: '30"W×40"H',
    install_date: '20 April 2020',
    description: 'Selections featured here by arthur katrina, Joshua Duttweiler, Kitt Peacock, Marisa Fulper Estrada, Molly Soda, nicole killian, Elisabeth Nicula, Danny Aldred, Rebecca Wilkinson, Sal Randolph, Ruben Castillo, anobelisk, Carmen Ribaudo. Edited and published by Paul Soulellis, Providence, RI April 2020'
  },

  {
    image: '005_03.jpg',
    id: 5,
    author: 'Urgency Reader 2',
    author_url: 'https://queer.archive.work/urgencyreader2/',
    size: '30"W×40"H',
    install_date: '20 April 2020',
    description: 'Selections featured here by arthur katrina, Joshua Duttweiler, Kitt Peacock, Marisa Fulper Estrada, Molly Soda, nicole killian, Elisabeth Nicula, Danny Aldred, Rebecca Wilkinson, Sal Randolph, Ruben Castillo, anobelisk, Carmen Ribaudo. Edited and published by Paul Soulellis, Providence, RI April 2020'
  },

  {
    image: '005_04.jpg',
    id: 5,
    author: 'Urgency Reader 2',
    author_url: 'https://queer.archive.work/urgencyreader2/',
    size: '30"W×40"H',
    install_date: '20 April 2020',
    description: 'Selections featured here by arthur katrina, Joshua Duttweiler, Kitt Peacock, Marisa Fulper Estrada, Molly Soda, nicole killian, Elisabeth Nicula, Danny Aldred, Rebecca Wilkinson, Sal Randolph, Ruben Castillo, anobelisk, Carmen Ribaudo. Edited and published by Paul Soulellis, Providence, RI April 2020'
  },

  {
    image: '005_05.jpg',
    id: 5,
    author: 'Urgency Reader 2',
    author_url: 'https://queer.archive.work/urgencyreader2/',
    size: '30"W×40"H',
    install_date: '20 April 2020',
    description: 'Selections featured here by arthur katrina, Joshua Duttweiler, Kitt Peacock, Marisa Fulper Estrada, Molly Soda, nicole killian, Elisabeth Nicula, Danny Aldred, Rebecca Wilkinson, Sal Randolph, Ruben Castillo, anobelisk, Carmen Ribaudo. Edited and published by Paul Soulellis, Providence, RI April 2020'
  },

  {
    image: '005_06.jpg',
    id: 5,
    author: 'Urgency Reader 2',
    author_url: 'https://queer.archive.work/urgencyreader2/',
    size: '30"W×40"H',
    install_date: '20 April 2020',
    description: 'Selections featured here by arthur katrina, Joshua Duttweiler, Kitt Peacock, Marisa Fulper Estrada, Molly Soda, nicole killian, Elisabeth Nicula, Danny Aldred, Rebecca Wilkinson, Sal Randolph, Ruben Castillo, anobelisk, Carmen Ribaudo. Edited and published by Paul Soulellis, Providence, RI April 2020'
  },

  {
    image: '005_07.jpg',
    id: 5,
    author: 'Urgency Reader 2',
    author_url: 'https://queer.archive.work/urgencyreader2/',
    size: '30"W×40"H',
    install_date: '20 April 2020',
    description: 'Selections featured here by arthur katrina, Joshua Duttweiler, Kitt Peacock, Marisa Fulper Estrada, Molly Soda, nicole killian, Elisabeth Nicula, Danny Aldred, Rebecca Wilkinson, Sal Randolph, Ruben Castillo, anobelisk, Carmen Ribaudo. Edited and published by Paul Soulellis, Providence, RI April 2020'
  },

  {
    image: '004_01.jpg',
    id: 4,
    author: 'Jack Halten Fahnestock',
    author_url: 'https://jackf.me/',
    size: '30"W×40"H',
    install_date: '19 April 2020'
  },

  {
    image: '004_02.jpg',
    id: 4,
    author: 'Jack Halten Fahnestock',
    author_url: 'https://jackf.me/',
    size: '30"W×40"H',
    install_date: '19 April 2020'
  },

  {
    image: '004_03.jpg',
    id: 4,
    author: 'Jack Halten Fahnestock',
    author_url: 'https://jackf.me/',
    size: '30"W×40"H',
    install_date: '19 April 2020'
  },

  {
    image: '003_01.jpg',
    id: 3,
    author: 'Fabian Fohrer',
    author_url: 'http://fabianfohrer.com/',
    size: '30"W×40"H',
    install_date: '17 April 2020'
  },

  {
    image: '003_02.jpg',
    id: 3,
    author: 'Fabian Fohrer',
    author_url: 'http://fabianfohrer.com/',
    size: '30"W×40"H',
    install_date: '17 April 2020'
  },

  {
    image: '003_03.jpg',
    id: 3,
    author: 'Fabian Fohrer',
    author_url: 'http://fabianfohrer.com/',
    size: '30"W×40"H',
    install_date: '17 April 2020'
  },

  {
    image: '002_01.jpg',
    id: 2,
    repost: true,
    size: '15"W×20"H (×4)',
    install_date: '15 April 2020',
    description: `Words by <a href='https://en.wikipedia.org/wiki/Arundhati_Roy' target='_blank' rel='noopener noreferrer'>Arundhati Roy</a>, design by <a href='https://ramongd.com/' target='_blank' rel='noopener noreferrer'>Ramon Tejada</a>`
  },

  {
    image: '002_02.jpg',
    id: 2,
    repost: true,
    size: '15"W×20"H (×4)',
    install_date: '15 April 2020',
    description: `Words by <a href='https://en.wikipedia.org/wiki/Arundhati_Roy' target='_blank' rel='noopener noreferrer'>Arundhati Roy</a>, design by <a href='https://ramongd.com/' target='_blank' rel='noopener noreferrer'>Ramon Tejada</a>`
  },

  {
    image: '002_03.jpg',
    id: 2,
    repost: true,
    size: '15"W×20"H (×4)',
    install_date: '15 April 2020',
    description: `Words by <a href='https://en.wikipedia.org/wiki/Arundhati_Roy' target='_blank' rel='noopener noreferrer'>Arundhati Roy</a>, design by <a href='https://ramongd.com/' target='_blank' rel='noopener noreferrer'>Ramon Tejada</a>`
  },

  {
    image: '001_01.jpg',
    id: 1,
    author: 'Jack Halten Fahnestock',
    author_url: 'https://jackf.me',
    size: '30"W×40"H',
    install_date: '8 April 2020'
  },

  {
    image: '001_02.jpg',
    id: 1,
    author: 'Jack Halten Fahnestock',
    author_url: 'https://jackf.me',
    size: '30"W×40"H',
    install_date: '8 April 2020'
  },

  {
    image: '001_03.jpg',
    id: 1,
    author: 'Jack Halten Fahnestock',
    author_url: 'https://jackf.me',
    size: '30"W×40"H',
    install_date: '8 April 2020'
  },

  {
    image: '000_01.jpg',
    id: 0,
    author: 'Contributor Name',
    author_url: 'http://example.com/',
    size: '30"W×40"H',
    install_date: '2 April 2020'
  },

  {
    image: '000_02.jpg',
    id: 0,
    author: 'Contributor Name',
    author_url: 'http://example.com/',
    size: '30"W×40"H',
    install_date: '2 April 2020'
  },

  {
    image: '000_03.jpg',
    id: 0,
    author: 'Contributor Name',
    author_url: 'http://example.com/',
    size: '30"W×40"H',
    install_date: '2 April 2020'
  },
]

export default posterList
