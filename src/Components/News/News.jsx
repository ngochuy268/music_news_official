import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import YouTube from 'react-youtube';


import news825 from '../../img/THRILLER_michael_Jackson.jpg';
import news350_1 from '../../img/news-350x223-1.jpg';
import news350_2 from '../../img/news-350x223-2.jpg';
import news350_3 from '../../img/news-350x223-3.jpg';
import news350_4 from '../../img/news-350x223-4.jpg';


function News({ news, loading }) {

  const { articleTitle } = useParams();

  // Đợi load dữ liệu news
  if (loading) {
    return ;
  }

  const article = news.find(item => item.name.toLowerCase().replace(/\s+/g, '-') === articleTitle);
    
    document.title = `${article.name}`; 


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

  // Youtube
  const videoId = article.link_video;

  const opts = {
    height: '640',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

    return <>
      <div className="single-news">
        <Container>
          <Row>
            <Col lg={8}>
            <div className="sn-container">
            <h1 className="sn-title">{article.name}</h1>
              <div className="sn-img">
                <img src={news825} alt="News" />
              </div>
              <div className="sn-content">
                
                <pre style={{whiteSpace: 'pre-wrap',wordWrap: 'break-word'}}>
                  {article.content}
                </pre>
                <h3>Link video</h3>
                <YouTube videoId={videoId} opts={opts} />
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
                      <h2 className="sw-title">In This Category</h2>
                      <div className="news-list">
                        <>
                          {newsItems.map((item, index) => (
                            <div className="nl-item" key={index}>
                              <div className="nl-img" key={index}>
                                  <img src={item.src} />
                              </div>
                              <div className="nl-title" key={index}>
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