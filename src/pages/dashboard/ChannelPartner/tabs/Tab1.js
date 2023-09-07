import React, {useState} from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tab1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <div className="table-responsive">
            <Table hover className="m-0">
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Email Title </th>
                  <th>Email Date </th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4" onClick={handleShow}>View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4" onClick={handleShow}>View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4" onClick={handleShow}>View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4" onClick={handleShow}>View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4" onClick={handleShow}>View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4" onClick={handleShow}>View</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vanessa</td>
                  <td>01 Sep 2022</td>
                  <td>Delivered</td>
                  <td>
                    <Button className="btn-sm rounded-pill px-4" onClick={handleShow}>View</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between">
            <h5 className="text-primary">Email Title</h5>
            <h5>Vanesaa</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="text-primary">Email  Date</h5>
            <h5>20 Sep 2022</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="text-primary">Email Status</h5>
            <h5>Delivered</h5>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tab1;
