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

          <ul className='mobheader'>
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
        </header>
      </div>
    );
  }
}

export default Header;
