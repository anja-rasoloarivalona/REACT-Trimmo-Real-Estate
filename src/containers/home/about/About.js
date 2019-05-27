import React from 'react';
import classes from './About.css';
import realtor from '../../../assets/img/realtor.png';

const about = () => {
    return (
        <section className={classes.About}>

          <section className={classes.AboutText}>       
              <div className={classes.AboutTitleContainer}>
                <div className={classes.AboutTitle1}>FEW DESCRIPTION</div>
                <div className={classes.AboutTitle2}>ABOUT TRIMMO</div>
                <div className={classes.AboutSubTitle}>REAL ESTATE</div>
              </div>
              <p className={classes.AboutPara}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
              </p>
              <p className={classes.AboutPara}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
              </p>
            </section>
            <section className={classes.AboutImgContainer}>
              <img src={realtor} alt="img" className={classes.AboutImg}/>
            </section>
        </section>
    )
}

export default about;