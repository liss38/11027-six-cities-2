import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';
import TabsList from '../tabs-list/tabs-list.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import GeoMap from '../geo-map/geo-map.jsx';

const Main = (props) => {
  const {
    offers,
    cities,
    activeCity,
    onCityClick,
  } = props;

  const offersCount = offers.length;
  const cityName = activeCity.name;
  const locations = offers.map((offer) => [offer.location.latitude, offer.location.longitude]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <TabsList
        cities={cities}
        activeCity={activeCity}
        onCityClick={onCityClick}
      />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in {cityName}</b>
            <PlacesSorting />
            <PlacesList
              offers={offers}
              styleMode={`main`}
            />
          </section>
          <div className="cities__right-section">
            <GeoMap
              city={activeCity}
              locations={locations}
              styleMode={`main`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  activeCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default Main;
