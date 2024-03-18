import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';


function News({ news, loading }) {

  // Params
  const { articleTitle } = useParams();

  // Đợi load dữ liệu news
  if (loading) {
    return ;
  }

   // Random news with 5 news
   const slicedArray = news.slice(0, 5);
   const randomSort = () => Math.random() - 0.5;
   const shuffledArray = slicedArray.sort(randomSort);
   const randomNews = shuffledArray.slice(0, 4);

  const article = news.find(item => item.name.toLowerCase().replace(/\s+/g, '-') === articleTitle);
  document.title = `${article.name}`; 

  // Slider
  const settings = {
    autoplay: true,
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
                <img src={require(`../../img/${article.link_img}`)} alt="News" />
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
                  {randomNews.map((item, index) => (
                    <div className="sn-related-news" key={Math.random(index)}>
                      <img src={require(`../../img/${item.link_img}`)} alt={item.name} />
                      <div className="sn-title">
                        <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>
                      </div>
                    </div>
                  ))}
                </Slider>
            </div>
            </Col>
            <Col lg={4}>
                <div className="sidebar">            
                    <div className="sidebar-widget">
                      <h2 className="sw-title">In This Category</h2>
                      <div className="news-list">
                        <>
                          {randomNews.map((item, index) => (
                            <div className="nl-item" key={Math.random(index)}>
                              <div className="nl-img" key={Math.random(index)}>
                                  <img src={require(`../../img/${item.link_img}`)} />
                              </div>
                              <div className="nl-title" key={Math.random(index)}>
                                <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>
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