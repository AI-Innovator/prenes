import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="jumbo border rounded" id="about">
            <div className="row">
                <div className="jumbotron-text text-center col-md-5 offset-md-6">
                    <div className="jumbotron-header"></div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}