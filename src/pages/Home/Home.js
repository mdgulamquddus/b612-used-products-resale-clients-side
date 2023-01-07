import React from "react";
import Advertise from "../../components/Advertise/Advertise";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category.js/Category";
import ContactForm from "../../components/ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertise />
      <Category />
      <ContactForm />
    </div>
  );
};

export default Home;
