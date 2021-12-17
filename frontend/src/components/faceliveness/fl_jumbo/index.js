import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="fl-jumbo border rounded">
            <div className="fl-jumbotron-text">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}