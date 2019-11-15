import {ActionCreator, reducer, initialState} from './reducer';
import {offers} from './mocks/offers.js';

const mockAllOffers = [
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
    id: 6,
    city: {
      name: `Cologne`,
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
      latitude: 50.931548,
      longitude: 6.950483,
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

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should set active city by given value`, () => {
    expect(reducer(initialState, {
      type: `SET_ACTIVE_CITY`,
      payload: {
        id: 2,
        name: `Cologne`,
        location: {
          latitude: 50.930779,
          longitude: 6.938399,
          zoom: 10,
        },
      },
    })).toEqual(Object.assign({}, initialState, {
      activeCity: {
        id: 2,
        name: `Cologne`,
        location: {
          latitude: 50.930779,
          longitude: 6.938399,
          zoom: 10,
        },
      },
    }));
  });

  it(`Reducer should set active city by given value`, () => {
    expect(reducer(initialState, {
      type: `SET_OFFERS`,
      payload: offers
    })).toEqual(Object.assign({}, initialState, {offers}));
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`-> setActiveCity`, () => {
    expect(ActionCreator.setActiveCity({
      id: 2,
      name: `Cologne`,
      location: {
        latitude: 50.930779,
        longitude: 6.938399,
        zoom: 10,
      },
    })).toEqual({
      type: `SET_ACTIVE_CITY`,
      payload: {
        id: 2,
        name: `Cologne`,
        location: {
          latitude: 50.930779,
          longitude: 6.938399,
          zoom: 10,
        },
      }
    });
  });

  it(`-> setOffers`, () => {
    const activeCity = {
      id: 2,
      name: `Cologne`,
      location: {
        latitude: 50.930779,
        longitude: 6.938399,
        zoom: 10,
      },
    };

    expect(ActionCreator.setOffers(activeCity, mockAllOffers)).toEqual({
      type: `SET_OFFERS`,
      payload: [
        {
          id: 6,
          city: {
            name: `Cologne`,
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
            latitude: 50.931548,
            longitude: 6.950483,
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
      ],
    });
  });
});
