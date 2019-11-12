import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Components Main renders correctly`, () => {
  const div = global.document.createElement(`div`);

  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);

  const tree = renderer
    .create(<Main
      offers={[
        {
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.370216,
              longitude: 4.895168,
              zoom: 10,
            }
          },
          title: `Beautiful &amp; luxurious apartment at great location`,
          type: `apartment`,
          previewImage: `img/apartment-01.jpg`,
          price: 50,
          rating: 4.2,
          isPremium: true,
          isFavorite: false,
          location: {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198,
            zoom: 8,
          },
        },
        {
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.370216,
              longitude: 4.895168,
              zoom: 10,
            }
          },
          title: `Wood and stone place`,
          type: `apartment`,
          previewImage: `img/room.jpg`,
          price: 300,
          rating: 1.3,
          isPremium: false,
          isFavorite: false,
          location: {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198,
            zoom: 8,
          },
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
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
