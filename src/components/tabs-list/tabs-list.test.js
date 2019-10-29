import React from 'react';
import renderer from 'react-test-renderer';
import TabsList from './tabs-list.jsx';

it(`TabsList rendered correctly`, () => {
  const tree = renderer
    .create(<TabsList
      cities={[
        {
          name: `Moscow`,
        },
        {
          name: `San-Domingo`,
        },
      ]}
      activeCity={{
        name: `Moscow`,
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
