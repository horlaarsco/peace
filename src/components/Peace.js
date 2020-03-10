import React, { Component } from "react";

export class Peace extends Component {
  render() {
    return (
      <div className='half2' style={{ position: "relative" }}>
        <img style={style} src='./peace.svg' alt='' />
      </div>
    );
  }
}

export default Peace;

let style = {
  "z-index": "-1",
  position: "absolute",
  overflow: "hidden",
  bottom: "0",
  height: "80%"
};
