import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import placesList from '../../mocks/places-list.js';

it(`Components App renders correctly`, () => {
  const tree = renderer
    .create(<App placesList={placesList} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
