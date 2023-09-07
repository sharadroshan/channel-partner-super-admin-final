import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import Tab4 from "./tabs/Tab4";
import Tab5 from "./tabs/Tab5";

const ClassBook = () => {
  return (
    <>
    <Tab.Container defaultActiveKey="tab1">
        <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab1" className="ms-0">
                      Student
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab2">
                        Class
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab3">
                      Teacher
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab4">
                        Career Expert
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tab5">
                        Schools
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
                  <Tab.Pane eventKey="tab3"  className="border-0">
                    <Tab3 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab4"  className="border-0" >
                    <Tab4 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab5"  className="border-0">
                    <Tab5 />
                  </Tab.Pane>
                </Tab.Content>
          </Tab.Container>
    </>
  );
};

export default ClassBook;
