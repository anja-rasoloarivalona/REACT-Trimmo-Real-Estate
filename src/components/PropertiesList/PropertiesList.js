import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './PropertiesList.css';
import Property from './Property/Property';

class PropertiesList extends Component {
  render() {
      let myproperties = [...this.props.properties];    
      return (
          <div className={classes.PropertiesList}>
            {myproperties.map(item => {
                return <Property key={item.id}
                        price ={item.price}
                        title ={item.title}
                        numbBeds={item.numbBeds}
                        numbBaths={item.numbBaths}
                        numbGarage={item.numbGarage}
                        surface={item.surface}
                        fullAdress={item.fullAdress}
                        />}       
                )}
             </div>   )
          }
    }
 
const mapStateToProps = state => {
    return  {
        properties: state.products
    }
}

export default connect(mapStateToProps)(PropertiesList);