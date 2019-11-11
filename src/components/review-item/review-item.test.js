import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item.jsx';

it(`ReviewItem rendered correctly`, () => {
  const tree = renderer
    .create(<ReviewItem
      name={`John`}
      avatarUrl={`img/avatar.svg`}
      rating={5}
      date={`April 2019`}
      description={`Дата отзыва в формате: Месяц Год. Например: April 2019`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
