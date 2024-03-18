import React, { useState } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import '../../css/style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function TopNews({ news, loading }){

    if(loading) return;

    console.log(news)
    // Random news with 4 news
    const slicedArray = news.slice(0, 4);
    const randomSort = () => Math.random() - 0.5;
    const shuffledArray = slicedArray.sort(randomSort);
    const randomNewsWith4News = shuffledArray.slice(0, 4);

    // Random news 
    const randomNews = news.sort(() => Math.random() - 0.5);
    
    // CSS arrow
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

    //   Slider
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
                            {randomNews.map((item,index) => (
                                <div key={Math.random(index)}>    
                                    <div className='tn-img'>
                                        <img src={require(`../../img/${item.link_img}`)} alt="news"/>
                                        <div className='tn-title'>
                                            <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>                                       
                                        </div>                                   
                                    </div>  
                                </div>
                            ))}
                        </Slider>
                    </Col>
                    <Col md={6} className='tn-right'>
                        <Row>
                            {randomNewsWith4News.map((item,index) => (
                            <Col md={6} key={Math.random(index)}>
                                <div className='tn-img'>
                                <img src={require(`../../img/${item.link_img}`)} alt={`News ${index+1}`} />
                                <div className='tn-title'>
                                    <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>
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
