import React from 'react';
import renderer from 'react-test-renderer';
import OfferDescription from './offer-description.jsx';

it(`OfferDescription rendered correctly`, () => {
  const tree = renderer
    .create(<OfferDescription
      offer={{
        title: `Beautiful &amp; luxurious apartment at great location`,
        type: `apartment`,
        price: 50,
        rating: 4.5,
        isPremium: true,
        isFavorite: false,
        host: {
          isSuper: true,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        maxAdults: 14,
        bedrooms: 5,
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
