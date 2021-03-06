import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Footer.css';
import { NavLink, Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import * as actionTYpes from '../../store/actions';

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
                    {
                        properties.slice(0, 9).map (item => {
                            return (
                                <Link to={`/details/${item.id}`} 
                                      className={classes.ImgContainer} 
                                      key={item.id}
                                      onClick={() => this.props.onRequestedId(item.id)}>
                                    <img src={item.mainImg} alt="img" className={classes.Img}/>
                                </Link>)
                        })
                    }
                </section>
        </div>

        <nav className={classes.SiteMap}>

                <Title title1="SITE"
                       title2="MAP"/>

                <li className={classes.Nav}>
                    <NavLink  to='/' className={classes.Link}>
                        Home
                    </NavLink >
                    <NavLink  to='/properties' className={classes.Link}>
                        Properties
                    </NavLink >
                </li>               
        </nav>
        
      </footer>
    )
  }
}

const mapStateToProps = state => {
    return  {
        properties: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestedId: (item) => dispatch({type: actionTYpes.GET_ITEM, payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)