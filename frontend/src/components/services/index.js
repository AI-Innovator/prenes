import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"

export default () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            aaaaaaa
          </Tab>
          <Tab eventKey="profile" title="Profile">
            bbbbb
          </Tab>
          <Tab eventKey="contact" title="Contact">
            cccccc
          </Tab>
        </Tabs>
    )
}
