import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { throttle } from 'throttle-debounce';

const center = [60.170672117, 24.941099882];

class TransportMap extends Component {

  render() {

    return (
      <Map
        center={center}
        zoom={17}
        onViewportChanged={() => this.updateData(this.refs.map.leafletElement.getBounds())}
        className="transport-map"
      >
        <TileLayer
          url="https://cdn.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
  
      </Map>
    );
  }
}


export default TransportMap;