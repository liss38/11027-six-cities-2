import React from 'react';
import PropTypes from 'prop-types';

const OfferDescription = ({offer}) => {
  const {
    isPremium,
    title,
    rating,
    price,
    host,
    description,
    goods,
    maxAdults,
    bedrooms,
  } = offer;

  const {
    isSuper,
    name,
    avatarUrl,
  } = host;

  return (
    <React.Fragment>
      {
        isPremium && <div className="property__mark">
          <span>Premium</span>
        </div>
      }
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            {/* <use xlink:href="#icon-bookmark"></use>*/}
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: (rating / 5 * 100) + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          Entire place
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((good) => (
            <li className="property__inside-item" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className={`property__avatar-wrapper ${isSuper && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
            <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
          </div>
          <span className="property__user-name">
            {name}
          </span>
          {isSuper && <span className="property__user-status">
            Pro
          </span>}
        </div>
        <div className="property__description">
          <p className="property__text">
            {description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

OfferDescription.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    price: PropTypes.number,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    host: PropTypes.shape({
      isSuper: PropTypes.bool,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    maxAdults: PropTypes.number,
    bedrooms: PropTypes.number,
  }).isRequired,
};

export default OfferDescription;
