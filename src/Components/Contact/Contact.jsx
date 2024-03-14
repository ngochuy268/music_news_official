import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/style.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React, {useEffect} from 'react';


function Contact(){

    useEffect(() => {
        document.title = "Contact us";
      }, []); // Mảng rỗng đảm bảo rằng code chỉ chạy một lần sau khi component được mount
    

    return (
        <>
            <div className="contact">
                <Container>
                    <Row className="align-items-center">
                        <Col md={8}>
                            <div className="contact-form">
                                <Form>
                                    <Row>
                                        <Form.Group as={Col} md="6">
                                            <Form.Control type="text" placeholder="Your Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Control type="email" placeholder="Your Email" />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control as="textarea" rows={5} placeholder="Message" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Send Message</Button>
                                </Form>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="contact-info">
                                <h3>Get in Touch</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.</p>
                                <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 News Street, NY, USA</h4>
                                <h4><FontAwesomeIcon icon={faEnvelope} /> info@example.com</h4>
                                <h4><FontAwesomeIcon icon={faPhone} /> +123-456-7890</h4>
                                <div className="social">
                                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
} 
export default Contact;