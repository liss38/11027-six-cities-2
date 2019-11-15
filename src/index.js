import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import {reducer} from './reducer.js';

import App from './components/app/app.jsx';
import cities from './mocks/cities.js';
import reviews from './mocks/reviews.js';

const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App
          cities={cities}
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
