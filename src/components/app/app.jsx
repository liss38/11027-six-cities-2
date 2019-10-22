import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const showOffer = () => {};

  return <Main
    placesList={props.placesList}
    onPlaceCardClick={showOffer}
  />;
};

App.propTypes = {
  placesList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
  })).isRequired,
};

export default App;
