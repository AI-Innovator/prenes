import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"
import "./index.css"

export default () => {
    return (
        <div id="services">
            <Tabs defaultActiveKey="ml" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="ml" title="Machine Learning" tabClassName="text-success">
                  <p><b>Computer Vision</b></p>
                  <p>I apply years of my knowledge in Computer Vision when address our clients needs by implementing Machine Learning approach and analytical algorithms.</p>
                  <p>An identification, classification, and segmentation of an object, near-duplicate search algorithm for a large image database, anomalies detection for a surveillance system projects of exceptional quality were created for our clients.</p>
                  <p><b>Natural Language Processing</b></p>
                  <p>I can develop several types of natural language projects in NLP, NLU and NLG. I'd like to work at all aspects such as web scraping, text analysis and generation.
                  </p>
              </Tab>
              <Tab eventKey="cloud" title="Cloud" tabClassName="text-success">
                  <p><b>Cloud based solutions</b></p>
                  <p>Machine learning model needs infrastructure to be runned on cloud services such as GCP, AWS, genesisCloud etc.</p>
              </Tab>
              <Tab eventKey="backend" title="Back-end" tabClassName="text-success">
                  <p><b>Backend development for web application</b></p>
                  <p>I'd like to use backend-side programming languages such as python(Django/Flask), C/C++.</p>

              </Tab>
              <Tab eventKey="mobile" title="Mobile" tabClassName="text-success">
                  <p><b>Mobile App development</b></p>
                  <p>I develop a wide range of product for Android and iOS mobile systems based on computer vision and NLP.</p>
              </Tab>
            </Tabs>
        </div>
    )
}
