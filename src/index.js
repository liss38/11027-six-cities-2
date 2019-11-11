import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';
import cities from './mocks/cities.js';
import reviews from './mocks/reviews.js';

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
        cities={cities}
        reviews={reviews}
      />,
      document.querySelector(`#root`)
  );
};

init();
