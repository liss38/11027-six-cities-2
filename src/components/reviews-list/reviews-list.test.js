import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

it(`ReviewsList rendered correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={[
        {
          id: 1,
          name: `Alex`,
          avatarUrl: `img/avatar.svg`,
          rating: 0.9,
          date: `April 2019`,
          description: `Рейтинг. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5. Оценка округляется до ближайшего целого. Например, оценка 3.1 округляется до 3-х. Оценка 4.5 округляется до 5.`,
        },
        {
          id: 2,
          name: `John`,
          avatarUrl: `img/avatar.svg`,
          rating: 5,
          date: `April 2019`,
          description: `Дата отзыва в формате: Месяц Год. Например: April 2019`,
        },
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
