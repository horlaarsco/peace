import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

export class Contact extends Component {
  render() {
    return (
      <div className='bg'>
        <div className='half1 contact-me'>
          <h1>Contact Me</h1>
          <p style={p}>Get in touch with me via Ifepeace@rocketmail.com</p>
          <p style={p2}>On social media </p>

          <Social />

          <form action=''>
            <input type='text' name='name' placeholder='Name' />
            <input
              type='text'
              name='contact'
              placeholder='Email or Mobile Number
'
            />
            <textarea
              name='message'
              placeholder='Comment'
              id='message'
              cols='30'
              rows='10'
            />
          </form>
          <div className='stuffs' style={styles}>
            <a className='view-project margin' href='/'>
              Send Message
            </a>

            <Link className='download-resume margin' to={"/projects"}>
              View Projects
            </Link>
          </div>
        </div>
        <div className='half2 contacts'>
          <img className='contact' src='./contaccct.svg' alt='' />
        </div>
      </div>
    );
  }
}

export default Contact;

let p = {
  color: "#827307",
  marginRight: "0",
  marginTop: ".5rem"
};

let p2 = {
  color: "#827307",
  marginTop: "0"
};

let styles = {
  justifyContent: "space-between"
};
