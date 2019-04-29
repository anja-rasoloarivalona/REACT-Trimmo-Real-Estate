import React from 'react';
import classes from './Property.css';
import bg from '../../../assets/img/bg.jpg';

const property = () => {
  return (
    <section className={classes.Property}>

        <div className={classes.Head}
            style={{backgroundImage: "url(" + bg + ")",
            backgroundPosition: "center",
            backgroundSize: "cover"}}>
        </div>

        <div className={classes.TitleContainer}>
            <span className={classes.Title}>Beautiful family house</span>
        </div>

        <div className={classes.Details}>
            <div>2 Beds</div>
            <div>2 Baths</div>
            <div>1 Garage</div>
            <div>550 Sq Ft</div>
        </div>

        <div className={classes.Adress}>
            5721 avenue Saint-André, Montréal QC, H2J 4G3
        </div>

    </section>
  )
}

export default property;
