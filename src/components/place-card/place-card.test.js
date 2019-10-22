import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

it(`Componnets PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      title={`Beautiful &amp; luxurious apartment at great location`}
      type={`apartment`}
      previewImage={`img/apartment-01.jpg`}
      price={50}
      rating={4.2}
      isPremium={true}
      isFavorite={false}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
