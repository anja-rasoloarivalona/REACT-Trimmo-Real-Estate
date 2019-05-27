import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Details.css';
import Property from '../../components/PropertiesList/Property/Property';

import * as actionTypes from '../../store/actions';

import Form from '../home/form/Form';

import History from '../../shared/history';

import bg from '../../assets/img/bg.jpg';
import Gallery from './Gallery/Gallery';

import map from '../../assets/img/map.jpg';
import Title from '../../components/UI/Title/Title';

import realtor1 from '../../assets/img/realtor-1.png';

import ReactSVG from 'react-svg';
import circle from '../../assets/icon/SVG/circle-right.svg';



class Details extends Component {

      componentDidMount() {
            window.scrollTo(0, 0);
            let path = History.location.pathname           
            let paths =[path.split('/')]                
            let id = parseInt(paths[0][2]);
            this.props.onRequestURL(id);

          }
      
      componentDidUpdate() {
            window.scrollTo(0, 0);

      }

     



 
  render() {    
      
      let tempInfo = this.props.requestedProduct.info;
      let info = Object.keys(tempInfo).map(data => [data, tempInfo[data]])
      
   
      

   
    return (
      <div className={classes.Details}>
          <section className={classes.Header}
                    style={{backgroundImage: "url(" + this.props.requestedProduct.mainImg + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}
          >
              <div className={classes.HeaderAddress}>
                  <div className={classes.HeaderAddressMain}>
                        {this.props.requestedProduct.address.streetNumber} {this.props.requestedProduct.address.streetName}
                  </div>
                  <div className={classes.HeaderAddressSub}>
                        {this.props.requestedProduct.address.city} {this.props.requestedProduct.address.province}, {this.props.requestedProduct.address.postalCode}
                  </div>
            </div>
              <Form />            
          </section>
          <section className={classes.Main}>
              <section className={classes.Gallery}>
                    <Gallery />
              </section>
              <section className={classes.Summary}>
                    <Title title1="QUICK"
                        title2="SUMMARY"/>

                    <div className={classes.SummaryDetails}>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Price</div>
                              <div>{this.props.requestedProduct.info.price}</div>
                        </div>               
                        <div className={classes.SummaryDetailsItem}>
                              <div>Area</div>
                              <div>{this.props.requestedProduct.info.surface} Sq Ft</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Beds</div>
                              <div>{this.props.requestedProduct.info.beds}</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Baths</div>
                              <div>{this.props.requestedProduct.info.baths}</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Kitchen</div>
                              <div>{this.props.requestedProduct.info.kitchen}</div>
                        </div>
                        <div className={classes.SummaryDetailsItem}>
                              <div>Garage</div>
                              <div>{this.props.requestedProduct.info.garage}</div>
                        </div>
                    </div>
              </section>
          </section>

          <section className = {classes.PropertyDetail}>

                <section className={classes.Desc}> 
                      <Title title1="PROPERTY"
                              title2="DESCRIPTION"/>
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
                              <Title title1 ="PROPERTY"
                                     title2="FEATURES"/>
                     
                            <ul className={classes.PropertyFeaturesList}>

                        {info.map(item => {
                              return (
                                    <li key={item[0]} className={classes.PropertyFeaturesListItem}>
                                          <div>
                                          <ReactSVG src={circle} className={classes.PropertyFeaturesListIcon}/>
                                          {item[0]}
                                          
                                          </div>
                                          <div>{item[1]}</div>
                                    </li>
                              )
                        })

                        }


                            </ul>
                    
            </section>
    
          <section className={classes.PropertyRealtor}>
                  <Title title1 ="CONTACT"
                         title2="AGENT"/>
                  <section className={classes.PropertyRealtorContact}>

                        <div className={classes.Realtor}>
                              <div className={classes.RealtorImgContainer}>
                                    <img alt='realtor' className={classes.RealtorImg} src={realtor1}/>
                              </div>
                              <div className={classes.RealtorDetails}>
                                    <div>JONH DOE</div>
                                    <div>Sales Executive</div>
                              </div>
                        </div>
                        
                        <form className={classes.Form}>

                              <div className={classes.Input + ' ' + classes.FormName}>
                                    <label htmlFor={classes.FormName}>Name</label>
                                    <input type="text" placeholder="Full name" className={classes.InputField}/>
                              </div>

                              <div className={classes.Input + ' ' + classes.FormMail}>
                                    <label htmlFor={classes.FormMail}>E-mail address</label>
                                    <input type="email" placeholder="Email adress" className={classes.InputField}/>
                              </div>

                              <div className={classes.Input + ' ' + classes.FormText}>
                                    <label htmlFor={classes.FormText}>Message</label>
                                    <textarea type="text-area" placeholder="Your message" className={classes.InputField}></textarea>
                              </div>
                              <input className={classes.FormCTA} type="submit" value="Send"></input>

                              
                        
                        </form>
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

const mapDispatchToProps = dispatch => {
      return {
          onRequestURL: (item) => dispatch({type: actionTypes.GET_URL, payload: item}),
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Details);
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


