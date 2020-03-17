import React, { Component } from "react";
import AboutText from "./AboutText";
import Peace from "./Peace";

export class About extends Component {
  render() {
    return (
      <div className='bg'>
        <AboutText />
        <Peace />
      </div>
    );
  }
}

export default About;
