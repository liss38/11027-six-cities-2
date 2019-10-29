import React from 'react';
import PropTypes from 'prop-types';

const TabItem = (props) => {
  const {
    name,
    isActive,
  } = props;

  let activeClass = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClass}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
};

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TabItem;
