import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';

const getPageScreen = (props) => {
  const {offers} = props;
  switch (location.pathname) {
    case `/`: return <Main
      offers={props.offers}
      cities={props.cities}
      onPlaceCardClick={() => {}}
    />;
    case `/offer`: return <Offer offer={offers[0]} />;
  }

  return null;
};

const App = (props) => {
  return (
    <div className="page">
      <Header />
      {getPageScreen(props)}
    </div>
  );
};

getPageScreen.propTypes = {
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
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
