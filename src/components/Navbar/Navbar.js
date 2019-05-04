import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';
import ReactSVG from 'react-svg';

import logo from '../../assets/img/logo.png';

import phone from '../../assets/icon/SVG/phone.svg';
import mail from '../../assets/icon/SVG/envelop.svg';
import user from '../../assets/icon/SVG/user.svg';
import pencil from '../../assets/icon/SVG/edit-pencil.svg';
import facebook from '../../assets/icon/SVG/facebook.svg';
import twitter from '../../assets/icon/SVG/twitter.svg';
import linkedin from '../../assets/icon/SVG/linkedin2.svg';
import google from '../../assets/icon/SVG/google-plus.svg';

const navbar = () => {

  return (
    <section className={classes.NavbarContainer}>

        {/* START NAV TOP*/}
            <section className = {classes.NavTop}>

            {/* ----NAV TOP CONTACT---- */}
            <div className={classes.Contact}>
                <div className={classes.NavTopItem}>
                    <ReactSVG src={phone} className={classes.Icon}/>
                    <span className={classes.NavTopTextContact}>+1 514 123 1234</span>
                </div>
                <div className={classes.NavTopItem}>
                    <ReactSVG src={mail} className={classes.Icon}/>
                    <span className={classes.NavTopText}>trimmo@myemail.com</span>
                </div>
            </div>

        {/* ----NAV TOP USER---- */}
            <section className={classes.User}>
                <div className={classes.NavTopItem}>
                    <ReactSVG src={user} className={classes.Icon}/>
                    <span className={classes.NavTopText}>sign in</span>
                </div>

                <div className={classes.NavTopItem}>
                    <ReactSVG src={pencil} className={classes.Icon}/>
                    <span className={classes.NavTopText}>sign up</span>
                </div>
            </section>

        {/* ----NAV TOP SOCIAL MEDIA---- */}
            <section className={classes.SocialMedia}>
                <ReactSVG src={facebook} className={classes.SocialIcon}/>
                <ReactSVG src={twitter} className={classes.SocialIcon}/>
                <ReactSVG src={linkedin} className={classes.SocialIcon}/>
                <ReactSVG src={google} className={classes.SocialIcon}/>
            </section>
    </section>
    {/* ----END NAV TOP---- */}


                
        
        <nav className={classes.Nav}>
            <img className={classes.Logo} alt="Logo" src={logo}/>
            <li className={classes.NavList}>

                <NavLink exact  to='/' className={classes.Link} activeClassName={classes.Active}>
                    Home
                </NavLink >
                <NavLink  to='/about' className={classes.Link} activeClassName={classes.Active}>
                    About
                </NavLink >
                <NavLink  to='/properties' className={classes.Link} activeClassName={classes.Active}>
                    Properties
                </NavLink >
            </li>
        </nav>

    </section>
  )
}

export default navbar;
