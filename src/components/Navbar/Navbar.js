import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';

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
