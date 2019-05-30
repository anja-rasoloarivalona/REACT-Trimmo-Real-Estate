import React from 'react';
import classes from './Properties.css';
import PropertiesList from '../../../components/PropertiesList/PropertiesList';
import Title from '../../../components/UI/Title/Title';

const properties = () => {
    return (
        <section className={classes.Properties}>
            <div className={classes.PropertiesIntro}>

                <Title title1= "AWESOME" 
                        title2="PROPERTIES"/>
                        
                <p className={classes.PropertiesIntroPara}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum totam et dolores voluptatem porro tempore temporibus ducimus
                </p>
            </div>
            
           <PropertiesList />
            <div className={classes.PropertiesCTA}>
                <button>MORE PROPERTIES</button>
            </div>
        </section>
    )
}

export default properties;