import React, { useContext, useEffect, useState } from "react";
import { getRole } from "../../api/users";
import Advertise from "../../components/Advertise/Advertise";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category.js/Category";
import ContactForm from "../../components/ContactForm/ContactForm";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  console.log(role);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <div>
      <Banner />
      <Advertise />
      {role === "admin" && ""}
      {role === "Buyer" && (
        <>
          <Category />
          <ContactForm />
        </>
      )}
      {role === "Seller" && <ContactForm />}
      {role === null && (
        <>
          <Category />
          <ContactForm />
        </>
      )}
    </div>
  );
};

export default Home;
