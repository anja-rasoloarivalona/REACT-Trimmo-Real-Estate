import React, { Component } from 'react';
import classes from './PropertiesForm.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import FormPrice from './FormPrice/FormPrice'

 class PropertiesForm extends Component {


  render() {
    return (

      <section className={classes.FormContainer}>

        {/*<div className={classes.Location + ' ' + classes.Input}>*/}  
        <h1 className={classes.Title}>Find your dream home</h1>
        

        <form className={classes.Form}>


            <section className={classes.FormGroup}>
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
                            <select 
                                className={classes.InputField}
                                value={this.props.searchedProduct.type}
                                onChange={ (val) => {this.props.onRequestType(val.target.value)}}>    
                                <option>All types</option>
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Condo</option>
                            </select>
                </div>
            </section>

             <FormPrice />

            <section className={classes.FormGroup}>
                    <div className={classes.Input}>
                            <label htmlFor={classes.Bathroom}>Bathrooms</label>
                            <select className={classes.InputField}
                                    value={this.props.searchedProduct.bath}
                                    onChange={ (val) => {this.props.onRequestBath(val.target.value)}}>          
                                <option value={1}>+1</option>
                                <option value={2}>+2</option>
                                <option value={3}>+3</option>
                            </select>
                        </div>
                        <div className={classes.Input}>
                            <label htmlFor={classes.Bedroom}>Bedrooms</label>
                            <select className={classes.InputField}
                                    value={this.props.searchedProduct.bed}
                                    onChange={ (val) => {this.props.onRequestBed(val.target.value)}}>          
                                <option value={1}>+1</option>
                                <option value={2}>+2</option>
                                <option value={3}>+3</option>
                            </select>
                        </div>
            </section>
                           
        </form>
      </section>
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
        onRequestBed: (item) => dispatch({type: actionTypes.GET_ITEM_BED, payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesForm);