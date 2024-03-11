import '../../css/style.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import news350_1 from '../../img/news-350x223-1.jpg';
import news350_2 from '../../img/news-350x223-2.jpg';
import news350_3 from '../../img/news-350x223-3.jpg';
import news350_5 from '../../img/news-350x223-5.jpg';
import news350_4 from '../../img/news-350x223-4.jpg';

function MainNews() {
    const items = Array.from({ length: 9 });

    return (
        <>
            <div className="main-news">
                <Container>
                    <Row>
                        <Col lg={9}>
                            <Row>
                                <>   
                                    {items.map((_,index) => (
                                        <Col md={4} key={index}>
                                            <div className="mn-img">
                                                <img src={news350_1}/>
                                                <div className="mn-title">
                                                    <a href="">Lorem ipsum dolor sit</a>
                                                </div>
                                            </div>
                                        </Col>                                   
                                    ))}
                                </>
                            </Row>
                        </Col>

                        <Col lg={3}>
                            <div className="mn-list">
                                <h2>Read More</h2>
                                <ul>
                                    <li><a href="https://www.google.com.vn/?hl=vi">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="">Pellentesque tincidunt enim libero</a></li>
                                    <li><a href="">Morbi id finibus diam vel pretium enim</a></li>
                                    <li><a href="">Duis semper sapien in eros euismod sodales</a></li>
                                    <li><a href="">Vestibulum cursus lorem nibh</a></li>
                                    <li><a href="">Morbi ullamcorper vulputate metus non eleifend</a></li>
                                    <li><a href="">Etiam vitae elit felis sit amet</a></li>
                                    <li><a href="">Nullam congue massa vitae quam</a></li>
                                    <li><a href="">Proin sed ante rutrum</a></li>
                                    <li><a href="">Curabitur vel lectus</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default MainNews;