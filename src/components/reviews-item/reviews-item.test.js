import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item.jsx';

it(`ReviewsItem rendered correctly`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={{
        name: `Lena`,
        avatarUrl: `img/avatar.svg`,
        rating: 4.2,
        date: `April 2019`,
        description: `Текст отзыва`,
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
