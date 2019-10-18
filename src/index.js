import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const placesList = [
    {
      id: 1,
      name: `Beautiful &amp; luxurious apartment at great location`,
      type: `Apartment`,
      image: `img/apartment-01.jpg`,
      priceValue: 180,
      priceText: `night`,
      rating: 93,
      mark: `Premium`,
    },
    {
      id: 2,
      name: `Wood and stone place`,
      type: `Apartment`,
      image: `img/room.jpg`,
      priceValue: 180,
      priceText: `night`,
      rating: 93,
      mark: `Premium`,
    },
    {
      id: 3,
      name: `Canal View Prinsengracht`,
      type: `Apartment`,
      image: `img/apartment-02.jpg`,
      priceValue: 180,
      priceText: `night`,
      rating: 93,
      mark: `Premium`,
    },
    {
      id: 4,
      name: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      image: `img/apartment-03.jpg`,
      priceValue: 180,
      priceText: `night`,
      rating: 93,
      mark: `Premium`,
    },
    {
      id: 5,
      name: `Wood and stone place`,
      type: `Apartment`,
      image: `img/room.jpg`,
      priceValue: 180,
      priceText: `night`,
      rating: 93,
      mark: `Premium`,
    },
  ];

  ReactDOM.render(
      <App
        placesList={placesList}
      />,
      document.querySelector(`#root`)
  );
};

init();
