import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import placesList from '../../mocks/places-list.js';

it(`Components Main renders correctly`, () => {
  const tree = renderer
    .create(<Main placesList={placesList} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
