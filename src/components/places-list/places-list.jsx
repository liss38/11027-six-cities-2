import React from 'react';
import PropTypes from 'prop-types';
import PlaceItem from '../place-item/place-item.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlaceCard: null,
    };
  }

  render() {
    const {
      offers,
      onPlaceCardClick,
    } = this.props;

    const mappedOffers = offers.map((offer) => {
      const {id, title, type, preview_image: previewImage, price, rating, is_premium: isPremium, is_favorite: isFavorite} = offer;

      return (
        <PlaceItem
          key={id + title}
          title={title}
          type={type}
          previewImage={previewImage}
          price={price}
          rating={rating}
          isPremium={isPremium}
          isFavorite={isFavorite}
          onPlaceCardClick={onPlaceCardClick}
          onPlaceCardHover={(placeCard) => {
            this.setState(() => ({
              activePlaceCard: placeCard,
            }));
          }}
        />
      );
    });

    return (
      <div className="cities__places-list places__list tabs__content">
        {mappedOffers}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
  })).isRequired,
  onPlaceCardClick: PropTypes.func,
};

export default PlacesList;
