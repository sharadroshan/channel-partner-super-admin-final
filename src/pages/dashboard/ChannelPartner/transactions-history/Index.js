import React, {useState} from "react";
import { Card, Button, Tab, Tabs} from "react-bootstrap";
import { Link } from "react-router-dom";
import {ChannelPartner} from './ChannelPartner'

const CropOrders = () => {
  const [key, setKey] = useState('tab1');
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-between align-items-center">
            <h4>Latest Transaction History</h4>
            <Link to="/channel/total-transactions-history">
              <Button className="bg-gradient-pink border-0 rounded-pill px-4 py-2">
                View All
              </Button>
            </Link>
          </Card.Title>
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
