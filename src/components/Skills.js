import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className='half2 pos-rel'>
        <div className='pos-abs yellow'>
          <img className='pos-rel ' src='./Bitmap-1.svg' alt='' />
          <p className='texts pos-abs ux'>UX Research</p>
        </div>
        <div className='pos-abs peach'>
          <img className='pos-rel' src='./Bitmap-2.svg' alt='' />
          <p className='texts pos-abs'>Wireframing and Prototyping</p>
        </div>
        <div className='pos-abs blue'>
          <img className='pos-rel' src='./Bitmap-3.svg' alt='' />
          <p className='texts pos-abs sorting'>
            Personas Mapping and card Sorting
          </p>
        </div>
        <div className='pos-abs pink'>
          <img className='pos-rel' src='./Bitmap-4.svg' alt='' />
          <p className='texts pos-abs'>Idea Validation</p>
        </div>
      </div>
    );
  }
}

export default Skills;
