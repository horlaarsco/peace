import React, { Component } from "react";

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
          used to create stunning interfaces that user can easily interact with
          user no matter the Design Techniclaity.{" "}
          <strong>I call it Conceptual Minimalism.</strong>
        </p>
        <div className='stuffs'>
          <a className='view-project' href=''>
            View Project
          </a>
          <a href='' className='download-resume'>
            Download Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Details;
