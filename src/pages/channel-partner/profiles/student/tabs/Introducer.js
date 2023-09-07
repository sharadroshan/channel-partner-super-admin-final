import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';


const Introducer = () => {
  return (
    <>
      <Row>
        <Col>
            <Link to='/channel/channel-partner-profile'>
                    <Card className="bg-gradient-primary">
                        <Card.Body>
                            <h4 className="text-white">Introducer</h4>
                            <div className='d-flex justify-content-between'>
                                <h3 className="text-white m-0" style={{ fontSize: "35px" }}>
                                Shrikant Pawar
                                </h3>
                                <Button className='bg-white text-primary px-4 btn-sm rounded-pill'>
                                    View Profile
                                </Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Link>
        </Col>
      </Row>
      
    </>
  );
};

export default Introducer;
