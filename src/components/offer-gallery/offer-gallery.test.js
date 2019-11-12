import React from 'react';
import renderer from 'react-test-renderer';
import OfferGallery from './offer-gallery.jsx';

it(`OfferGallery rendered correctly`, () => {
  const tree = renderer
    .create(<OfferGallery
      images={[`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
