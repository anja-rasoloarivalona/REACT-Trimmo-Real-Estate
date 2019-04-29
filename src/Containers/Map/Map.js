import React, { Component } from 'react';
import classes from './Map.css';
import { connect } from 'react-redux';

class Map extends Component {

  componentDidMount() {
    this.renderMap()
  };

  renderMap = () => {
      this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDRoF3AQcn0aoVUEHOUwoQnWlgf-m60GWs&callback=initMap")
      window.initMap = this.initMap;
  }

  initMap = () => {
   const map = new window.google.maps.Map(document.getElementById('map'),
        {
            center: {lat: 45.50884, lng: -73.58781},
            zoom: 12
        });

        let markerInfos = [...this.props.products];

        markerInfos.map(item => {      
          return (
            new window.google.maps.Marker({
              position: {lat: item.lat, lng: item.lng},
              map: map
              })
          )

        })

        


    }

    loadScript = (url) => {
        let index = window.document.getElementsByTagName("script")[0];
        let script = window.document.createElement("script");
        script.src = url
        script.async = true;
        script.defer = true;
        index.parentNode.insertBefore(script, index);
    }


  render() {
    return (
        <section>
            <div id="map" className={classes.Map}></div>
        </section>
    )
  }

};

const mapStateToProps = state => {
  return {
    products: state.products
  }
}


export default connect(mapStateToProps)(Map);














