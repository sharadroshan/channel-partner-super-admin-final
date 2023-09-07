import React, { useState } from "react";
import { Card, Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBox = () => {
  const [lgShow, setLgShow] = useState(false);
   const [lgShow2, setLgShow2] = useState(false);
  
  return (
    <Card className="text-center">
      <Card.Body>
        <h3 className="text-primary">Channel Partner</h3>
        <img
          src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
          className="rounded w-100"
          alt=""
        />
        <div className="text-start mt-3">
        <h4>Commission Earned </h4>
          <Table bordered className="rounded">
              <thead>
                <tr className='bg-primary rounded'>
                  <td className='text-white'>Commision</td>
                  <td className='text-white'>Direct</td>
                  <td className='text-white'> Indirect</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INR 20,000/-</td>
                  <td>INR 5,000/-</td>
                  <td>INR 15,000/-</td>
                </tr>
              </tbody>
            </Table>
          <h4 className="text-primary">About Channel Partner :</h4>
          <p className="text-muted font-13 mb-3">
            Channel Partner is located in the outskirts of Nashik district and is
            spread in 8 Acres of land Channel Partner is located in the outskirts
            of Nashik district and is spread in 8 Acres of land
          </p>
          {/* <div className="d-flex">
            <Button
              className="btn btn-md btn-primary mb-3 rounded-pill w-50"
              onClick={() => setLgShow(true)}
            >
              About Me
            </Button>
            <Button
              className="btn btn-md btn-warning mb-3 ms-2 rounded-pill w-50"
              onClick={() => setLgShow2(true)}
              style={{ whiteSpace: "nowrap" }}
            >
              Subscription Status
            </Button>
          </div> */}
          <div>
            <h4>Users Types </h4>
            <Table bordered className="rounded">
              <thead>
                <tr className='bg-primary rounded'>
                  <td className='text-white'>User Type</td>
                  <td className='text-white'>Direct</td>
                  <td className='text-white'> Indirect</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Channel Partner</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Career Expert</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Channel Partner</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Class</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Teachers</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Schools</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <ul className="social-list list-inline mb-0 mt-3">
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-purple text-purple">
              <i className="mdi mdi-facebook"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-danger text-danger">
              <i className="mdi mdi-google"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-info text-info">
              <i className="mdi mdi-twitter"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="#"
              className="social-list-item border-secondary text-secondary"
            >
              <i className="mdi mdi-github"></i>
            </Link>
          </li>
        </ul>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg ">
              About All in one Garage
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-info">Garage Description</h4>
            <p>
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Channel Partner is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <p>
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Channel Partner is located in the outskirts
              of Nashik district and is spread in 8 Acres of land Channel Partner 
              is located in the outskirts of Nashik district and is spread in 8
              Acres of land Channel Partner is located in the outskirts of Nashik
              district and is spread in 8 Acres of land Channel Partner is located
              in the outskirts of Nashik district and is spread in 8 Acres of
              land Channel Partner is located in the outskirts of Nashik district
              and is spread in 8 Acres of land Channel Partner is located in the
              outskirts of Nashik district and is spread in 8 Acres of land
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land
            </p>
            <p>
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Channel Partner is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <h4 className="text-info">Garage Area</h4>
            <p>
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Channel Partner is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
            <p>
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Channel Partner is located in the outskirts
              of Nashik district and is spread in 8 Acres of land Channel Partner 
              is located in the outskirts of Nashik district and is spread in 8
              Acres of land Channel Partner is located in the outskirts of Nashik
              district and is spread in 8 Acres of land Channel Partner is located
              in the outskirts of Nashik district and is spread in 8 Acres of
              land Channel Partner is located in the outskirts of Nashik district
              and is spread in 8 Acres of land Channel Partner is located in the
              outskirts of Nashik district and is spread in 8 Acres of land
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land
            </p>
            <p>
              Channel Partner is located in the outskirts of Nashik district and is
              spread in 8 Acres of land Channel Partner is located in the outskirts
              of Nashik district and is spread in 8 Acres of land
            </p>
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow2}
          onHide={() => setLgShow2(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg " className='text-primary'>
              Subscription Status
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default UserBox;
