import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

it(`Map component is rendered`, () => {
  const div = global.document.createElement(`div`);

  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);

  const tree = renderer
    .create(<Map
      locations={[]}
      styleMode={`main`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
