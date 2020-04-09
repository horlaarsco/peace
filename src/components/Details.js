import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Details extends Component {
  render() {
    return (
      <div className='half1'>
        <h1>Hi, I am</h1> <h1>Adenekan Peace.</h1>
        <h6>
          Product Designer, Visual Designer and Brand Analyst, Lagos, Nigeria.
        </h6>
        <p>
          I believe design psychology and extensive/detailed research can be
          used to create stunning interfaces that users can easily interact with
          no matter the Design Technicality.
          <strong>I call it Conceptual Minimalism.</strong>
        </p>
        <div className='stuffs'>
          <Link className='view-project' to={"/projects"}>
            View Projects
          </Link>
          <a
            href='https://docs.google.com/document/d/1dSTUT40jnJyPefQhraUyB9M0YQHueaYc7MpVKVx9IZs/edit?usp=sharing'
            className='download-resume'
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Details;
