import React, { useState } from "react";
import { Card, Row, Col,Form, Tab, Tabs } from "react-bootstrap";
import { FormInput } from '../../../components/form';
import ChannelPartners from "./tabs/ChannelPartners";
import Garages from "./tabs/Garages";
import Classes from "./tabs/Classes";
import Teachers from "./tabs/Teachers";
import CareerExpert from "./tabs/CareerExpert";
import Schools from "./tabs/Schools";
import Students from "./tabs/Students";
import PageTitle from "../../../components/PageTitle";


function Allusers() {
  const [key, setKey] = useState("tab1");
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "All Users",
            path: "/channel/all-users",
            active: true,
          },
        ]}
        title={"All Users"}
      />
      <Row className="mb-2">
            <Col>
                <FormInput
                    type="search"
                    name="search"
                    key="search"
                    placeholder="Search here ..."
                    size="lg"
                    />
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Select State</option>
                        <option value="1">Maharahtra</option>
                        <option value="2">Madhya Pradesh</option>
                    </Form.Select>
                </Form.Group>                  
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Select City</option>
                        <option value="1">Pune</option>
                        <option value="2">Mumbai</option>
                        <option value="3">Indore</option>
                        <option value="3">Bhopal</option>
                    </Form.Select>
                </Form.Group>   
            </Col>
        </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h3 className="mb-4 mt-0 text-primary">All Users</h3>
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

export default Allusers;
