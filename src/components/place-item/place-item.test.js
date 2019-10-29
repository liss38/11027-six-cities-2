import React from 'react';
import renderer from 'react-test-renderer';
import PlaceItem from './place-item.jsx';

it(`Componnets PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<PlaceItem
      title={`Beautiful &amp; luxurious apartment at great location`}
      type={`apartment`}
      previewImage={`img/apartment-01.jpg`}
      price={50}
      rating={4.2}
      isPremium={true}
      isFavorite={false}
      onPlaceCardClick={jest.fn()}
      onPlaceCardHover={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
