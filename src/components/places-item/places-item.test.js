import React from 'react';
import renderer from 'react-test-renderer';
import PlacesItem from './places-item.jsx';

it(`PlacesItem renders correctly, styleMode=main`, () => {
  const tree = renderer
    .create(<PlacesItem
      offer={{
        title: `Beautiful &amp; luxurious apartment at great location`,
        type: `apartment`,
        previewImage: `img/apartment-01.jpg`,
        price: 50,
        rating: 4.5,
        isPremium: true,
        isFavorite: false,
      }}
      styleMode={`main`}
      onPlaceCardHover={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`PlacesItem renders correctly, styleMode=offer`, () => {
  const tree = renderer
    .create(<PlacesItem
      offer={{
        title: `Beautiful &amp; luxurious apartment at great location`,
        type: `apartment`,
        previewImage: `img/apartment-01.jpg`,
        price: 50,
        rating: 4.5,
        isPremium: true,
        isFavorite: false,
      }}
      styleMode={`offer`}
      onPlaceCardHover={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
