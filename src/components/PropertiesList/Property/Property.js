import React from 'react';
import classes from './Property.css';
import ReactSVG from 'react-svg';


import bg from '../../../assets/img/bg.jpg';

import heart from '../../../assets/icon/SVG/heart.svg';
import home from '../../../assets/icon/SVG/home.svg';
import garage from '../../../assets/icon/SVG/automobile.svg';
import bed from '../../../assets/icon/SVG/location-hotel.svg';
import bath from '../../../assets/icon/SVG/shower.svg';
import location from '../../../assets/icon/SVG/location.svg';


const property = () => {
  return (
    <section className={classes.Property}>

        <div className={classes.Head}
            style={{backgroundImage: "url(" + bg + ")",
            backgroundPosition: "center",
            backgroundSize: "cover"}}>
            <ReactSVG src={heart} className={classes.Icon}/>
            <div className={classes.Price}>
                <span>$25 000 000</span>
            </div>
        </div>

        <div className={classes.TitleContainer}>
            <span className={classes.Title}>Beautiful family house</span>
        </div>

        <div className={classes.Details}>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={bed} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>2 Beds</div>
            </div>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={bath} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>2 Baths</div>
            </div>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={garage} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>1 Garage</div>
            </div>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={home} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>550 Sq Ft</div>
            </div>
       
        </div>

        <div className={classes.Adress}>
            <ReactSVG src={location} className={classes.AdressIcon}/>
            <div>5721 avenue Saint-André, Montréal QC, H2J 4G3</div>
        </div>

    </section>
  )
}

export default property;
