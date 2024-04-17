import React from 'react'
var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;
// import { Carousel } from 'react-responsive-carousel'
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../..images/carImg1.jpg"
import img3 from "../../images/carImg3.jpg"
import img2 from "../../images/carImg2.jpg"
import styled from 'styled-components';

function Carousel() {
  return (
    <Container>

   
    <Carousel className="main-slide">
    <div>
        <img src={img1} />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={img1} />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={img1} height="20vh" width="20vw" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
</Container>

  )
}

export default Carousel
const Container  =styled.div`
.main-slide{
    padding-top: 30px;

}
.carousel .slider-wrapper{
    width: 50%;

}
.carousel .thumb{
    width: 5%;
    height: 50px;
}
.carousel{
    text-align: center;
}
`