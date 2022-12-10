import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";
import Slider from "./components/Slider";
const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
