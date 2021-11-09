import React from "react";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './index.css'

export default () => {
    return (
        <div id="solutions">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav justify variant="tabs" className="flex-column" >
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="text-success">Face Analytics SDK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="text-success">Video Analytics System</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h6>Support Platforms</h6>
                        <li className="tab-text">Android, iPhone, Windows 10, Linux</li>
                      <h6>Description</h6>
                        <li className="tab-text">Face Detection</li>
                        <li className="tab-text">Face Liveness Detection</li>
                        <li className="tab-text">Face Recognition</li>
                        <li className="tab-text">Face Expression Detection</li>
                        <li className="tab-text">Age & Gender Estimation</li>
                        <li className="tab-text">Eye Blink Detection</li>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h6>Support Platforms</h6>
                        <li className="tab-text">Server App - (Docker Version)</li>
                        <li className="tab-text">Client App - (Windows 10 Version)</li>
                      <h6>Description</h6>
                        <li className="tab-text">Detect Person, Car, Bus, Bicycle, Motorcycle, Train, Truck, Boat</li>
                        <li className="tab-text">Face Recognition based Camera surveillance system</li>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
        </div>
    )
}