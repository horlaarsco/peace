import React, { Component, lazy, Suspense } from "react";
import Details from "./Details";
const Skills = lazy(() => import("./Skills"));

export class Background extends Component {
  render() {
    return (
      <div id='bg' className='bg'>
        <Details />
        <Suspense fallback={<h1>Loading....</h1>}>
          <Skills />
        </Suspense>
      </div>
    );
  }
}

export default Background;
