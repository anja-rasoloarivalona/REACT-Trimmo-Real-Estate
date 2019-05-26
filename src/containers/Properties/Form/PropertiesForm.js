import React, { Component } from 'react';
import classes from './PropertiesForm.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

 class PropertiesForm extends Component {


  render() {
    return (

      <form className={classes.Form}>

        {/*<div className={classes.Location + ' ' + classes.Input}>*/}  
        <h1 className={classes.Title}>Find your dream home</h1>
        
        <div className={classes.Input + ' ' + classes.Location}>
            <label htmlFor={classes.Location}>Location</label>
            <select className={classes.InputField}>
                <option>Montreal</option>
                <option>Quebec</option>
                <option>Ottawa</option>
            </select>
        </div>


        <div className={classes.Input + ' ' + classes.Type}>
            <label htmlFor={classes.Type}>Types</label>

            <select 
                className={classes.InputField}
                value={this.props.searchedProduct.type}
                onChange={ (val) => {this.props.onRequestType(val.target.value)}}>    

                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
            </select>
        </div>



        <div className={classes.Input + ' ' + classes.Min}>
            <label htmlFor={classes.Min}>Min</label>
            <input type="number" placeholder="price" className={classes.InputField}/>
        </div>
        

        <div className={classes.Input + ' ' + classes.Max}>
            <label htmlFor={classes.Max}>Max</label>
            <input type="number" placeholder="price" className={classes.InputField}/>
        </div>

        <div className={classes.Input + ' ' + classes.Bathroom}>
            <label htmlFor={classes.Bathroom}>Bathrooms</label>
            <select className={classes.InputField}>          
                <option>+1</option>
                <option>+2</option>
                <option>+3</option>
            </select>
        </div>
        

        <div className={classes.Input + ' ' + classes.Bedroom}>
            <label htmlFor={classes.Bedroom}>Bedrooms</label>
            <select className={classes.InputField}>          
                <option>+1</option>
                <option>+2</option>
                <option>+3</option>
            </select>
        </div>

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
        onRequestType: (item) => dispatch({type: actionTypes.GET_ITEM_TYPE, payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesForm);