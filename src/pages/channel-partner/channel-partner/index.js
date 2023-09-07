import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import About from "./tabs/About";
import Packages from "./packages/index";
import Feedback from "./tabs/Feedback";
import Timeline from "./tabs/Timeline";
import Introducer from "./tabs/Introducer";
import Wallet from "./tabs/Wallet";
import Notification from "./tabs/Notification";

import Autohub from "./autohub/index";
import ClassBook from "./classbook/index";

import Tree from "./tabs/Tree";


const GarageProfile = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Channel Partner Profile",
            path: "/channel/channel-partner-profile",
            active: true,
          },
        ]}
        title={"Channel Partner Profile"}
      />
      <Row>
        <Col xl={4} lg={4}>
          <ProfileBox />
        </Col>

        <Col xl={8} lg={8}>
          <Tab.Container defaultActiveKey="about">
            <Card>
              <Card.Body>
                <Nav variant="pills" as="ul" className="navtab-bg">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="about" className="ms-0">
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="timeline">
                      Timeline
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="packages">
                      Packages
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="autohub">
                      Autohub
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="classbook">
                      Classbook
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="introducer">
                      Introducer
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="tree">
                      Channel Partners
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="wallet">
                      Wallet
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="notification">
                      Notification
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="about">
                    <About />
                  </Tab.Pane>
                  <Tab.Pane eventKey="timeline">
                    <Timeline />
                  </Tab.Pane>
                  <Tab.Pane eventKey="packages">
                    <Packages />
                  </Tab.Pane>
                  <Tab.Pane eventKey="feedback">
                    <Feedback />
                  </Tab.Pane>
                  <Tab.Pane eventKey="autohub" >
                    <Autohub />
                  </Tab.Pane>
                  <Tab.Pane eventKey="classbook" >
                    <ClassBook />
                  </Tab.Pane>
                  <Tab.Pane eventKey="introducer" >
                    <Introducer />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tree" >
                    <Tree />
                  </Tab.Pane>
                  <Tab.Pane eventKey="wallet" >
                    <Wallet />
                  </Tab.Pane>
                  <Tab.Pane eventKey="notification" >
                    <Notification />
                  </Tab.Pane>

                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </>
  );
};

export default GarageProfile;
