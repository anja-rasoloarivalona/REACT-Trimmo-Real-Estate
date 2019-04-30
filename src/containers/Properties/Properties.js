import React, { Component } from 'react';
import classes from './Properties.css';
import Form from './Form/PropertiesForm';

 class Properties extends Component {
  render() {
    return (
      <section className={classes.PropertiesContainer}>
          <Form />
      </section>
    )
  }
}

export default Properties;
