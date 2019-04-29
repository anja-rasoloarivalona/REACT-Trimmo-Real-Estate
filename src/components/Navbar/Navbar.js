import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <section>
        <section className = {classes.Contact}>
                Contact me
        </section>
        <nav>
            <li>
                <Navlink></Navlink>
            </li>
        </nav>
    </section>
  )
}

export default navbar;
