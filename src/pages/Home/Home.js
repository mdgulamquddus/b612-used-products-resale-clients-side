import React from "react";
import Advertise from "../../components/Advertise/Advertise";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category.js/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertise />
      <Category />
    </div>
  );
};

export default Home;
