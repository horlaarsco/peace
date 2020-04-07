import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();

  const styleabout = {
    marginRight: 10,
    borderBottom: location.pathname === "/about" && "2px solid #fbc75d"
  };

  const stylehome = {
    marginRight: 10,
    borderBottom: location.pathname === "/" && "2px solid #fbc75d"
  };

  const styleprojects = {
    marginRight: 10,
    borderBottom: location.pathname === "/projects" && "2px solid #fbc75d"
  };

  const stylecontact = {
    marginRight: 10,
    borderBottom: location.pathname === "/contact" && "2px solid #fbc75d"
  };

  return (
    <div>
      <header>
        <Link to={"/"}>
          <img src='./logo.svg' alt='logo' />
        </Link>
        <ul className='deskheader'>
          <li>
            <Link style={stylehome} to={"/"}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link style={styleabout} to={"/about"}>
              {" "}
              About Me
            </Link>
          </li>
          <li>
            <Link style={styleprojects} to={"/projects"}>
              {" "}
              Projects
            </Link>
          </li>
          <li>
            <Link style={stylecontact} to={"/contact"}>
              {" "}
              Contact Me
            </Link>
          </li>
        </ul>
        <img className='ham' src='./ham.svg' alt='' onClick={myFunction} />{" "}
      </header>
      <ul id='navv' className='mobheader'>
        <li>
          <Link to={"/"} onClick={myFunction}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to={"/about"} onClick={myFunction}>
            {" "}
            About Me
          </Link>
        </li>
        <li>
          <Link to={"/projects"} onClick={myFunction}>
            {" "}
            Projects
          </Link>
        </li>
        <li>
          <Link to={"/contact"} onClick={myFunction}>
            {" "}
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

function myFunction() {
  var x = document.getElementById("navv");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
