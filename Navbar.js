import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="braking">
        <img src={"../back.png"} />
      </div>

      <div className="content">
        <div className="ok">
          {" "}
          <Link className="set" to="/">
            Home
          </Link>
        </div>
        <div className="ok">
          {" "}
          <Link className="set" to="/About">
            About
          </Link>
        </div>
        <div className="ok">
          {" "}
          <Link className="set" to="/Contect">
            Contect
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
