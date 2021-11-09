import React from 'react';
import Jumbotron from '../jumbotron';
import Carousel from '../carousel';
import Card from '../card';
import Tab from '../tab';
import Quote from '../quote';
import Services from '../services';

export default () => {
    return (
        <div>
            <Carousel />
            <Card />
            <Services />
            <Jumbotron />
            <Quote />
        </div>
    )
}