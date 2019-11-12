import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';

it(`Offer component is rendered`, () => {
  const div = global.document.createElement(`div`);

  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);

  const tree = renderer
    .create(<Offer
      offer={{
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10,
          }
        },
        title: `Beautiful &amp; luxurious apartment at great location`,
        type: `apartment`,
        previewImage: `img/apartment-01.jpg`,
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
        price: 50,
        rating: 4.5,
        isPremium: true,
        isFavorite: false,
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 8,
        },
        host: {
          id: 3,
          isSuper: true,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        maxAdults: 4,
        bedrooms: 3,
      }}
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
      relevantOffers={[
        {
          id: 2,
          title: `Wood and stone place`,
          type: `apartment`,
          previewImage: `img/room.jpg`,
          price: 300,
          rating: 1.3,
          isPremium: false,
          isFavorite: false,
          location: {
            latitude: 52.369553943508,
            longitude: 4.85309666406198,
            zoom: 8,
          },
        },
        {
          id: 3,
          title: `Canal View Prinsengracht`,
          type: `apartment`,
          previewImage: `img/apartment-02.jpg`,
          price: 100,
          rating: 2.5,
          isPremium: false,
          isFavorite: false,
          location: {
            latitude: 52.3909553943508,
            longitude: 4.929309666406198,
            zoom: 8,
          },
        },
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
