import React, { Component } from "react";
import Details from "./Details";
import Skills from "./Skills";

export class Background extends Component {
  render() {
    return (
      <div id='bg' className='bg'>
        <Details />
        <Skills />
      </div>
    );
  }
}

export default Background;
