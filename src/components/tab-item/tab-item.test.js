import React from 'react';
import renderer from 'react-test-renderer';
import TabItem from './tab-item.jsx';

it(`Active 'TabItem' rendered correctly`, () => {
  const tree = renderer
    .create(<TabItem
      name={`Moscow`}
      isActive={true}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Not active 'TabItem' rendered correctly`, () => {
  const tree = renderer
    .create(<TabItem
      name={`Vladivostok`}
      isActive={false}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
