import React from 'react'
import { Link } from "react-scroll/modules";
import style from "./SecondaryNavbar.module.css";
import logo from "../../../images/logo.png";

function SecondaryNavbar() {
  return (
    <nav className={style.wrapper}>
      <div className={style.container}>
        <div className={style.links}>
          <div className={style.left_content}>
            <img src={logo} alt={logo} />
            <p>Curly Curls</p>
          </div>
          <div className={style.right_content}>
            <Link to="introduction" spy={true} smooth={true} offset={-90} duration={500}>Home</Link>
            <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
            <Link to="products" spy={true} smooth={true} offset={-90} duration={500}>Products</Link>
            <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SecondaryNavbar