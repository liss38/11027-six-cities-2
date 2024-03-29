const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      }
    },
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `apartment`,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    price: 50,
    rating: 4.5,
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    host: {
      id: 3,
      isSuper: true,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    maxAdults: 14,
    bedrooms: 5,
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      }
    },
    title: `Wood and stone place`,
    type: `apartment`,
    previewImage: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    price: 300,
    rating: 1.3,
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    host: {
      id: 3,
      isSuper: true,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    maxAdults: 4,
    bedrooms: 3,
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      }
    },
    title: `Canal View Prinsengracht`,
    type: `apartment`,
    previewImage: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    price: 100,
    rating: 2.5,
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    host: {
      id: 3,
      isSuper: true,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    maxAdults: 4,
    bedrooms: 3,
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      }
    },
    title: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    previewImage: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    price: 180,
    rating: 3.1,
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    host: {
      id: 3,
      isSuper: true,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    maxAdults: 4,
    bedrooms: 3,
  },
  {
    id: 5,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      }
    },
    title: `Wood and stone place`,
    type: `apartment`,
    previewImage: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    price: 1080,
    rating: 4.3,
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    host: {
      id: 3,
      isSuper: false,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    maxAdults: 4,
    bedrooms: 3,
  },
];

export default offers;
