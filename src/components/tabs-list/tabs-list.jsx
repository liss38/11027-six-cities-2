import React from 'react';
import PropTypes from 'prop-types';
import TabItem from '../tab-item/tab-item.jsx';

const TabsList = (props) => {
  const {
    cities,
    activeCity,
    onCityClick,
  } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => <TabItem
              key={`${city.name}-${city.id}`}
              isActive={city.name === activeCity.name}
              city={city}
              onCityClick={onCityClick}
            />)
          }
        </ul>
      </section>
    </div>
  );
};

TabsList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  activeCity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onCityClick: PropTypes.func.isRequred,
};

export default TabsList;
