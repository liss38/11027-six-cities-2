import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

it(`PlacesList rendered correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={[
        {
          title: `Beautiful &amp; luxurious apartment at great location`,
          type: `apartment`,
          previewImage: `img/apartment-01.jpg`,
          price: 50,
          rating: 4.2,
          isPremium: true,
          isFavorite: false,
        },
        {
          title: `Wood and stone place`,
          type: `apartment`,
          previewImage: `img/room.jpg`,
          price: 300,
          rating: 1.3,
          isPremium: false,
          isFavorite: false,
        },
      ]}
      onPlaceCardClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
