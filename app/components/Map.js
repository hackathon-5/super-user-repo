import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  
  componentDidMount() {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'vendr.na2jib93',
      accessToken: 'pk.eyJ1IjoidmVuZHIiLCJhIjoiNDZmMGMxZmNmNTg3ZTI3MzAwMTkyNTlkMzVkMDA0NjkifQ.OyzQOpupa80_dXnrrFUlcA'
    });
    this.renderMap();
  }

  componentDidUpdate() {
    this.renderMap();
  }

  render() {
    return <div style={{width: 333, height: 300}} ref="map"></div>;
  }

  renderMap() {
    L.map(React.findDOMNode(this.refs.map)).setView([51.505, -0.09], 13);
  }

}

export default Map;
