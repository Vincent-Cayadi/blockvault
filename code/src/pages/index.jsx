import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar-landing";
import landingDesign from "../components/images/landingDesign.svg";
import hexagon1 from "../components/images/landinghexagon1.svg";
import hexagon2 from "../components/images/landinghexagon2.svg";


const Index = () => {
  return (
    <>
        <div className="absolute bg-nord6 right-0 top-0 sm:hidden">
          <img src={landingDesign}/>
        </div>

        <div className="absolute top-16 sm:hidden">
          <img src={hexagon1}/>
        </div>

        <div className="hexagon">
          <img src={hexagon2}/>
        </div>
        <NavBar />
        <Hero/>
        <Footer/>
    </>
  );
};

export default Index;
