import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Home from "../components/home/Home";
import MainNavbar from "../components/navbar/mainNavbar/MainNavbar";
import SecondaryNavbar from "../components/navbar/secondaryNavbar/SecondaryNavbar";

function HomePage() {
  const [navbar, setNavbar] = useState(false);
  
  const changeNavbar = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    changeNavbar();
    window.addEventListener("scroll", changeNavbar);
  })

  return (
    <div>
      <Helmet>
        <title>Curly Curls</title>
      </Helmet>
      {
        navbar ? <SecondaryNavbar /> : <MainNavbar />
      }
      <Home />
    </div>
  );
}

export default HomePage;
