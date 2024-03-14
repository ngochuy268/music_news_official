import "../../../css/style.css";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <>
      <div className='top-bar'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='tb-contact'>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> info@mail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +012 345 6789
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className='tb-menu'>
                <a href="#">About</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
              </div>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <h1 className="main-title">Legendary Vibes</h1>
        </Row>
      </Container>
    </>
  );
}

export default TopBar;
