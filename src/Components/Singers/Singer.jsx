import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Singer({news, loading}) {

     // Params
    const { singerName } = useParams();
    // Loading new
    if(loading) return (
        <>
            <h1>Loading...</h1>        
        </>
    );

    // Setting slider
    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 2,
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
        ],
        
    }


    const singerFullName = news.filter(item => item.author.toLowerCase().replace(/\s+/g, '-') === singerName);
    const oneSingerName = news.find(item => item.author.toLowerCase().replace(/\s+/g, '-') === singerName);
    document.title = `${oneSingerName.author}`; 


    // Hàm chia mảng thành các mảng con với số lượng phần tử mong muốn
    function chunkArray(array, chunkSize) {
        const chunks = [];
        while (array.length > 0) {
        chunks.push(array.splice(0, chunkSize));
        }
        return chunks;
    }

    // Chia mảng thành các mảng con, mỗi mảng con lấy 2 phần tử
    const chunkedArrays = chunkArray([...singerFullName], 2);

    // Kiểm tra nếu mảng cuối cùng chỉ có một phần tử
    if (chunkedArrays.length > 0 && chunkedArrays[chunkedArrays.length - 1].length === 1) {
    // Lấy phần tử duy nhất của mảng cuối cùng
        const singleItem = chunkedArrays.pop()[0];

    // Chọn một mảng con bất kỳ để chèn phần tử duy nhất vào
        const randomIndex = Math.floor(Math.random() * chunkedArrays.length);
        chunkedArrays[randomIndex].push(singleItem);
    }

console.log(chunkedArrays);

    return (
        <div className="cat-singer-news" style={{margin: '40px 0'}}>
            <Container>
                <Row>                    
                    <h2>{oneSingerName.author}</h2>
                    {chunkedArrays.map(items => (                      
                        <Slider {...settings}  style={{margin: '30px 0'}}>
                            {items.map((item,index) => (                                               
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
                    ))}                                 
                </Row>
            </Container>
        </div>

    )
}

export default Singer;


 