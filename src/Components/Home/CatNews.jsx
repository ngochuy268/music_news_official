import '../../css/style.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import news350_1 from '../../img/news-350x223-1.jpg';


function CatNews() {

    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1 }
        }
        ]
    }

    return (<>
        <div className="cat-news">
            <Container>
                <Row>
                    
                    <h2>Sports</h2>
                    <Slider {...settings}>
                        <div>
                            <Col md={11}>
                                <div className="cn-img">
                                    <img src={news350_1} alt="News 1" />
                                    <div className="cn-title">
                                    <a href="#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div>
                            <Col md={11}>
                                <div className="cn-img">
                                    <img src={news350_1} alt="News 1" />
                                    <div className="cn-title">
                                    <a href="#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div>
                            <Col md={11}>
                                <div className="cn-img">
                                    <img src={news350_1} alt="News 2" />
                                    <div className="cn-title">
                                    <a href="#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div>
                            <Col md={11}>
                                <div className="cn-img">
                                    <img src={news350_1} alt="News 3" />
                                    <div className="cn-title">
                                    <a href="#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Slider>
                
                    <h2>Sports</h2>
                    <Slider {...settings}>
                    <div>
                            <Col md={11}>
                                <div className="cn-img">
                                    <img src={news350_1} alt="News 1" />
                                    <div className="cn-title">
                                    <a href="#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div>
                            <Col md={11}>
                            <div className="cn-img">
                                <img src={news350_1} alt="News 1" />
                                <div className="cn-title">
                                <a href="#">Lorem ipsum dolor sit</a>
                                </div>
                            </div>
                            </Col>
                        </div>
                        <div>
                            <Col md={11}>
                            <div className="cn-img">
                                <img src={news350_1} alt="News 2" />
                                <div className="cn-title">
                                <a href="#">Lorem ipsum dolor sit</a>
                                </div>
                            </div>
                            </Col>
                        </div>
                        <div>
                            <Col md={11}>
                            <div className="cn-img">
                                <img src={news350_1} alt="News 3" />
                                <div className="cn-title">
                                <a href="#">Lorem ipsum dolor sit</a>
                                </div>
                            </div>
                            </Col>
                        </div>
                    </Slider>
                    
                </Row>
            </Container>
        </div>
    </>
    )
}

export default CatNews;