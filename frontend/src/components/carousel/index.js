import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './index.css'

export default () => {
    return (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/static/assets/imgs/communication-3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Face Detection</h1>
              <h3>Detect the location of faces with bounding boxes</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="/static/assets/imgs/communication-3.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Liveness Detection</h1>
              <h3>Check whether the face is live or fake</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/static/assets/imgs/communication-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Face Recognition</h1>
              <h3>Recognize faces between two images</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
}