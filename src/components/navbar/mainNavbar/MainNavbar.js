import React from "react";
import { Link } from "react-scroll/modules";
import style from "./MainNavbar.module.css";
import logo from "../../../images/logo.png";


function MainNavbar() {
  return (
    <nav className={style.container}>
      <div className={style.links}>
        <i className="fa-solid fa-circle"></i>
        <Link to="introduction" spy={true} smooth={true} offset={-90} duration={500}>Home</Link>
        <i className="fa-solid fa-circle"></i>
        <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
        <i className="fa-solid fa-circle"></i>
        <Link to="products" spy={true} smooth={true} offset={-90} duration={500}>
          <img src={logo} alt={logo} className={style.image_logo} />
        </Link>
        <i className="fa-solid fa-circle"></i>
        <Link to="products" spy={true} smooth={true} offset={-90} duration={500}>Products</Link>
        <i className="fa-solid fa-circle"></i>
        <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link>
        <i className="fa-solid fa-circle"></i>
      </div>
    </nav>
  );
}

export default MainNavbar;
