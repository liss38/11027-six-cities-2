import React from 'react';
import PropTypes from 'prop-types';
import PlacesItem from '../places-item/places-item.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlaceCard: null,
    };
    this._styleModeMap = {
      offer: `near-places__list`,
      main: `cities__places-list tabs__content`,
    };
  }

  render() {
    const {
      offers,
      styleMode,
    } = this.props;

    const listStyleMode = this._styleModeMap[styleMode];

    const mappedOffers = offers.map((offer) => {
      const {id, title} = offer;

      return (
        <PlacesItem
          key={id + title}
          offer={offer}
          styleMode={styleMode}
          onPlaceCardHover={(placeCard) => {
            this.setState(() => ({
              activePlaceCard: placeCard,
            }));
          }}
        />
      );
    });

    return (
      <div className={`places__list ${listStyleMode}`}>
        {mappedOffers}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
  })).isRequired,
  styleMode: PropTypes.string.isRequired,
};

export default PlacesList;
