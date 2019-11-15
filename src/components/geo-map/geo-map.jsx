import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class GeoMap extends PureComponent {
  constructor(props) {
    super(props);

    const {city} = props;

    this._styleModeGeoMap = {
      offer: `property__map map`,
      main: `cities__map map`,
    };

    this._geoMapSettings = {
      cityCoords: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
      icon: leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30],
      }),
    };
  }

  componentDidMount() {
    this._setGeoMapContainer();
    this._setGeoMapCenter();
    this._setGeoMapPoints();
  }

  componentDidUpdate() {
    this._setGeoMapCenter();
    this._setGeoMapPoints();
  }

  _setGeoMapContainer() {
    const {cityCoords, zoom} = this._geoMapSettings;

    this._geoMapContainer = leaflet.map(`map`, {
      center: cityCoords,
      zoom,
      zoomControl: false,
      marker: true,
    });
  }

  _setGeoMapCenter() {
    const {city} = this.props;

    this._geoMapSettings.center = [city.location.latitude, city.location.longitude];
    this._geoMapSettings.zoom = city.location.zoom;
    this._geoMapContainer.setView([city.location.latitude, city.location.longitude], city.location.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(this._geoMapContainer);
  }

  _setGeoMapPoints() {
    const {locations} = this.props;
    locations.forEach((location) => leaflet.marker(location, {icon: this._geoMapSettings.icon}).addTo(this._geoMapContainer));
  }

  render() {
    const {styleMode} = this.props;
    const mapStyleMode = this._styleModeGeoMap[styleMode];

    return (
      <section id="map" className={mapStyleMode}></section>
    );
  }
}

GeoMap.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  locations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  styleMode: PropTypes.string.isRequired,
};

export default GeoMap;
