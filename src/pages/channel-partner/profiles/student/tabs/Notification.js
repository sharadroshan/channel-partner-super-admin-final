import React from "react";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { FormInput } from "../../../../../components/form";

function Notification() {
  return (
    <>
      <h4>Send notification to user </h4>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-3 text-primary">Personal Details</h4>
          <Row>
            <Form.Group as={Col} md={12} sm={12} className="mb-2">
              <Form.Label>Notificantion Title</Form.Label>
              <Form.Select defaultValue="Select Notificantion Options">
                <option>Notificantion Options 1</option>
                <option>Notificantion Options 2</option>
                <option>Notificantion Options 3</option>
                <option>Notificantion Options 4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md={12} sm={12} className="mb-2">
              <Form.Label>Notificantion Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Notificantion Title"
              />
            </Form.Group>
            <Form.Group as={Col} md={12} sm={12} className="mb-2">
              <Form.Label>Notificantion Message</Form.Label>
              <FormInput
                type="textarea"
                name="textarea"
                rows={4}
                key="textarea"
                placeholder='Enter Notificantion Message'
              />
            </Form.Group>
            <Form.Group as={Col} md={12} sm={12} className="mb-2 mt-4">
              <Button>Send Notification</Button>
            </Form.Group>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default Notification;
