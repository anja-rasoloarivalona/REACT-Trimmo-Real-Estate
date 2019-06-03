import React, { Component } from 'react'
import classes from './Properties.css';
import Title from '../../../components/UI/Title/Title';
import { connect } from 'react-redux';
import Property from '../../../components/PropertiesList/Property/Property';
import { Link } from 'react-router-dom';



class Properties extends Component {
    render() {

        let properties = this.props.propertiesList.slice(0, 6);

    
        return (
            <section className={classes.Properties}>
                <div className={classes.PropertiesIntro}>
    
                    <Title title1= "AWESOME" 
                            title2="PROPERTIES"/>
                            
                    <p className={classes.PropertiesIntroPara}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum totam et dolores voluptatem porro tempore temporibus ducimus
                    </p>
                </div>
                
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
               </div>
    
    
                <Link className={classes.PropertiesCTA} to='/properties'>
                    MORE PROPERTIES
                </Link>
            </section>
        )
        
    }
}




const mapStateToProps = state => {
    return  {
        propertiesList: state.products,
    }
}

export default connect(mapStateToProps)(Properties);