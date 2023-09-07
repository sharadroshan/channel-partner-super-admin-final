import React, { useState } from "react";
import { Row, Col, Card, Button, Pagination, Tab, Tabs } from "react-bootstrap";

const Feedback = () => {
  const [key, setKey] = useState("class");
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="class" title="Class">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex">
              <Button className="btn btn-sm">Current</Button>
              <Button className="btn btn-sm ms-2">History</Button>
            </div>
            <p>1-10 of 10 items</p>
          </div>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="teacher" title="Teacher">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex">
              <Button className="btn btn-sm">Current</Button>
              <Button className="btn btn-sm ms-2">History</Button>
            </div>
            <p>1-10 of 10 items</p>
          </div>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="careerexpert" title="Career Expert">
          <div className="d-flex align-items-center justify-content-between mb-2 ">
            <div className="d-flex">
              <Button className="btn btn-sm">Current</Button>
              <Button className="btn btn-sm ms-2">History</Button>
            </div>
            <p>1-10 of 10 items</p>
          </div>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h4 className="text-primary">John Sena</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillumdolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
        </Tab>
      </Tabs>

      <Pagination className="mt-3">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};

export default Feedback;
