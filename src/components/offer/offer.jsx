import React from 'react';
import PropTypes from 'prop-types';
import OfferGallery from '../offer-gallery/offer-gallery.jsx';
import OfferDescription from '../offer-description/offer-description.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import GeoMap from '../geo-map/geo-map.jsx';
import PlacesList from '../places-list/places-list.jsx';

const Offer = ({offer, reviews, relevantOffers}) => {
  const {images, city} = offer;

  const relevantLocations = relevantOffers.map((relevantOffer) => [relevantOffer.location.latitude, relevantOffer.location.longitude]);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <OfferGallery
          images={images}
        />
        <div className="property__container container">
          <div className="property__wrapper">
            <OfferDescription
              offer={offer}
            />
          </div>
          <div className="property__wrapper">
            <ReviewsList
              reviews={reviews}
            />
          </div>
        </div>
        <GeoMap
          city={city}
          locations={relevantLocations}
          styleMode={`offer`}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList
            offers={relevantOffers}
            styleMode={`offer`}
          />
        </section>
      </div>
    </main>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      isSuper: PropTypes.bool,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string),
    maxAdults: PropTypes.number,
    bedrooms: PropTypes.number,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  relevantOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};

export default Offer;
