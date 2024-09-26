import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// Navbar
import { Navbar } from "./navbar";
//Jumbotron
import { Jumbotrom } from "./jumbotrom";
import Card from "./card";
// Footer
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotrom />
      <div className="d-flex container justify-content-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
