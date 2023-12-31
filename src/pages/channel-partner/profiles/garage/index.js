import React from "react";
import PageTitle from "../../../../components/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import About from "./tabs/About";
import Packages from "./packages/index";
import Feedback from "./tabs/Feedback";
import Timeline from "./tabs/Timeline";
import Introducer from "./tabs/Introducer";
import Wallet from "./tabs/Wallet";
import Notification from "./tabs/Notification";

const GarageProfile = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Student Profile",
            path: "/channel/garage-profile",
            active: true,
          },
        ]}
        title={"Student Profile"}
      />
      <Row>
        <Col xl={4} lg={4}>
          {/* User information */}
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
                    <Nav.Link href="#" eventKey="feedback">
                      Feedback
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link href="#" eventKey="introducer">
                      Introducer
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
                  <Tab.Pane
                    eventKey="timeline"
                    className="bg-light p-2 rounded"
                  >
                    <Timeline />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="packages"
                    className="rounded"
                  >
                    <Packages />
                  </Tab.Pane>
                  <Tab.Pane eventKey="feedback" className="bg-light p-2 rounded">
                    <Feedback />
                  </Tab.Pane>
                  <Tab.Pane eventKey="introducer" className="bg-light p-2 rounded">
                    <Introducer />
                  </Tab.Pane>
                  <Tab.Pane eventKey="wallet" className="bg-light p-2 rounded">
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
