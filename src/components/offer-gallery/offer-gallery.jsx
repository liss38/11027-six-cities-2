import React from 'react';
import PropTypes from 'prop-types';

const OfferGallery = (props) => {
  const {images} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => (
          <div className="property__image-wrapper" key={i + image}>
            <img className="property__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

OfferGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default OfferGallery;
