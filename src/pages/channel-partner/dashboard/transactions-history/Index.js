import React, {useState} from "react";
import { Card, Button, Tab, Tabs} from "react-bootstrap";
import { Link } from "react-router-dom";
import {ChannelPartner} from './ChannelPartner'
import PageTitle from "../../../../components/PageTitle";

const CropOrders = () => {
  const [key, setKey] = useState('tab1');
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "All Transactions History",
            path: "/farmer/crop-orders",
            active: true,
          },
        ]}
        title={"All Transactions History"}
      />
      <Card>
        <Card.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="tab1" title="Channel Partner">
              <ChannelPartner />
            </Tab>
            <Tab eventKey="tab2" title="Garages">
              <ChannelPartner />
            </Tab>
            <Tab eventKey="tab3" title="Classes">
              <ChannelPartner />
            </Tab>
            <Tab eventKey="tab4" title="Teachers">
              <ChannelPartner />
            </Tab>
            <Tab eventKey="tab5" title="Career Experts">
              <ChannelPartner />
            </Tab>
            <Tab eventKey="tab6" title="Schools">
              <ChannelPartner />
            </Tab>
            <Tab eventKey="tab7" title="Students">
              <ChannelPartner />
            </Tab>
          </Tabs>
        
        </Card.Body>
      </Card>
    </>
  );
};

export default CropOrders;
