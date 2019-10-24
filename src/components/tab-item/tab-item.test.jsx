import React from 'react';
import renderer from 'react-test-renderer';
import TabItem from './tab-item.jsx';

it(`TabItem rendered correctly`, () => {
  const tree = renderer
    .create(<TabItem
      key={`Moscow-0}`}
      name={`Moscow`}
      isActive={true}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
