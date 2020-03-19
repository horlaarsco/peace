import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src='./logo.svg' alt='logo' />
          <ul className='deskheader'>
            <li>
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/about"}> About Me</Link>
            </li>
            <li>
              <Link to={"/projects"}> Projects</Link>
            </li>
            <li>
              <Link to={"/contact"}> Contact Me</Link>
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
