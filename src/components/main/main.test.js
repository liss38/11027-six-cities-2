import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Components Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
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
      cities={[
        {
          name: `New-York`,
        },
        {
          name: `Tokyo`,
        },
      ]}
      onPlaceCardClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
