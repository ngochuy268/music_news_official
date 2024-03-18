import CatNews from "./CatNews";
import MainNews from "./MainNews";
import TopNews from "./TopNews";
import React, {useEffect} from 'react';


function HomePage({ news, loading }) {

  useEffect(() => {
    document.title = "Home";
  }, []); // Mảng rỗng đảm bảo rằng code chỉ chạy một lần sau khi component được mount


  return <>
    <TopNews news={news} loading={loading}/>
    <CatNews news={news} loading={loading}/>
    {/* <MainNews news={news} itemsPerPage={10}/> */}
  </>;
}

export default HomePage;
