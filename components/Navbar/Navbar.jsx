import React from "react";
import Cartbtn from "./Cartbtn";
import Listitem from "./Listitem";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/src/assets/Logo.png" alt="logo" />
        </a>
        <ul className="nav-menu">
          <Listitem name="Female" />
          <Listitem name="Male" />
          <Listitem name="Kids" />
          <Listitem name="All Products" />
        </ul>
        <Searchbar />
        <Cartbtn />
      </div>
    </nav>
  );
};

export default Navbar;
