import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

configure({adapter: new Adapter()});
it(`Value of 'activePlaceCard' in State is changed after hover`, () => {
  const placesList = shallow(<PlacesList
    offers={[
      {
        "title": `Wood and stone place`,
        "type": `apartment`,
        "preview_image": `img/room.jpg`,
        "price": 300,
        "rating": 1.3,
        "is_premium": false,
        "is_favorite": false,
      },
    ]}
    onPlaceCardClick={jest.fn()}
  />);

  const placeItemWrapper = placesList; // .find(`.place-card`); // .first();
  // placeItemWrapper.simulate(`mouseover`);
  expect(placeItemWrapper).toBe(`bla-bla`);

  /* expect(placesList.state().activePlaceCard).toBe({
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `apartment`,
    previewImage: `img/apartment-01.jpg`,
    price: 50,
    rating: 4.2,
    isPremium: true,
  });*/
});
