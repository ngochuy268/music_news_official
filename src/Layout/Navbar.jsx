import "../css/style.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Navbarfunc() {

  //Stick the navbar when scroll down
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after component mount

  return <>
    <div className={`nav-bar ${isSticky ? 'nav-sticky' : ''}`}>
      <Container>
          <Navbar className='nav-bar navbar-dark' expand="md">
            <Navbar.Brand href="#" className='navbar-brand'>MENU</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />

          <Navbar.Collapse id="navbarCollapse" className="justify-content-between">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" className="nav-item nav-link">Home</Nav.Link>
              <NavDropdown title="POPS" id="basic-nav-dropdown" className="nav-item">
                <NavDropdown.Item href="#" className="dropdown-item">Sub Item 1</NavDropdown.Item>
                <NavDropdown.Item href="#" className="dropdown-item">Sub Item 2</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link as={Link} to="/news"  className="nav-item nav-link">News</Nav.Link> */}
              <Nav.Link as={Link} to="/contact" className="nav-item nav-link">Contact Us</Nav.Link>
            </Nav>
            <div className='social ml-auto'>
              <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.facebook.com/profile.php?id=61557446814240"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </Navbar.Collapse>
          </Navbar>
      </Container>
    </div>
  </>;
}

export default Navbarfunc;
