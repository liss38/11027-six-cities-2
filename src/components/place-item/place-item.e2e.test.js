import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceItem from './place-item.jsx';

configure({adapter: new Adapter()});

it(`Place card on image click`, () => {
  const onPlaceCardClick = jest.fn();
  const onPlaceCardHover = jest.fn();
  const placeItem = shallow(<PlaceItem
    title={`Beautiful &amp; luxurious apartment at great location`}
    type={`apartment`}
    previewImage={`img/apartment-01.jpg`}
    price={50}
    rating={4.2}
    isPremium={true}
    isFavorite={false}
    onPlaceCardClick={onPlaceCardClick}
    onPlaceCardHover={onPlaceCardHover}
  />);

  const placeItemImage = placeItem.find(`.place-card__image-wrapper > a`);
  placeItemImage.simulate(`click`);

  expect(onPlaceCardClick).toHaveBeenCalledTimes(1);
});

it(`Place card on title click`, () => {
  const onPlaceCardClick = jest.fn();
  const onPlaceCardHover = jest.fn();
  const placeItem = shallow(<PlaceItem
    title={`Beautiful &amp; luxurious apartment at great location`}
    type={`apartment`}
    previewImage={`img/apartment-01.jpg`}
    price={50}
    rating={4.2}
    isPremium={true}
    isFavorite={false}
    onPlaceCardClick={onPlaceCardClick}
    onPlaceCardHover={onPlaceCardHover}
  />);

  const placeItemTitle = placeItem.find(`.place-card__name > a`);
  placeItemTitle.simulate(`click`);

  expect(onPlaceCardClick).toHaveBeenCalledTimes(1);
});

it(`Place card on hover`, () => {
  const onPlaceCardHover = jest.fn();
  const onPlaceCardClick = jest.fn();
  const placeItem = shallow(<PlaceItem
    title={`Beautiful &amp; luxurious apartment at great location`}
    type={`apartment`}
    previewImage={`img/apartment-01.jpg`}
    price={50}
    rating={4.2}
    isPremium={true}
    isFavorite={false}
    onPlaceCardClick={onPlaceCardClick}
    onPlaceCardHover={onPlaceCardHover}
  />);

  const placeItemWrapper = placeItem.find(`.cities__place-card.place-card`);
  placeItemWrapper.simulate(`mouseover`);

  expect(onPlaceCardHover).toHaveBeenCalledWith({
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `apartment`,
    previewImage: `img/apartment-01.jpg`,
    price: 50,
    rating: 4.2,
    isPremium: true,
  });
});
