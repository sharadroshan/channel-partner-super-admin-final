import React from "react";
import { Row, Col, Card, Form, Container,Button, Pagination } from 'react-bootstrap';
import PageTitle from "../../../components/PageTitle";
import CountUp from "react-countup";
import { FormInput } from '../../../components/form';
import { Link } from "react-router-dom";

const ChannelPartners = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Channel Partner",
            path: "/channel/channel-partner",
            active: true,
          },
        ]}
        title={"Channel Partner"}
      />
      <Container>
      <Row>
            <Col>
                <Card className="bg-gradient-pink">
                    <Card.Body>
                    <h4 className="text-white">Total Channel Partners</h4>
                    <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                        <CountUp duration={1} end={580} separator="," />
                    </h3>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="bg-gradient-orange">
                    <Card.Body>
                    <h4 className="text-white">Total Direct</h4>
                    <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                        <CountUp duration={1} end={120} separator="," />
                    </h3>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="bg-gradient-primary">
                    <Card.Body>
                    <h4 className="text-white">Total Indirect</h4>
                    <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                        <CountUp duration={1} end={150} separator="," />
                    </h3>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Link to='/channel/channel-partner-profile'>
                    <Card className="bg-gradient-secondary">
                        <Card.Body>
                            <h4 className="text-white">Introducer</h4>
                            <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                            Shrikant Pawar
                            </h3>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </Row>
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
                {/* <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Select Generation</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>                   */}
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Select State</option>
                        <option value="1">Maharashtra</option>
                        <option value="2">Madhya Pradesh</option>
                        <option value="3">Gujarat</option>
                    </Form.Select>
                </Form.Group>     
            </Col>
            <Col>
                <Form.Group>
                    <Form.Select  aria-label="Default select example" size="lg">
                        <option defaultValue="0">Select City</option>
                        <option value="1">Mumbai</option>
                        <option value="2">Pune</option>
                        <option value="3">Chikhali</option>
                        <option value="4">Sangali</option>
                        <option value="5">Indore</option>
                        <option value="6">Bhopal</option>
                    </Form.Select>
                </Form.Group>   
            </Col>

        </Row>
        <Row>
            <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card className='shadow'>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <Card.Img
                    variant="top"
                    src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                    style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    }}
                />
                <Link to="/channel/channel-partner-profile" >
                  <Button className="btn rounded-pill btn-sm d-flex align-items-center">
                  <i class="font-20 text-primary text-white  ri-contacts-fill me-1"></i> Profile
                  </Button>
                </Link>
              </div>
              <Card.Body className='bg-gradient-grey'>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Name :
                        </h5>
                        <h5 className='mb-0 '>Mahesh Sonawane</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Address :
                        </h5>
                        <h5 className='mb-0 '>Pune</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Mobile No. :
                        </h5>
                        <h5 className='mb-0 '>+918975300224</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Date :
                        </h5>
                        <h5 className='mb-0 '>03 Sep 2022</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            UUID :
                        </h5>
                        <h5 className='mb-0 '>AQ100033</h5>
                    </div>
                     <div className="d-flex justify-content-between">
                        <h5 className='mb-0 d-flex align-items-center'>
                            <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                            Commission Earned :
                        </h5>
                        <h5 className='mb-0 '>INR 22,000</h5>
                    </div>
                    
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Pagination>
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
      </Container>
      
    </>
  );
};

export default ChannelPartners;
