import React from 'react';
import PropTypes from 'prop-types';

const PlaceItem = (props) => {
  const {title, type, previewImage, price, rating, isPremium, onPlaceCardClick, onPlaceCardHover} = props;

  const handlePlaceCardMouseOver = () => {
    onPlaceCardHover({title, type, previewImage, price, rating, isPremium});
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={handlePlaceCardMouseOver}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={onPlaceCardClick}>
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
          <a href="#" onClick={onPlaceCardClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceItem.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  isPremium: PropTypes.bool,
  onPlaceCardClick: PropTypes.func.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
};

export default PlaceItem;
