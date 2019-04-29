import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';
import ReactSVG from 'react-svg';

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
        <section className = {classes.Contact}>
                Contact me
        </section>
        <nav className={classes.Nav}>
            <li>
                <NavLink  to='/' className={classes.Link}>
                    Home
                </NavLink >
                <NavLink  to='/about' className={classes.Link}>
                    About
                </NavLink >
                <NavLink  to='/properties' className={classes.Link}>
                    Properties
                </NavLink >
            </li>
        </nav>
    </section>
  )
}

export default navbar;
