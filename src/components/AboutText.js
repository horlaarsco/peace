import React, { Component } from "react";

export class AboutText extends Component {
  render() {
    return (
      <div className='half1'>
        <h1>About Me</h1>
        <h6>
          A 2 year + Product Designer, Visual/Graphic Designer and Brand
          Analyst. Born in Lagos, Nigeria.
        </h6>
        <p>
          Hi My name is Adenekan Peace, I am a lover of pure human design
          derieved from critical reasearch and detailed implementation of
          compiled result. With a hot cup of coffee every morning and a chilled
          pet bottle of soda by noon, I tackle my daily design challenge hoping
          one day the experince being implemented in my designs can change the
          world. Yeah I almost forgot my pack of maryland cookies and the soomth
          feel of soft jazz music that takes me to another planet and charge my
          brain to climax.
        </p>
        <p>
          Yes I am Peace, I am not wierd, I am just a creator, a firece creator
          of my own world of design I can interact with. I build User Interface
          Designs, Photomanipulations, Web banners, Graphics, Logos, Branding
          and many more, all to suit the visual of your user. A trial can be
          convincing enough.
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

export default AboutText;
