import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesItem from './places-item.jsx';

configure({adapter: new Adapter()});

it(`Place card on hover, styleMode=main`, () => {
  const onPlaceCardHover = jest.fn();
  const placesItem = shallow(<PlacesItem
    offer={{
      title: `Beautiful &amp; luxurious apartment at great location`,
      type: `apartment`,
      previewImage: `img/apartment-01.jpg`,
      price: 50,
      rating: 4.5,
      isPremium: true,
      isFavorite: false,
    }}
    styleMode={`main`}
    onPlaceCardHover={onPlaceCardHover}
  />);

  const placesItemWrapper = placesItem.find(`.cities__place-card.place-card`);
  placesItemWrapper.simulate(`mouseover`);

  expect(onPlaceCardHover).toHaveBeenCalledWith({
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `apartment`,
    previewImage: `img/apartment-01.jpg`,
    price: 50,
    rating: 4.5,
    isPremium: true,
  });
});
