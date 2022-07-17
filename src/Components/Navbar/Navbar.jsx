import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div id="nav_container">
      <nav id="nav_inner">
        <div id="logo">
          Nel<span>zee</span>
        </div>
        <ul id="nav_items">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about_me">about me</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact_me">contact me</a>
          </li>
          <li>
            <a href="#more_info">more info</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
