import React from "react";
import { Card, Row, Col, Form, Table } from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../../components/PageTitle";

function Reward() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/channel" },
          {
            label: "Reward",
            path: "/channel/wallet",
            active: true,
          },
        ]}
        title={"Reward"}
      />
      <Row>
        <Col>
          <Form.Select aria-label="slelect year">
            <option>Select Year</option>
            <option value="1">2020</option>
            <option value="2">2021</option>
            <option value="3">2022</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="slelect month">
            <option>Select Month</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="usertype">
            <option>User Type</option>
            <option value="1">Teacher Courses</option>
            <option value="2">Career Experts</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} sm={4} >
                  <div>
                    <img src="https://www.pngitem.com/pimgs/m/283-2839381_rewards-png-free-download-reward-image-png-transparent.png"  className='w-100 rounded-pill'/>
                  </div>
                </Col>
                <Col md={8} sm={8}>
                  <div >
                    <h4 className="text-dark">Set Wallet Top-up</h4>
                    <h6 className="text-grey">Upto ₹1500 Cashback</h6>
                    <span className="text-muted">Wallet Offer</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} sm={4} >
                  <div>
                    <img src="https://www.pngitem.com/pimgs/m/283-2839381_rewards-png-free-download-reward-image-png-transparent.png"  className='w-100 rounded-pill'/>
                  </div>
                </Col>
                <Col md={8} sm={8}>
                  <div >
                    <h4 className="text-dark">Set Wallet Top-up</h4>
                    <h6 className="text-grey">Upto ₹1500 Cashback</h6>
                    <span className="text-muted">Wallet Offer</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} sm={4} >
                  <div>
                    <img src="https://www.pngitem.com/pimgs/m/283-2839381_rewards-png-free-download-reward-image-png-transparent.png"  className='w-100 rounded-pill'/>
                  </div>
                </Col>
                <Col md={8} sm={8}>
                  <div >
                    <h4 className="text-dark">Set Wallet Top-up</h4>
                    <h6 className="text-grey">Upto ₹1500 Cashback</h6>
                    <span className="text-muted">Wallet Offer</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} sm={4} >
                  <div>
                    <img src="https://www.pngitem.com/pimgs/m/283-2839381_rewards-png-free-download-reward-image-png-transparent.png"  className='w-100 rounded-pill'/>
                  </div>
                </Col>
                <Col md={8} sm={8}>
                  <div >
                    <h4 className="text-dark">Set Wallet Top-up</h4>
                    <h6 className="text-grey">Upto ₹1500 Cashback</h6>
                    <span className="text-muted">Wallet Offer</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} sm={4} >
                  <div>
                    <img src="https://www.pngitem.com/pimgs/m/283-2839381_rewards-png-free-download-reward-image-png-transparent.png"  className='w-100 rounded-pill'/>
                  </div>
                </Col>
                <Col md={8} sm={8}>
                  <div >
                    <h4 className="text-dark">Set Wallet Top-up</h4>
                    <h6 className="text-grey">Upto ₹1500 Cashback</h6>
                    <span className="text-muted">Wallet Offer</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} sm={4} >
                  <div>
                    <img src="https://www.pngitem.com/pimgs/m/283-2839381_rewards-png-free-download-reward-image-png-transparent.png"  className='w-100 rounded-pill'/>
                  </div>
                </Col>
                <Col md={8} sm={8}>
                  <div >
                    <h4 className="text-dark">Set Wallet Top-up</h4>
                    <h6 className="text-grey">Upto ₹1500 Cashback</h6>
                    <span className="text-muted">Wallet Offer</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Reward;
