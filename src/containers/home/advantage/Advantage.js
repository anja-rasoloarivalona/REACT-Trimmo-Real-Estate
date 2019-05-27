import React from 'react';
import classes from './Advantage.css';
import ReactSVG from 'react-svg';

import bg from '../../../assets/img/bg.jpg';

import location from '../../../assets/icon/SVG/location.svg';
import cogs from '../../../assets/icon/SVG/cogs.svg';
import key from '../../../assets/icon/SVG/key2.svg';
import lock from '../../../assets/icon/SVG/lock-closed.svg';

const advantage = () => {
    return (
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
                      <ReactSVG src={key} className={classes.AdvantageIcon}/>
                      <div>
                          Best Prices
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.
                      </p>
                  </div>

                  <div className={classes.AdvantageContentItem}>
                      <ReactSVG src={lock} className={classes.AdvantageIcon}/>
                      <div>
                          Privacy and Security
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.
                      </p>
                  </div>

                  <div className={classes.AdvantageContentItem}>
                      <ReactSVG src={cogs} className={classes.AdvantageIcon}/>
                      <div>
                          No Commission
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.
                      </p>
                  </div>
              </section>
        </section>
    )
}

export default advantage;