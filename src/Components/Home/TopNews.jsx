import React, { useState } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import '../../css/style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import news1 from '../../img/news-450x350-1.jpg';
import news2 from '../../img/news-450x350-2.jpg';
import news350_1 from '../../img/news-350x223-1.jpg';
import news350_2 from '../../img/news-350x223-2.jpg';
import news350_3 from '../../img/news-350x223-3.jpg';
import news350_4 from '../../img/news-350x223-4.jpg';


function TopNews(){

    const NextArrow = ({ onClick }) => (
        <div className='arrow next' onClick={onClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      );
      
      const PrevArrow = ({ onClick }) => (
        <div className='arrow prev' onClick={onClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      );
    
    const tnSlider = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow /> ,
        nextArrow: <NextArrow />
      };

    return <>  
        <div className='top-news'>
            <Container>
                <Row>
                    <Col md={6} className='tn-left'>
                        <Slider {...tnSlider}>
                            <div>                                                          
                                <div className='tn-img'>
                                    <img src={news2} alt="news"/>
                                    <div className='tn-title'>
                                        <a href="#">Integer hendrerit elit eget purus sodales maximus</a>
                                    </div>
                                </div>                                   
                            </div>
                            <div>    
                                <div className='tn-img'>
                                    <img src={news1} alt="news"/>
                                    <div className='tn-title'>
                                        <a href="#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>  
                            </div>
                        </Slider>
                    </Col>
                    <Col md={6} className='tn-right'>
                        <Row>
                            {[news350_1, news350_2, news350_3, news350_4].map((item,index) => (
                            <Col md={6} key={item}>
                                <div className='tn-img'>
                                <img src={item} alt={`News ${index+1}`} />
                                <div className='tn-title'>
                                    <a href="#">Lorem ipsum dolor sit</a>
                                </div>
                                </div>
                            </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}
export default TopNews;
