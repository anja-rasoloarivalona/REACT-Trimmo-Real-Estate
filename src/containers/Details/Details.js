import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Details.css';
import Property from '../../components/PropertiesList/Property/Property';



class Details extends Component {
 
  render() {    

   
    return (
      <div className={classes.Details}>
    
                      
      <Property 
      
                key={this.props.requestedProduct.id}
                price ={this.props.requestedProduct.price}
                title ={this.props.requestedProduct.title}
                numbBeds={this.props.requestedProduct.numbBeds}
                numbBaths={this.props.requestedProduct.numbBaths}
                numbGarage={this.props.requestedProduct.numbGarage}
                surface={this.props.requestedProduct.surface}
                id={this.props.requestedProduct.id}
                fullAdress={this.props.requestedProduct.fullAdress}
        />
                
      </div>

      

              

         
      
                
 

    
      )
        
  }
}

const mapStateToProps = state => {
    return  {
        properties: state.products,
        requestedProduct: state.requestedProduct
    }
}

export default connect(mapStateToProps)(Details);


