import React from 'react';
import PropTypes from 'prop-types';
import TabItem from '../tab-item/tab-item.jsx';

const TabsList = (props) => {
  const {
    cities,
    current,
  } = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city, i) => <TabItem
              key={`${city.name}-${i}`}
              name={city.name}
              isActive={city.name === current}
            />)
          }
        </ul>
      </section>
    </div>
  );
};

TabsList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  current: PropTypes.string.isRequired,
};

export default TabsList;
