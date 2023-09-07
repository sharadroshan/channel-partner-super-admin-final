import React, { useState } from "react";
import { Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import ChannelPartners from "./tabs/ChannelPartners";
import Garages from "./tabs/Garages";
import Classes from "./tabs/Classes";
import Teachers from "./tabs/Teachers";
import CareerExpert from "./tabs/CareerExpert";
import Schools from "./tabs/Schools";
import Students from "./tabs/Students";


function LatestRegisteredList() {
  const [key, setKey] = useState("tab1");
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="tab1" title="Channel Partners">
                  <ChannelPartners />
                </Tab>
                <Tab eventKey="tab2" title="Garages">
                  <Garages />
                </Tab>
                <Tab eventKey="tab3" title="Classes">
                  <Classes />
                </Tab>
                <Tab eventKey="tab4" title="Teachers">
                  <Teachers />
                </Tab>
                <Tab eventKey="tab5" title="Career Experts">
                  <CareerExpert />
                </Tab>
                <Tab eventKey="tab6" title="Schools">
                  <Schools />
                </Tab>
                <Tab eventKey="tab7" title="Students">
                  <Students />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default LatestRegisteredList;
