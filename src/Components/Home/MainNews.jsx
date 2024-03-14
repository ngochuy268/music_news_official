import '../../css/style.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import news350_1 from '../../img/news-350x223-1.jpg';
import news350_2 from '../../img/news-350x223-2.jpg';
import news350_3 from '../../img/news-350x223-3.jpg';
import news350_5 from '../../img/news-350x223-5.jpg';
import news350_4 from '../../img/news-350x223-4.jpg';

import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';


function MainNews({ news, itemsPerPage }) {
    const items = Array.from({ length: 9 });

    // Phan trang 
    const [currentPage, setCurrentPage] = useState(0); // Số trang bắt đầu từ 0

    const pageCount = Math.ceil(news.length / itemsPerPage); // Tính số trang dựa trên số mục trên mỗi trang
  
    // Tính chỉ mục của tin tức bắt đầu và kết thúc trên trang hiện tại
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    // Lấy danh sách tin tức trên trang hiện tại
    const currentNews = news.slice(startIndex, endIndex);
  
    // Hàm xử lý khi chuyển đến trang mới
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
    
    return (
        <>
            <div className="main-news">
                <Container>
                    <Row>
                        <Col lg={9}>
                            <Row>
                                {currentNews.map((item, index) => (
                                <Col md={4} key={index}>
                                    <div className="mn-img">
                                    <img src={news350_1} />
                                    <div className="mn-title">
                                        <a href={item.link}>{item.name}</a>
                                    </div>
                                    </div>
                                </Col>
                                ))}
                            </Row>
                            <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
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