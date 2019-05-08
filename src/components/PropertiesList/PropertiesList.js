import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './PropertiesList.css';
import Property from './Property/Property';

import * as actionTYpes from '../../store/actions';

class PropertiesList extends Component {
  render() {
      let myproperties = [...this.props.properties];    
      return (
          <div className={classes.PropertiesList}>
            {myproperties.map(item => {
                return <Property key={item.id}
                        price ={item.info.price}
                        title ={item.title}
                        numbBeds={item.info.beds}
                        numbBaths={item.info.baths}
                        numbGarage={item.info.garage}
                        surface={item.info.surface}
                        id={item.id}
                        fullAddress={item.address.fullAddress}
                        requestedDetail={() => this.props.onRequestedId(item.id)}/>}       
                )}
             </div>   )
          }
    }
 
const mapStateToProps = state => {
    return  {
        properties: state.products,
        requestedProduct: state.requestedProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestedId: (item) => dispatch({type: actionTYpes.GET_ITEM, payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesList);