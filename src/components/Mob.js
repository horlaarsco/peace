import React from "react";

function Mob() {
  return (
    <div className='pos-rel'>
      <div className='pos-abs  yellows'>
        <img className='  ' src='./Bitmap-1.svg' alt='' />
        <p className='texts   ux'>UX Research</p>
      </div>
      <div className=' pos-abs peachs'>
        <img className=' ' src='./Bitmap-2.svg' alt='' />
        <p className='texts  '>Wireframing and Prototyping</p>
      </div>
      <div className='pos-abs  blues'>
        <img className=' ' src='./Bitmap-3.svg' alt='' />
        <p className='texts   sorting'>Personas Mapping and card Sorting</p>
      </div>
      <div className=' pos-abs pinks'>
        <img className=' ' src='./Bitmap-4.svg' alt='' />
        <p className='texts  '>Idea Validation</p>
      </div>
    </div>
  );
}

export default Mob;
