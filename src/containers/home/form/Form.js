import React, { Component } from 'react';
import classes from './Form.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

import { Link } from 'react-router-dom';

 class Form extends Component {

  render() {

    let price = [
        0,
        25000,
        50000,
        75000,
        100000,
        200000,
        500000,
        1000000,
        3000000,
        5000000,
        10000000
    ];

    let max = this.props.searchedProduct.max;
    let min = this.props.searchedProduct.min;

    return (

      <form className={classes.Form}>

        {/*<div className={classes.Location + ' ' + classes.Input}>*/}  
        <h1 className={classes.Title}>Find your dream home</h1>
        
        <div className={classes.Input}>
            <label htmlFor={classes.Location}>Location</label>
            <select className={classes.InputField}
                    value={this.props.searchedProduct.location}
                    onChange={ (val) => {this.props.onRequestLocation(val.target.value)}}>
                <option>All locations</option>
                <option>Montreal</option>
                <option>Quebec</option>
                <option>Ottawa</option>
            </select>
        </div>

        <div className={classes.Input}>
            <label htmlFor={classes.Type}>Types</label>
            <select className={classes.InputField}
                    value={this.props.searchedProduct.type}
                    onChange={ (val) => {this.props.onRequestType(val.target.value)}}>    
                <option>All types</option>
                <option>House</option>
                <option>Appartment</option>
                <option>Condo</option>
            </select>
        </div>

        <div className={classes.Input}>
            <label htmlFor={classes.Min}>Min</label>
            <select className={classes.InputField} 
                                value={this.props.searchedProduct.min}
                                onChange={(val) => this.props.onRequestMin(val.target.value)}>   

                        { price.map(item => {
                            if(item <= max) {
                                return ( <option value={item}>{item.toLocaleString()}</option>)
                            } else {
                                return null
                            }       
                        })}  
            </select>
        </div>
        

        <div className={classes.Input + ' ' + classes.Max}>
            <label htmlFor={classes.Max}>Max</label>
            <select className={classes.InputField} 
                                value={this.props.searchedProduct.max}
                                onChange={(val) => this.props.onRequestMax(val.target.value)}>   
                        {
                            price.map(item => {
                                if(item >= min) {
                                    return ( <option value={item}>{item.toLocaleString()}</option>)
                                } else {
                                    return null;
                                }                               
                            })
                        }       
            </select>
        </div>

        <div className={classes.Input + ' ' + classes.Bathroom}>
            <label htmlFor={classes.Bathroom}>Bathrooms</label>
            <select className={classes.InputField}
                    value={this.props.searchedProduct.bath}
                    onChange={ (val) => {this.props.onRequestBath(val.target.value)}}>          
                <option value={1}>+1</option>
                <option value={2}>+2</option>
                <option value={3}>+3</option>
            </select>
        </div>
        

        <div className={classes.Input + ' ' + classes.Bedroom}>
            <label htmlFor={classes.Bedroom}>Bedrooms</label>
            <select className={classes.InputField}
                    value={this.props.searchedProduct.bed}
                    onChange={ (val) => {this.props.onRequestBed(val.target.value)}}>          
                <option value={1}>+1</option>
                <option value={2}>+2</option>
                <option value={3}>+3</option>
            </select>
        </div>

        <Link to='/properties' className={classes.Search}>
            Search
        </Link>

      </form>
    )
  }
}

const mapStateToProps = state => {
    return  {
        searchedProduct : state.searchedProduct 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestType: (item) => dispatch({type: actionTypes.GET_ITEM_TYPE, payload: item}),
        onRequestLocation: (item) => dispatch({type: actionTypes.GET_ITEM_LOCATION, payload: item}),
        onRequestBath: (item) => dispatch({type: actionTypes.GET_ITEM_BATH, payload: item}),
        onRequestBed: (item) => dispatch({type: actionTypes.GET_ITEM_BED, payload: item}),
        onRequestMin: (item) => dispatch({type: actionTypes.GET_ITEM_MIN, payload: item}),
        onRequestMax: (item) => dispatch({type: actionTypes.GET_ITEM_MAX, payload: item})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);
