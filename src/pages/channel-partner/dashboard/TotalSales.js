import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function TotalRecievedAmount() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Total Sales",
            path: "/farmer/total-sales",
            active: true,
          },
        ]}
        title={"Total Sales"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">Garages</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "30px" }}>
                <CountUp duration={1} end={180} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">Student</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "30px" }}>
                <CountUp duration={1} end={480} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">Classes</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "30px" }}>
                <CountUp duration={1} end={10} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">Teachers</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "30px" }}>
                <CountUp duration={1} end={30} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">Career Experts</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "30px" }}>
                <CountUp duration={1} end={20} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">Schools</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "30px" }}>
                <CountUp duration={1} end={40} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body className='p-2'>
              <h4 className="text-white">Channel Partners</h4>
              <h3 className="text-white mt-1" style={{ fontSize: "30px" }}>
                <CountUp duration={1} end={180} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-primary w-100 font-24">
                  Total Sales
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By Customer Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Abhijeet Chaudhary
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Anil Prajapati
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Mayur Shimpi
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

            <div className="table-responsive my-3">
            <Table hover className="m-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Invoice Number</th>
                    <th>Return Date</th>
                    <th>Sales Code</th>
                    <th>Customer Name</th>
                    <th>(₹) Invoice Total</th>
                    <th>(₹) Paid Payment</th>
                    <th>(₹) Due Amount</th>
                    <th>Due Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>IN092022</td>
                    <td>25 sep 2022</td>
                    <td>Anil2022</td>
                    <td>Anil Prajapati</td>
                    <td>(₹) 40,000 </td>
                    <td>(₹) 30,000 </td>
                    <td>(₹) 10,000 </td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>IN102022</td>
                    <td>26 sep 2022</td>
                    <td>Rajendra2022</td>
                    <td>Rajendra Patil</td>
                    <td>(₹) 80,000 </td>
                    <td>(₹) 70,000 </td>
                    <td>(₹) 10,000 </td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>IN092022</td>
                    <td>28 sep 2022</td>
                    <td>Mayur2022</td>
                    <td>Mayur Shimpi</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 5,000 </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>IN092022</td>
                    <td>01 Oct 2022</td>
                    <td>Cus2022</td>
                    <td>Manoj Patil</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 0</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>IN092022</td>
                    <td>02 Oct 2022</td>
                    <td>Cus2022</td>
                    <td>Dhanu Badgujar</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 5,000 </td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>IN092022</td>
                    <td>25 sep 2022</td>
                    <td>Anil2022</td>
                    <td>Anil Prajapati</td>
                    <td>(₹) 40,000 </td>
                    <td>(₹) 30,000 </td>
                    <td>(₹) 10,000 </td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>IN102022</td>
                    <td>26 sep 2022</td>
                    <td>Rajendra2022</td>
                    <td>Rajendra Patil</td>
                    <td>(₹) 80,000 </td>
                    <td>(₹) 70,000 </td>
                    <td>(₹) 10,000 </td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>IN092022</td>
                    <td>28 sep 2022</td>
                    <td>Mayur2022</td>
                    <td>Mayur Shimpi</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 5,000 </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>IN092022</td>
                    <td>01 Oct 2022</td>
                    <td>Cus2022</td>
                    <td>Manoj Patil</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 0</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>IN092022</td>
                    <td>02 Oct 2022</td>
                    <td>Cus2022</td>
                    <td>Dhanu Badgujar</td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 20,000 </td>
                    <td>(₹) 5,000 </td>
                    <td>20</td>
                  </tr>
                </tbody>
              </Table>
            </div>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default TotalRecievedAmount;
