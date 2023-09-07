import React, {useState} from "react";
import { Row, Col, Card, Pagination, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Tab2 = () => {
  return (
    <>
      <Row>
          <Col md={6} sm={12}>
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
                <Link to="/channel/career-expert" >
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
                              OTGS Earnings :
                          </h5>
                          <h5 className='mb-0 '>INR 22,000/-</h5>
                      </div>
                      <div className="d-flex justify-content-between">
                          <h5 className='mb-0 d-flex align-items-center'>
                              <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                              CP Earnings :
                          </h5>
                          <h5 className='mb-0 '>INR 12,000/-</h5>
                      </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
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
                <Link to="/channel/career-expert" >
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
                              OTGS Earnings :
                          </h5>
                          <h5 className='mb-0 '>INR 22,000/-</h5>
                      </div>
                      <div className="d-flex justify-content-between">
                          <h5 className='mb-0 d-flex align-items-center'>
                              <i class="font-20 text-primary ri-checkbox-circle-fill me-1"></i>
                              CP Earnings :
                          </h5>
                          <h5 className='mb-0 '>INR 12,000/-</h5>
                      </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
                <Pagination className='mt-3'>
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

export default Tab2;
