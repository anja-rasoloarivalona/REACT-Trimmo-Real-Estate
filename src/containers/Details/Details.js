import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Details.css';
import Property from '../../components/PropertiesList/Property/Property';
import Form from './DetailsForm/DetailsForm';
import bg from '../../assets/img/bg.jpg';



class Details extends Component {
 
  render() {    

   
    return (
      <div className={classes.Details}>

          <section className={classes.Header}
                    style={{backgroundImage: "url(" + bg + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}
          >
              <div className={classes.HeaderTitle}>
                  PROPERTIES DETAILS
              </div>
              <Form />
          </section>

          <section className={classes.Main}>
              <section className={classes.Gallery}>
                    Gallery
              </section>
              <section className={classes.Summary}>
                    Summary
              </section>

          </section>
    
                      
  
                
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
/*
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
/>*/


