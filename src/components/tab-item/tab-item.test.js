import React from 'react';
import renderer from 'react-test-renderer';
import TabItem from './tab-item.jsx';

it(`Active 'TabItem' rendered correctly`, () => {
  const tree = renderer
    .create(<TabItem
      city={{
        id: 3,
        name: `Brussels`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
      }}
      isActive={true}
      onCityClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Not active 'TabItem' rendered correctly`, () => {
  const tree = renderer
    .create(<TabItem
      city={{
        id: 4,
        name: `Hamburg`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
      }}
      isActive={false}
      onCityClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
