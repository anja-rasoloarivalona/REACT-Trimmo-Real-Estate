import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './PropertiesList.css';
import Property from './Property/Property';

import * as actionTypes from '../../store/actions';

class PropertiesList extends Component {

    componentDidMount() {
        console.log( this.props.searchedProduct);
    }

    componentDidUpdate() {
        console.log( this.props.searchedProduct);
    }

  render() {

        let properties = this.props.properties;

        properties = properties.filter(item => {      
        if(this.props.searchedProduct.type == 'All types') {
                    return item.info.type !== ''
            } else {
                    return item.info.type == this.props.searchedProduct.type
                }    
        })



        properties = properties.filter(item => {
            if(this.props.searchedProduct.location == 'All locations') {
                return item.address.city !== ''
            } else {
                    return item.address.city == this.props.searchedProduct.location
 
            }
        })

        


        properties = properties.filter(item => {
            return item.info.baths > (this.props.searchedProduct.bath - 1)
        })


        properties = properties.filter(item => {
            return item.info.beds > (this.props.searchedProduct.bed - 1)
        })

        properties = properties.filter(item => {
            return item.info.price > this.props.searchedProduct.min 
        })

        properties = properties.filter(item => {
            return item.info.price < this.props.searchedProduct.max
        })




      return (
          <div className={classes.PropertiesList}>
            {properties.map(item => {
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
        requestedProduct: state.requestedProduct,
        searchedProduct: state.searchedProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestedId: (item) => dispatch({type: actionTypes.GET_ITEM, payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesList);