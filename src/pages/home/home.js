import React from "react";
import Navbar from "../../components/navbar/navbar";
import Hero from "./homecomponents/hero";
import Ourfeatures from "./homecomponents/ourfeature";
import Ourproducts from "./homecomponents/ourproduct";
import Ourcategories from './homecomponents/ourcategories';
import Review from "./homecomponents/review";
import Ourblogs from './homecomponents/ourblogs';
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <Ourfeatures></Ourfeatures>
      <Ourproducts></Ourproducts>
      <Ourcategories></Ourcategories>
      <Review></Review>
      <Ourblogs></Ourblogs>

      <Footer></Footer>
    </div>
  );
};

export default Home;
