import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"
import "./index.css"

export default () => {
    return (
        <div id="services">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="Computer Vision" tabClassName="text-success">
                  We apply years of our knowledge in Computer Vision when address our clients needs by implementing Machine Learning approach and analytical algorithms.
                  An identification, classification, and segmentation of an object, near-duplicate search algorithm for a large image database, anomalies detection for a surveillance system projects of exceptional quality were created for our clients.
              </Tab>
              <Tab eventKey="profile" title="Cloud" tabClassName="text-success">
                  We develop cloud based solutions.
                  Machine learning model needs infrastructure to be runned on. We help our clients design, build and operate complex solutions using Google Cloud to ensure security, scalability and reliability.
              </Tab>
              <Tab eventKey="contact" title="MVP" tabClassName="text-success">
                  We develop key components of the complex computer vision systems for well-known companies.
                  The solutions for analysis of medical images, GUI components, and components implemented in e-commerce products sufficiently serve our customer sophisticated needs.
              </Tab>
              <Tab eventKey="backend" title="Back-end" tabClassName="text-success">
                  To ensure high compatibility with other languages and platforms we build our projects in high-performance language C and C++.
                  To support faster algorithms research and development, we implement Python as one of the most widely used programming languages for science and engineering.
              </Tab>
              <Tab eventKey="mobile" title="Mobile" tabClassName="text-success">
                  We develop a wide range of product for iOS and Android mobile systems based on Artificial Intelligence and Deep Learning principles.
                  Our modules for apps can be used for artistic effects enhancement, color correction, drawing, painting, and retouching.
              </Tab>
            </Tabs>
        </div>
    )
}
