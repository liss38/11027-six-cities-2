import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';

const App = (props) => {
  const showOffer = () => {};

  return (
    <div className="page">
      <Header />
      <Main
        offers={props.offers}
        cities={props.cities}
        onPlaceCardClick={showOffer}
      />
    </div>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

export default App;
