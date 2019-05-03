import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Details.css';
import Property from '../../components/PropertiesList/Property/Property';
import Form from './DetailsForm/DetailsForm';
import bg from '../../assets/img/bg.jpg';
import Gallery from './Gallery/Gallery';

import map from '../../assets/img/map.jpg';
import Title from '../../components/UI/Title/Title';



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
                    <Gallery />
              </section>
              <section className={classes.Summary}>
                    <div className={classes.SummaryTitle}>
                      <div>QUICK</div>
                      <div>SUMMARY</div>
                    </div>
                    <div className={classes.SummaryTitleLine}>
                        <hr />
                        <hr />
                    </div>

                    <div className={classes.SummaryDetails}>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Price</div>
                              <div>$78 000</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Property Type</div>
                              <div>House</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Area</div>
                              <div>450 Sq Ft</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Beds</div>
                              <div>2</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Baths</div>
                              <div>1</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Garage</div>
                              <div>1</div>
                        </div>
                    </div>
              </section>
          </section>

              <section className = {classes.PropertyDetail}>

                <section className={classes.Desc}> 
                      <div className={classes.DescTitleContainer}>
                          <div className={classes.DescTitle}>
                                <div>PROPERTY</div>
                                <div>DESCRIPTION</div>
                          </div>
                          <div className={classes.DescTitleLine}>
                                <hr/>
                                <hr/>
                        </div>
                      </div>
                      <div className = {classes.PropertyDetailPara}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, nec consequat orci.
                      </div>
                      <div className = {classes.PropertyDetailPara}>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis. Cras at tincidunt magna. Mauris aliquam sem sit amet dapibus venenatis. Sed metus orci, tincidunt sed fermentum non, ornare non quam. Aenean nec turpis at libero lobortis pretium.
                      </div>
                </section>

                <section className={classes.FloorPlan}>
                      <img src={map} alt="floor" className={classes.FloorPlanImg} />
                </section>
       </section>

           <section className={classes.PropertyFeatures}>
                      features
                      <section className={classes.PropertyFeaturesItems}>
                            <div className={classes.PropertyFeaturesItem}>
                              <Title title1 ="PROPERTY"
                                     title2="FEATURES"/>
                            </div>
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


