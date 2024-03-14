import CatNews from "./CatNews";
import MainNews from "./MainNews";
import TopNews from "./TopNews";
import React, {useEffect} from 'react';


function HomePage({ news }) {

  useEffect(() => {
    document.title = "Home";
  }, []); // Mảng rỗng đảm bảo rằng code chỉ chạy một lần sau khi component được mount


  return <>
    <TopNews news={news} />
    <CatNews />
    {/* <MainNews news={news} itemsPerPage={10}/> */}
  </>;
}

export default HomePage;
