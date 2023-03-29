import React, { Component } from 'react'
import Carousel from 'react-bootstrap-carousel';
// import Carousel from 'npm installreact-bootstrap/Carousel';
// import King from '../assets/King.png';
// import nlo from '../assets/nlo.png';
import Lake1 from '../assets/Lake1.png';
import Lake2 from '../assets/Lake2.png';
// import SrarWars from '../assets/StarWars.png';
// import Lord from '../assets/Lord.png';

export default class SlidesShow extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img className='d-block w-100'
            scr={Lake1}
            alt="LAKE" 
            />
        </Carousel.Item>
        <Carousel.Caption>
            <h3> Lake image</h3>
            <p> tyt photo burteful lake</p>
        </Carousel.Caption>

        <Carousel.Item>
            <img className='d-block w-100'
            scr={Lake2}
            alt="LAKE" 
            />
        </Carousel.Item>
        <Carousel.Caption>
            <h3> Lake2 image</h3>
            <p> tyt phot2o burteful lake</p>
        </Carousel.Caption>

      </Carousel>

      

      
    )
  }
}
