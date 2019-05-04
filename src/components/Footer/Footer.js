import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Footer.css';
import ReactSVG from 'react-svg';

import Title from '../../components/UI/Title/Title'
import logo from '../../assets/img/logo.png';

import facebook from '../../assets/icon/SVG/facebook.svg';
import twitter from '../../assets/icon/SVG/twitter.svg';
import linkedin from '../../assets/icon/SVG/linkedin2.svg';
import google from '../../assets/icon/SVG/google-plus.svg';


class Footer extends Component {
  render() {
      let properties = [...this.props.properties];
      
    return (
      <footer className={classes.Footer}>

        <div className={classes.Trimmo}>

            <div className={classes.LogoContainer}>
                <img src={logo} alt="logo" className={classes.Logo} />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className={classes.SocialMedia}>
                <ReactSVG src={facebook} className={classes.SocialIcon}/>
                <ReactSVG src={twitter} className={classes.SocialIcon}/>
                <ReactSVG src={linkedin} className={classes.SocialIcon}/>
                <ReactSVG src={google} className={classes.SocialIcon}/>
            </div>

        </div>

        <div className={classes.RecentProperty}>
                <Title title1="RECENT"
                       title2="PROPERTIES"/>

                <section className={classes.RecentPropertyGallery}>

                </section>
        </div>

        <div className={classes.SiteMap}>
                <Title title1="SITE"
                       title2="MAP"/>
        </div>
        
      </footer>
    )
  }
}

const mapStateToProps = state => {
    return  {
        properties: state.products
    }
}

export default connect(mapStateToProps)(Footer)