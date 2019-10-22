import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import placesList from './mocks/places-list.js';

const init = () => {
  ReactDOM.render(
      <App
        placesList={placesList}
      />,
      document.querySelector(`#root`)
  );
};

init();
