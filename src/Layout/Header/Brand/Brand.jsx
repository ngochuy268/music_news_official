import "../../../css/style.css";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../img/logo.png";
import ads_1 from "../../../img/ads-1.jpg";

function Brand() {
  return (
    <>
      <div className='brand'>
        <Container>
          <Row className="align-items-center">
            <Col lg={3} md={4}>
              <div className='b-logo'>
                <a href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </Col>
            <Col lg={6} md={4}>
              <div className='b-ads'>
                <a href="https://htmlcodex.com">
                  <img src={ads_1} alt="Ads" />
                </a>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className='b-search'>
                <input type="text" placeholder="Search" />
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Brand;
