import React from 'react';
import Jumbotron from './jumbotron';
import Carousel from '../carousel';
import Card from '../card';

export default () => {
    return (
        <div>
            <Carousel />
            <Card />
            <Jumbotron />
        </div>
    )
}