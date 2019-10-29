import React from 'react';
import renderer from 'react-test-renderer';
import PlacesSorting from './places-sorting.jsx';

it(`PlacesSorting rendered correctly`, () => {
  const tree = renderer
    .create(<PlacesSorting />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
