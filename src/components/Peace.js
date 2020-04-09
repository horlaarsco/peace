import React, { Component } from "react";

export class Peace extends Component {
  render() {
    return (
      <div
        className='half2'
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "flex-end"
        }}
      >
        <img
          id='peace'
          src='https://res.cloudinary.com/horlaarsco/image/upload/q_auto:eco/v1586308638/Peace/peace.svg'
          alt=''
        />
      </div>
    );
  }
}

export default Peace;
