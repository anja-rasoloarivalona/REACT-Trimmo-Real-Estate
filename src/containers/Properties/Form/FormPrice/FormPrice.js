import React, { Component } from 'react';
import classes from './FormPrice.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';


class FormPrice extends Component {

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
            <section className={classes.FormGroup}>

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


                    <div className={classes.Input}>
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
        onRequestMin: (item) => dispatch({type: actionTypes.GET_ITEM_MIN, payload: item}),
        onRequestMax: (item) => dispatch({type: actionTypes.GET_ITEM_MAX, payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPrice); 
