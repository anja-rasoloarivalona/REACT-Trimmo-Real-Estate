import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = compose(

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDRoF3AQcn0aoVUEHOUwoQnWlgf-m60GWs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, margin: `50px`}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
) ((props) =>

  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 45.50884, lng: -73.58781 }}>

            <Marker position={{ lat: 45.50884, lng: -73.58781 }} isMarkerShown={props.isMarkerShown} onClick={props.onMarkerClick} />
            <Marker position={{ lat: 45.538207, lng:  -73.637691 }} isMarkerShown={props.isMarkerShown} onClick={props.onMarkerClick} />
            <Marker position={{ lat: 45.538207, lng:  -73.537691 }} isMarkerShown={props.isMarkerShown} onClick={props.onMarkerClick} />

  </GoogleMap>
)


export default Map;

