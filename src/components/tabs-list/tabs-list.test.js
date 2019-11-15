import React from 'react';
import renderer from 'react-test-renderer';
import TabsList from './tabs-list.jsx';

it(`TabsList rendered correctly`, () => {
  const tree = renderer
    .create(<TabsList
      cities={[
        {
          id: 1,
          name: `Amsterdam`,
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10,
          },
        },
        {
          id: 2,
          name: `Cologne`,
          location: {
            latitude: 50.930779,
            longitude: 6.938399,
            zoom: 10,
          },
        },
      ]}
      activeCity={{
        id: 1,
        name: `Amsterdam`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
      }}
      onCityClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
