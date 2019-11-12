import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

configure({adapter: new Adapter()});
it(`Value of 'activePlaceCard' in State is changed after hover`, () => {
  const placesList = mount(<PlacesList
    offers={[
      {
        title: `Beautiful &amp; luxurious apartment at great location`,
        type: `apartment`,
        previewImage: `img/apartment-01.jpg`,
        price: 50,
        rating: 1.3,
        isPremium: false,
        isFavorite: false,
      },
    ]}
    styleMode={`main`}
  />);

  const placeItemWrapper = placesList.find(`.place-card`).first();
  placeItemWrapper.simulate(`mouseover`);

  expect(placesList.state().activePlaceCard).toStrictEqual({
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `apartment`,
    previewImage: `img/apartment-01.jpg`,
    price: 50,
    rating: 1.3,
    isPremium: false,
  });
});
