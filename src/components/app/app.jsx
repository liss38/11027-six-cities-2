import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';

const getPageScreen = (offers, cities, reviews) => {
  switch (location.pathname) {
    case `/`: return <Main
      offers={offers}
      cities={cities}
      onPlaceCardClick={() => {}}
    />;
    case `/offer`: return <Offer
      offer={offers[0]}
      reviews={reviews}
    />;
  }

  return null;
};

const App = (props) => {
  const {offers, cities, reviews} = props;
  return (
    <div className="page">
      <Header />
      {getPageScreen(offers, cities, reviews)}
    </div>
  );
};

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
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};

export default App;
