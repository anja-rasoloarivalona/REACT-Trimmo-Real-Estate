import React, { Component } from 'react';
import classes from './Home.css';

import Form from './form/Form';
import bg from '../../assets/img/bg.jpg';

import Property from '../../components/PropertiesList/Property/Property';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section
            style={{backgroundImage: "url(" + bg + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}
            className={classes.Home}>
            <Form />
        </section> 
        <section className={classes.Properties}>
            <Property />
        </section>
      </React.Fragment>
    
    )
  }
}

export default Home;
