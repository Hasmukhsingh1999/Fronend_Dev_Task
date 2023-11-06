import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Featuring from "../Featuring/Featuring";
import Products from "../Products/Products";

import Upcoming from "../Products/Upcoming";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div >
      <Hero />
      <Featuring />
      <Products />
      <Upcoming />
    
    </div>
  );
};

export default Home;
