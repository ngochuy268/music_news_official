import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState }from "react";
import Layout from "./Layout/index";
import HomePage from "./Components/Home/HomePage";
import Contact from './Components/Contact/Contact';
import News from "./Components/News/News";
import ScrollToTopButton from "./ScrollToTop";

function App() {
 
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Gửi yêu cầu GET đến API endpoint để lấy dữ liệu tin tức từ backend
    fetch('http://localhost:8081/pop_music')
      .then(response => response.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error); 
        setLoading(false);
      });
  }, []); // useEffect sẽ chỉ chạy một lần sau khi component được mount


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage news={news}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:articleTitle" element={<News news={news} loading={loading}/>} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
