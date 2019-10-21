import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const placesList = [
    {
      id: 1,
      title: `Beautiful &amp; luxurious apartment at great location`,
      type: `apartment`,
      previewImage: `img/apartment-01.jpg`,
      price: 50,
      rating: 4.2,
      isPremium: true,
      isFavorite: false,
    },
    {
      id: 2,
      title: `Wood and stone place`,
      type: `apartment`,
      previewImage: `img/room.jpg`,
      price: 300,
      rating: 1.3,
      isPremium: false,
      isFavorite: false,
    },
    {
      id: 3,
      title: `Canal View Prinsengracht`,
      type: `apartment`,
      previewImage: `img/apartment-02.jpg`,
      price: 100,
      rating: 2.5,
      isPremium: false,
      isFavorite: false,
    },
    {
      id: 4,
      title: `Nice, cozy, warm big bed apartment`,
      type: `apartment`,
      previewImage: `img/apartment-03.jpg`,
      price: 180,
      rating: 3.1,
      isPremium: false,
      isFavorite: false,
    },
    {
      id: 5,
      title: `Wood and stone place`,
      type: `apartment`,
      previewImage: `img/room.jpg`,
      price: 1080,
      rating: 4.3,
      isPremium: false,
      isFavorite: false,
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
