import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './index.css'

export default () => {
    return (
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="/static/assets/imgs/carousel1.jpg"
              width="640"
              height="480"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Pole Image</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="/static/assets/imgs/carousel2.jpg"
              width="640"
              height="480"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Ground Image</h1>
            </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="/static/assets/imgs/carousel3.jpg"
              width="640"
              height="480"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Blue Sky Image</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
}