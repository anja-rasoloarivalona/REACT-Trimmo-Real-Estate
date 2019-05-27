import React from 'react';
import classes from './Agent.css';
import realtor1  from '../../../assets/img/realtor-1.png';
import realtor2  from '../../../assets/img/realtor-2.png';
import realtor3  from '../../../assets/img/realtor-3.png';
import realtor4  from '../../../assets/img/realtor-4.png';

const agent = () => {
    return (
        <section className={classes.Agent}>
            <div className={classes.AgentTitle}>
                  <div>
                      <span>
                          OUR VALUABLE
                      </span>
                      <span>
                        AGENTS
                      </span>
                  </div>
                  <div className={classes.AgentTitleLine}>
                      <hr />
                      <hr />
                      <hr />
                  </div>
                    
            </div>
            <p className={classes.AgentTitlePara}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum totam et dolores voluptatem porro tempore temporibus ducimus
            </p>

            <section className={classes.Realtor}>
            
                <div className={classes.RealtorContent}>
                    <div className={classes.RealtorImgContainer}>
                        <img alt='realtor' className={classes.RealtorImg} src={realtor1}/>
                    </div>
                    <div className={classes.RealtorDetails}>
                        <div>JONH DOE</div>
                        <div>Sales Executive</div>
                    </div>
                </div>
                <div className={classes.RealtorContent}>
                    <div className={classes.RealtorImgContainer}>
                        <img alt='realtor' className={classes.RealtorImg} src={realtor2}/>
                    </div>
                    <div className={classes.RealtorDetails}>
                        <div>JEANNE DOE</div>
                        <div>Sales Executive</div>
                    </div>
                </div>
                <div className={classes.RealtorContent}>
                    <div className={classes.RealtorImgContainer}>
                        <img alt='realtor' className={classes.RealtorImg} src={realtor3}/>
                    </div>
                    <div className={classes.RealtorDetails}>
                        <div>LAURA DOE</div>
                        <div>Sales Executive</div>
                    </div>
                </div>
                <div className={classes.RealtorContent}>
                    <div className={classes.RealtorImgContainer}>
                        <img alt='realtor' className={classes.RealtorImg} src={realtor4}/>
                    </div>
                    <div className={classes.RealtorDetails}>
                        <div>BOB DOE</div>
                        <div>Sales Executive</div>
                    </div>
                </div>
                
            </section>

        </section>
    )
}

export default agent;