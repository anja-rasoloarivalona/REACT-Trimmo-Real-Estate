import React, { Component } from 'react';
import classes from './Properties.css';
import Form from './Form/PropertiesForm';
import PropertiesList from '../../components/PropertiesList/PropertiesList';

 class Properties extends Component {
  render() {
    return (
      <section className={classes.Properties}>
          <Form />
          <section className={classes.PropertiesContainer}>
              <div className={classes.PropertiesTitleContainer}>
                    <div className={classes.PropertiesTitle}>
                        <div>PROPERTIES</div>
                        <div>FOR YOU</div>
                    </div>
                    <div className={classes.PropertiesTitleLine}>
                        <hr/>
                        <hr/>
                    </div>
              </div>
              <PropertiesList />
            </section>
          
      </section>
    )
  }
}

export default Properties;
