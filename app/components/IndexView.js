import React from 'react';
import Map from './Map';

class IndexView extends React.Component {
  render() {
    return (
      <div id="index-view">
        <input id="snack-search" type="search" />
        <Map id="local-map"/>
      </div>
    );
  }
}

export default IndexView;
