import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AboutText extends Component {
  render() {
    return (
      <div className='half1'>
        <h1>About Me</h1>
        <h6 className='h6'>
          Product Designer, Visual/Graphic Designer and Brand Analyst. Born in
          Lagos, Nigeria.
        </h6>
        <p>
          Hi My name is Adenekan Peace, I am a lover of pure human design
          derived from critical research and detailed implementation of compiled
          results. With a hot cup of coffee every morning and a chilled pet
          bottle of soda by noon, I tackle my daily design challenges hoping one
          day the experience being implemented in my designs can change the
          world. Yeah, I almost forgot my pack of Maryland cookies and the
          smooth feel of soft jazz music that takes me to another planet which
          charges my brain to its climax.
        </p>
        <p>
          Yes I am Peace, I am not weird, I am just a creator, a fierce creator
          of my own world of designs I can interact with. I build User Interface
          Designs, Photo-manipulations, Web banners, Graphics, Logos, Branding
          and many more, all to suit the visual of your user. You can simply
          call me the <strong>Minimal Enthusiast. </strong>
        </p>
        <div className='stuffs'>
          <Link className='view-project' to={"/projects"}>
            View Projects
          </Link>
          <a
            href='https://docs.google.com/document/d/1dSTUT40jnJyPefQhraUyB9M0YQHueaYc7MpVKVx9IZs/edit?usp=sharing'
            className='download-resume'
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
}

export default AboutText;
