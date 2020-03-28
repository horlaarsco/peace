import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import ProjectsFile from "../components/Projects/projects";

const H6 = styled.h6`
  opacity: 0.9;
  color: #505050;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 1rem;
`;

const H5 = styled.h6`
  opacity: 0.99;
  color: #505050;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22px;
  cursor: pointer;
`;

const DETAILS = styled.p`
  opacity: 0.99;
  color: #505050;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 16px;
  margin: 0;
  cursor: pointer;
`;

const SCROLL = styled.div`
  overflow: scroll;
  max-height: 40vh;
`;

const HALF2 = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

function Projects() {
  const [images, setlistimages] = useState([]);

  const projects = ProjectsFile.map((item, index) => (
    <div key={index}>
      <H5 onClick={() => setlistimages(item.pictures)}>{item.name}</H5>
      <DETAILS style={{ margin: ".4rem 0 1rem 0" }}>
        View More Details
        <img src='./left-arrow.svg' style={{ marginLeft: ".3rem" }} alt='' />
      </DETAILS>
    </div>
  ));

  return (
    <div
      style={{ paddingTop: ".5rem", paddingRight: "0" }}
      id='bg'
      className='bg'
    >
      <div className='half1'>
        <h1>Project</h1>
        <H6>View each projects with documentations.</H6>

        <SCROLL>{projects}</SCROLL>
      </div>
      <HALF2 className='half2'>
        <Carousel images={images} />
      </HALF2>
    </div>
  );
}

export default Projects;
