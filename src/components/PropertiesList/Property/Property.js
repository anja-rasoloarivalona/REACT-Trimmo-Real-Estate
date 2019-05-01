import React from 'react';
import classes from './Property.css';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';

import bg from '../../../assets/img/bg.jpg';

import heart from '../../../assets/icon/SVG/heart.svg';
import home from '../../../assets/icon/SVG/home.svg';
import garage from '../../../assets/icon/SVG/automobile.svg';
import bed from '../../../assets/icon/SVG/location-hotel.svg';
import bath from '../../../assets/icon/SVG/shower.svg';
import location from '../../../assets/icon/SVG/location.svg';


const property = (props) => {
  return (
    <section className={classes.Property}
            onClick={props.requestedDetail}>

        <Link to={`/details/${props.id}`} className={classes.Link}>
                <div className={classes.Head}
                    style={{backgroundImage: "url(" + bg + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}>
                
                    
                    <ReactSVG src={heart} className={classes.Icon}/>
                    <div className={classes.Price}>
                        <span>{props.price}</span>
                    </div>
                </div>
        </Link>


        <div className={classes.TitleContainer}>
            <span className={classes.Title}>{props.title}</span>
        </div>

        <div className={classes.Details}>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={bed} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>{props.numbBeds} Beds</div>
            </div>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={bath} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>{props.numbBaths} Baths</div>
            </div>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={garage} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>{props.numbGarage} Garage</div>
            </div>

            <div className={classes.DetailsInfo}>
                <ReactSVG src={home} className={classes.Icon}/>
                <div className={classes.DetailsInfoText}>{props.surface} Sq Ft</div>
            </div>
       
        </div>

        <div className={classes.Adress}>
            <ReactSVG src={location} className={classes.AdressIcon}/>
            <div>{props.fullAdress}</div>
        </div>

    </section>
  )
}

export default property;
