import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

configure({adapter: new Adapter()});

it(`Place card on image click`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    title={`Beautiful &amp; luxurious apartment at great location`}
    type={`apartment`}
    previewImage={`img/apartment-01.jpg`}
    price={50}
    rating={4.2}
    isPremium={true}
    isFavorite={false}
    onPlaceCardClick={clickHandler}
  />);

  const placeCardImage = placeCard.find(`.place-card__image-wrapper > a`);
  placeCardImage.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`Place card on title click`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    title={`Beautiful &amp; luxurious apartment at great location`}
    type={`apartment`}
    previewImage={`img/apartment-01.jpg`}
    price={50}
    rating={4.2}
    isPremium={true}
    isFavorite={false}
    onPlaceCardClick={clickHandler}
  />);

  const placeCardTitle = placeCard.find(`.place-card__name > a`);
  placeCardTitle.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
