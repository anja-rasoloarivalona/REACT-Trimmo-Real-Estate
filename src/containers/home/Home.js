import React, { Component } from 'react';
import classes from './Home.css';
import ReactSVG from 'react-svg';

import Form from './form/Form';
import location from '../../assets/icon/SVG/location.svg';

import bg from '../../assets/img/bg.jpg';
import realtor from '../../assets/img/realtor.png';

import PropertiesList from '../../components/PropertiesList/PropertiesList';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section
            style={{backgroundImage: "url(" + bg + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}
            className={classes.Home}>
            <Form />
        </section> 

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

        <section className={classes.Add}
        style={{backgroundImage: "linear-gradient(110deg, rgba(198, 153, 99,1) 0%, rgba(198, 153, 99,1) 46%, white 46%, white 47%,  rgba(16, 29, 44,1) 47%)",
                backgroundPosition: "center",
                backgroundSize: "cover"}}>

          <div className={classes.AddInfo1}>
            <div>FIND YOUR</div>
            <div>DREAM HOME</div>
          </div>

          <div className={classes.AddInfo2}>
            <div>WE ARE READY TO RECEIVE YOUR CALL</div>
            <div>+1 514 123 1234</div>
          </div>

        </section>

        <section className={classes.Properties}>
            <div className={classes.PropertiesIntro}>
                <div className={classes.PropertiesIntroTitle}>
                    <div>AWESOME</div>
                    <div>PROPERTIES</div>
                </div>
                <div className={classes.PropertiesTitleLine}>
                    <hr />
                    <hr />
                </div>
                <p className={classes.PropertiesIntroPara}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum totam et dolores voluptatem porro tempore temporibus ducimus
                </p>
            </div>
            <PropertiesList />
            <div className={classes.PropertiesCTA}>
                <button>MORE PROPERTIES</button>
            </div>
        </section>


        <section className={classes.Advantage}
                  style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + bg + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover"}}>
              <div className={classes.AdvantageTitle}>
                  <span>
                      OUR 
                  </span>
                  <span>
                    ADVANTAGES
                  </span>
              </div>
              <span className={classes.AdvantagePara}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              </span>

              <section className={classes.AdvantageContent}>

                  <div className={classes.AdvantageContentItem}>
                      <ReactSVG src={location} className={classes.AdvantageIcon}/>
                      <div>
                          Various Locations
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.
                      </p>
                  </div>

                  <div className={classes.AdvantageContentItem}>
                      <ReactSVG src={location} className={classes.AdvantageIcon}/>
                      <div>
                          Various Locations
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.
                      </p>
                  </div>

                  <div className={classes.AdvantageContentItem}>
                      <ReactSVG src={location} className={classes.AdvantageIcon}/>
                      <div>
                          Various Locations
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.
                      </p>
                  </div>

                  <div className={classes.AdvantageContentItem}>
                      <ReactSVG src={location} className={classes.AdvantageIcon}/>
                      <div>
                          Various Locations
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.
                      </p>
                  </div>

              </section>

        </section>
      </React.Fragment>


    
    )
  }
}

export default Home;
