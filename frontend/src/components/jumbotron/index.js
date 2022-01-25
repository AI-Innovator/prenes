import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="profile-jumbo border rounded" id="profile-about">
            <div className="profile-jumbotron-text">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <p>I am a full stack engineer with experience of working on a variety of ML driven projects. I work on all aspects of
                            the development life cycle, applying my knowledge of performance boosting and latency optimization. This is
                            self-built website from scratch.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <ul>
                          <li>Face and Palm Vein Recognition System IoT embedding Device</li>
                          <li>Camera Surveillance System</li>
                          <li>Object Detection and Classification</li>
                          <li>Semantic Segmentation</li>
                          <li>Landmark Localization</li>
                          <li>OCR, GAN</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                          <li>Automatic Q/A generation system</li>
                          <li>Chatbot building and Recommendation system</li>
                          <li>Sentiment Analysis and Entity Recognition</li>
                          <li>Text classification and Generation</li>
                          <li>Summarization and Keyword Extraction</li>
                          <li>Topic Analysis and Modeling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}