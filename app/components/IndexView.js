import React from 'react';
import Map from './Map';

class IndexView extends React.Component {
  render() {
    return (
      <div id="index-view">
        <input type="search" />
        <Map/>
      </div>
    );
  }
}

export default IndexView;
