import offers from './mocks/offers.js';
import cities from './mocks/cities.js';

const getOffersByCity = (activeCity, allOffers) => allOffers.filter((offer) => offer.city.name === activeCity.name);

const initialState = {
  activeCity: cities[0],
  offers: getOffersByCity(cities[0], offers),
  allOffers: offers,
};

const ActionCreator = {
  setActiveCity(city) {
    return {
      type: `SET_ACTIVE_CITY`,
      payload: city,
    };
  },

  setOffers(city, allOffers) {
    return {
      type: `SET_OFFERS`,
      payload: getOffersByCity(city, allOffers),
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_ACTIVE_CITY`: return Object.assign({}, state, {
      activeCity: action.payload,
    });

    case `SET_OFFERS`: return Object.assign({}, state, {
      offers: action.payload,
    });
  }

  return state;
};

export {
  ActionCreator,
  reducer,
  getOffersByCity,
  initialState,
};
