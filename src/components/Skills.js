import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className='half2 pos-rel ' id='cardss'>
        <div className='pos-abs yellow'>
          <img
            className='pos-rel '
            src='https://res.cloudinary.com/horlaarsco/image/upload/q_auto:eco/v1586460594/Peace/Bitmap-1.png'
            alt=''
          />
          <p className='texts pos-abs ux'>UX Research</p>
        </div>
        <div className='pos-abs peach'>
          <img
            className='pos-rel'
            src='https://res.cloudinary.com/horlaarsco/image/upload/q_auto:eco/v1586460738/Peace/Bitmap-2.png'
            alt=''
          />
          <p className='texts pos-abs'>Wireframing and Prototyping</p>
        </div>
        <div className='pos-abs blue'>
          <img
            className='pos-rel'
            src='https://res.cloudinary.com/horlaarsco/image/upload/q_auto:eco/v1586460739/Peace/Bitmap-3.png'
            alt=''
          />
          <p className='texts pos-abs sorting'>
            Personas Mapping and card Sorting
          </p>
        </div>
        <div className='pos-abs pink'>
          <img
            className='pos-rel'
            src='https://res.cloudinary.com/horlaarsco/image/upload/q_auto:eco/v1586460737/Peace/Bitmap-4.png'
            alt=''
          />
          <p className='texts pos-abs'>Idea Validation</p>
        </div>
      </div>
    );
  }
}

export default Skills;
