import React, { Fragment } from "react";
import TopNavbar from "../../Coponents/Header/TopNavbar";


// import LatestProducts from "../../Coponents/Product/LatestProducts";
import Footer from "../../Coponents/Footer/Footer";
import AllProducts from "../Products/AllProducts";
import AllCategories from "../../Coponents/Categoties/AllCategories";
function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <AllProducts/>
  
      <AllCategories />
     {/* <LatestProducts />*/}
     
    </Fragment>
  );
}

export default Home;