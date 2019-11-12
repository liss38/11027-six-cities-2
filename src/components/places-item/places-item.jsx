import React from 'react';
import PropTypes from 'prop-types';

const PlacesItem = ({offer, styleMode, onPlaceCardHover}) => {
  const styleModeMap = {
    offer: {
      cardWrapper: `near-places__card`,
      imageWrapper: `near-places__image-wrapper`,
    },
    main: {
      cardWrapper: `cities__place-card`,
      imageWrapper: `cities__image-wrapper`,
    },
  };

  const {
    title,
    type,
    previewImage,
    price,
    rating,
    isPremium,
  } = offer;

  const {cardWrapper: styleCardWrapper, imageWrapper: styleImageWrapper} = styleModeMap[styleMode];

  const handlePlaceCardMouseOver = () => {
    onPlaceCardHover({title, type, previewImage, price, rating, isPremium});
  };

  return (
    <article className={`${styleCardWrapper} place-card`} onMouseOver={handlePlaceCardMouseOver}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${styleImageWrapper} place-card__image-wrapper`}>
        <a href={`/offer`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {/* <use xlink:href="#icon-bookmark"></use>*/}
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (rating / 5 * 100) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlacesItem.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
  }).isRequired,
  styleMode: PropTypes.string.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
};

export default PlacesItem;
