import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/05/89/10/05891062-2669-8c69-45c7-2b8dfc091380/App_Icon-marketing.lsr/1200x630bb.png"
          alt="logo"
        />
      </div>

      <div className="home-page">
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}

export default Navbar;
