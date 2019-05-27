import React, { Component } from 'react';
import classes from './Properties.css';
import Form from './Form/PropertiesForm';
import PropertiesList from '../../components/PropertiesList/PropertiesList';
import Map from '../../components/Map/Map';
import { connect } from 'react-redux';
import { isEquivalent } from '../../shared/compareInititalState';

 class Properties extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  
  
  render() {


    
    return (
      <section className={classes.Properties}>
          <Form />
          <section className={classes.PropertiesContainer}>
              <div className={classes.PropertiesTitleContainer}>
                    <div className={classes.PropertiesTitle}>
                        <div>{this.props.count} PROPERTIES</div>
                        <div>FOR YOU</div>
                    </div>
                    <div className={classes.PropertiesTitleLine}>
                        <hr/>
                        <hr/>
                    </div>
              </div>
              <div className={classes.MapContainer}>
                <Map />
              </div>
              
              <PropertiesList />
            </section>
          
      </section>
    )
  }
}

const mapStateToProps = state => {
  return  {
      count : state.count
  }
}




export default connect(mapStateToProps)(Properties)
