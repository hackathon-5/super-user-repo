import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  
  componentDidMount() {
    var map =  this.map = L.map(React.findDOMNode(this), {
      layers: [
        L.tileLayer('https://{s}.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          id: 'vendr.na2jib93',
          accessToken: 'pk.eyJ1IjoidmVuZHIiLCJhIjoiNDZmMGMxZmNmNTg3ZTI3MzAwMTkyNTlkMzVkMDA0NjkifQ.OyzQOpupa80_dXnrrFUlcA'
        })
      ]
    });

    map.setView([51.505, -0.09], 13);
  }

  render() {
    return <div id={this.props.id} className={this.props.className} style={{width: 333, height: 300}} />;
  }

}

export default Map;
