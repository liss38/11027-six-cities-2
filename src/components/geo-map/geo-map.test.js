import React from 'react';
import renderer from 'react-test-renderer';
import GeoMap from './geo-map.jsx';

it(`Map component is rendered`, () => {
  const div = global.document.createElement(`div`);

  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);

  const tree = renderer
    .create(<GeoMap
      city={{
        id: 5,
        name: `Dusseldorf`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        }
      }}
      locations={[]}
      styleMode={`main`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
