import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ListGroup } from 'react-bootstrap';

import news825 from '../../img/news-825x525.jpg';
import news350_1 from '../../img/news-350x223-1.jpg';
import news350_2 from '../../img/news-350x223-2.jpg';
import news350_3 from '../../img/news-350x223-3.jpg';
import news350_4 from '../../img/news-350x223-4.jpg';


function News() {

  const newsItems = [
    { src: news350_1, title: "Lorem ipsum dolor sit amet consec adipis elit" },
    { src: news350_2, title: "Lorem ipsum dolor sit amet consec adipis elit" },
    { src: news350_3, title: "Lorem ipsum dolor sit amet consec adipis elit" },
    { src: news350_4, title: "Lorem ipsum dolor sit amet consec adipis elit" },
  ];

  const settings = {
    // autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

    return <>
      <div className="single-news">
        <Container>
          <Row>
            <Col lg={8}>
            <div className="sn-container">
              <div className="sn-img">
                <img src={news825} alt="News" />
              </div>
              <div className="sn-content">
                <h1 className="sn-title">Lorem ipsum dolor sit amet</h1>
                <p>
                  Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio. Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien libero, bibendum nec viverra in, iaculis ut eros.
                </p>
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
            </div>
            <div className="sn-related">
              <h2>Related News</h2>
                <Slider {...settings}>
                  <div className="sn-related-news">
                      <img src={news350_1} alt="Related News 1" />
                      <div className="sn-title"><a href="#">Interdum et fames ac ante</a></div>
                  </div>
                  <div className="sn-related-news">
                      <img src={news350_2} alt="Related News 1" />
                      <div className="sn-title"><a href="#">Interdum et fames ac ante</a></div>
                  </div>
                  <div className="sn-related-news">
                      <img src={news350_3} alt="Related News 1" />
                      <div className="sn-title"><a href="#">Interdum et fames ac ante</a></div>
                  </div>
                  <div className="sn-related-news">
                      <img src={news350_4} alt="Related News 1" />
                      <div className="sn-title">
                        <a href="#">Interdum et fames ac ante</a>
                      </div>
                  </div>
                </Slider>
            </div>
            </Col>
            <Col lg={4}>
                <div className="sidebar">            
                    <div className="sidebar-widget">
                      <h2 class="sw-title">In This Category</h2>
                      <div class="news-list">
                        <>
                          {newsItems.map((item, index) => (
                            <div class="nl-item" key={index}>
                              <div class="nl-img" key={index}>
                                  <img src={item.src} />
                              </div>
                              <div class="nl-title" key={index}>
                                  <a href="">{item.title}</a>
                              </div>
                            </div>
                          ))}
                        </>
                      </div>
                    </div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>;
  }
  
  export default News;