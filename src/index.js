import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';
import cities from './mocks/cities.js';

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
        cities={cities}
      />,
      document.querySelector(`#root`)
  );
};

init();
