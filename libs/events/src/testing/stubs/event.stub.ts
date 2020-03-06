import { Event } from '@medium-stories/entities';

export const eventStub: Event = {
  id: 1,
  created: '2019-07-13 00:00:00.000000',
  updated: '2019-07-13 00:00:00.000000',
  body: {
    en:
      'Competition in the fifth round of the season of Lamborghini Super Trofeo North America will take place at the most famous Californian raceway.',
    ru: 'Соревнования в пятом туре сезона Lamborghini Super Trofeo North America пройдут на самой известной калифорнийской гоночной трассе.'
  },
  start: '2019-07-13 00:00:00.000000',
  end: '2019-07-14 00:00:00.000000',
  published: true,
  title: { en: 'SUPER TROFEO NORTH AMERICA 2019', ru: 'SUPER TROFEO NORTH AMERICA 2019' },
  place: { en: 'ROUND 5: LAGUNA SECA', ru: 'РАУНД 5: ЛАГУНА СЕКА' },
  owner: {
    created: '2020-03-06',
    email: 'ivan@dorin.ru',
    phone: '9231002020',
    id: 1,
    username: 'Ivan Dorin',
    updated: '2020-03-06'
  },
  image: {
    created: '2019-07-13 00:00:00.000000',
    description: null,
    owner: {
      created: '2020-03-06',
      email: 'ivan@dorin.ru',
      phone: '9231002020',
      id: 1,
      username: 'Ivan Dorin',
      updated: '2020-03-06'
    },
    published: true,
    src: '',
    title: null
  }
};
