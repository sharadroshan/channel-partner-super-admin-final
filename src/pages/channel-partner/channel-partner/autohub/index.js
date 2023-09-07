import React from "react";
import { Tab, Nav } from "react-bootstrap";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";

const Autohub = () => {
  return (
    <>
    <Tab.Container defaultActiveKey="tab1">
        <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab1" className="ms-0">
                      Channel Partner
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab2">
                        Garages
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="border-0 px-0">
                  <Tab.Pane eventKey="tab1" className="border-0">
                    <Tab1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2"  className="border-0" >
                    <Tab2 />
                  </Tab.Pane>
                </Tab.Content>
          </Tab.Container>
    </>
  );
};

export default Autohub;
