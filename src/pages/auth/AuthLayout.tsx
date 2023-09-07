import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import LogoDark from '../../assets/images/logo.png';
import LogoLight from '../../assets/images/logo.png';

interface AccountLayoutProps {
    helpText?: string;
    bottomLinks?: any;
    isCombineForm?: boolean;
    children?: any;
}

const AuthLayout = ({ helpText, bottomLinks, children, isCombineForm }: AccountLayoutProps) => {
    return (
        <>
            <div className="account-pages mt-5 mb-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={isCombineForm ? 9 : 4}>
                            <Card>
                                <Card.Body className="p-4">
                                    <div className="text-center w-75 m-auto">
                                        <div className="auth-logo">
                                            <Link to="/" className="logo logo-dark text-center">
                                                <span className="logo-lg">
                                                    <img src={LogoDark} alt="" height="100" />
                                                    <h3 className="text-primary mb-0">Channel Partner</h3>
                                                    <h4 className="text-dark mt-0">Super Admin</h4>
                                                </span>
                                            </Link>

                                            <Link to="/" className="logo logo-light text-center">
                                                <span className="logo-lg">
                                                    <img src={LogoLight} alt="" height="100" />
                                                    <h3 className="text-primary mb-0">Channel Partner</h3>
                                                    <h4 className="text-dark mt-0">Super Admin</h4>
                                                </span>
                                            </Link>
                                        </div>
                                        {helpText && <p className="text-muted mb-4 mt-3">{helpText}</p>}
                                    </div>
                                    {children}
                                </Card.Body>
                            </Card>

                            {/* bottom links */}
                            {bottomLinks}
                        </Col>
                    </Row>
                </Container>
            </div>
{/* 
            <footer className="footer footer-alt">
                {new Date().getFullYear()} &copy; Minton theme by{' '}
                <Link to="#" className="text-dark">
                    Coderthemes
                </Link>
            </footer> */}
        </>
    );
};

export default AuthLayout;
