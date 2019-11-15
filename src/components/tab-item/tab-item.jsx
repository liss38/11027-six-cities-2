import React from 'react';
import PropTypes from 'prop-types';

const TabItem = (props) => {
  const {
    city,
    onCityClick,
    isActive,
  } = props;

  const {
    name,
  } = city;

  let activeClass = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeClass}`}
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          onCityClick(city);
        }}
      >
        <span>{name}</span>
      </a>
    </li>
  );
};

TabItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default TabItem;
