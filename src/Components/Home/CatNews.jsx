import '../../css/style.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function CatNews({ news, loading }) {

    
    if(loading) return;

    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
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
                    <h2>Pops</h2>
                    <Slider {...settings}>
                        {news.map((item, index) => (
                            <div key={Math.random(index)}>
                                <Col md={11}>
                                    <div className="cn-img">
                                        <img src={require(`../../img/${item.link_img}`)} alt="ahihi"/>
                                        <div className="cn-title">
                                            <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>  
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        ))}   
                    </Slider>              
                    <h2>Rocks</h2>
                    <Slider {...settings}>
                        {news.map((item, index) => (
                            <div key={Math.random(index)}>
                                <Col md={11}>
                                    <div className="cn-img">
                                        <img src={require(`../../img/${item.link_img}`)} alt="ahihi"/>
                                        <div className="cn-title">
                                            <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>  
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        ))}    
                    </Slider>                  
                </Row>
            </Container>
        </div>
    </>
    )
}

export default CatNews;