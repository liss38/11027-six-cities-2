import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  return <Main
    placesList={props.placesList}
  />;
};

App.propTypes = {
  placesList: PropTypes.array
};

export default App;
