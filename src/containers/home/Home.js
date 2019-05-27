import React, { Component } from 'react';
import classes from './Home.css';

import Form from './form/Form';

import About from './about/About';
import Add from './add/Add';
import Properties from './properties/Properties';
import Advantage from './advantage/Advantage';
import Agent from './agent/Agent';
import Subscribe from './subscribe/Subscribe';


import bg from '../../assets/img/bg.jpg';




class Home extends Component {

componentDidMount() {
        window.scrollTo(0, 0)
      }

render() {
    return (
      <section className={classes.Container}>

            <section className={classes.Home}
                     style={{backgroundImage: "url(" + bg + ")",
                     backgroundPosition: "center",
                     backgroundSize: "cover"}}>
                    <Form />
            </section> 
            <About />
            <Add />
            <Properties />
            <Advantage />
            <Agent />
            <Subscribe />
      </section>


    
    )
  }
}

export default Home;
