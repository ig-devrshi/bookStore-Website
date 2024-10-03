import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Carousal from "../components/Carousal";
import FAQ from "../components/FAQ";
import Mock from "../components/Mock";
import Stats from "../components/Stats";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Stats />
      <FAQ />
      <Carousal />
      <Mock />
      <Footer />
    </>
  );
}

export default Home;
