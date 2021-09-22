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
                    <Nav.Item className="nav-links" >
                      <Nav.Link eventKey="first" className="text-success">Face Android SDK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-links">
                      <Nav.Link eventKey="second" className="text-success">Camera Surveilance System</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      aaaaaaa
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      bbbbbbb
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
        </div>
    )
}