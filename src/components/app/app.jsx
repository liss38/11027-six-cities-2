import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import {ActionCreator} from '../../reducer.js';
import {connect} from 'react-redux';

const getPageScreen = (offers, cities, reviews, onCityClick, allOffers, activeCity) => {
  const currentOffer = offers[0];
  const relevantOffers = offers.filter((offer) => offer.id !== currentOffer.id);

  switch (location.pathname) {
    case `/`: return <Main
      offers={offers}
      cities={cities}
      activeCity={activeCity}
      onCityClick={(city) => {
        onCityClick(city, allOffers);
      }}
    />;
    case `/offer`: return <Offer
      offer={currentOffer}
      reviews={reviews}
      relevantOffers={relevantOffers}
    />;
  }

  return null;
};

const App = (props) => {
  const {
    offers,
    cities,
    reviews,
    onCityClick,
    allOffers,
    activeCity
  } = props;
  return (
    <div className="page">
      <Header />
      {getPageScreen(offers, cities, reviews, onCityClick, allOffers, activeCity)}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: state.activeCity,
  offers: state.offers,
  allOffers: state.allOffers,
});


const mapDispatchToProps = (dispatch) => ({
  onCityClick: (activeCity, allOffers) => {
    dispatch(ActionCreator.setActiveCity(activeCity));
    dispatch(ActionCreator.setOffers(activeCity, allOffers));
  },
});

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      isSuper: PropTypes.bool,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string),
    maxAdults: PropTypes.number,
    bedrooms: PropTypes.number,
  })).isRequired,
  allOffers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      isSuper: PropTypes.bool,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string),
    maxAdults: PropTypes.number,
    bedrooms: PropTypes.number,
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  onCityClick: PropTypes.func,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  activeCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
