import React, { Component } from 'react';
import classes from './Gallery.css';

import { connect } from 'react-redux';
import Slider from "react-slick";



 class Gallery extends Component {
  render() {

    const Arrow = (props) => {
        const { className, style, onClick} = props;

        return (

            <div
                className={className}
                style={{ ...style, display: "flex", background: "#101D2C", height: "9%", width:"8%", zIndex: 20 ,
                alignItems: "center", justifyContent: "center"
                }}
                onClick={onClick}
            />
        )
    }

    const prod = this.props.requestedProduct;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
      };


    return (
      <div className={classes.Container}>
        <Slider {...settings}>
          <div>
            <img src={"/img/properties/property0" + prod.id + "/img01.jpg"}
                className={classes.Img}/>
          </div>
          <div>
          <img src={"/img/properties/property0" + prod.id + "/img02.jpg"}
                className={classes.Img}/>
          </div>
          <div>
          <img src={"/img/properties/property0" + prod.id + "/img03.jpg"}
                className={classes.Img}/>
          </div>
          <div>
          <img src={"/img/properties/property0" + prod.id + "/img04.jpg"}
                className={classes.Img}/>
          </div>
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return  {
        properties: state.products,
        requestedProduct: state.requestedProduct
    }
}

export default connect(mapStateToProps)(Gallery);
