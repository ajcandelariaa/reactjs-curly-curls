import React from "react";
import Helmet from "react-helmet";
import Home from "../components/home/Home";
import MainNavbar from "../components/navbar/mainNavbar/MainNavbar";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Curly Curls</title>
      </Helmet>
      <MainNavbar />
      <Home />
    </div>
  );
}

export default HomePage;
