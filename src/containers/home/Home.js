import React, { Component } from 'react';
import classes from './Home.css';

import Form from './form/Form';
import bg from '../../assets/img/bg.jpg';




class Home extends Component {
  render() {
    return (
      <section
          style={{backgroundImage: "url(" + bg + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover"}}
          className={classes.Home}>
          <Form />
      </section> 
    
    )
  }
}

export default Home;
