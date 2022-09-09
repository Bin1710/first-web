import React, { useState } from "react";
import Header from "../Header";
import Banner from "../Banner/banner";
import Footer from "../Footer";
import Body from "../Body/body";
import "./index.css";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Body/>
      <Footer/>
    </div>
  );
}
export default Home;
