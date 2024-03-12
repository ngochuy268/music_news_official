import { Routes, Route } from "react-router-dom";
import React, { useEffect }from "react";
import Layout from "./Layout/index";
import HomePage from "./Components/Home/HomePage";
import Contact from './Components/Contact/Contact';
import News from "./Components/News/News";

function App() {
  useEffect(() => {
    document.title = "Tiêu Đề Mới Của Bạn";
  }, []); // Mảng rỗng đảm bảo rằng code chỉ chạy một lần sau khi component được mount

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        <link href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet"/>

      </head>

      <body>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Routes>
      </body>
    </>
  );
}

export default App;
