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

const MDIV = styled.div`
  margin-top: 1rem;
`;

const HALF2 = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

let grey = {};

function Projects() {
  const [images, setlistimages] = useState([]);
  const [activeProject, setActiveProject] = useState(1);
  const [visibility, setVisibility] = useState(true);
  const [mvisibility, msetVisibility] = useState(true);

  function setCurrentProject(currentImages, currentProject) {
    setlistimages(currentImages);
    setActiveProject(currentProject);
  }

  function setCurrentProjectm(currentImages, currentProject) {
    setlistimages(currentImages);
    setActiveProject(currentProject);
    msetVisibility(false);
  }

  if (images.length > 1) {
    grey = { background: "#f2f2f2", padding: "2px 2px 2px 2rem" };
  }

  const projects = ProjectsFile.map(item => (
    <div
      style={
        item.key === activeProject ? grey : { padding: "2px 2px 2px 2rem" }
      }
      key={item.key}
    >
      <H5 onClick={() => setCurrentProject(item.pictures, item.key)}>
        {item.name}
      </H5>
      <DETAILS style={{ margin: "6px 0 0 0" }}>
        View More Details
        <img src='./left-arrow.svg' style={{ marginLeft: ".3rem" }} alt='' />
      </DETAILS>
    </div>
  ));

  const projectM = ProjectsFile.map(item => (
    <div
      style={
        item.key === activeProject ? grey : { padding: "2px 2px 2px 2rem" }
      }
      key={item.key}
    >
      <H5 onClick={() => setCurrentProjectm(item.pictures, item.key)}>
        {item.name}
      </H5>
      <DETAILS style={{ margin: "6px 0 0 0" }}>
        View More Details
        <img src='./left-arrow.svg' style={{ marginLeft: ".3rem" }} alt='' />
      </DETAILS>
    </div>
  ));

  return (
    <div
      style={{ paddingTop: ".5rem", paddingRight: "0", paddingLeft: "0" }}
      id='bg'
      className='bg'
    >
      <div className='half1'>
        <h1 style={{ paddingLeft: "2rem" }}>Project</h1>
        <H6 style={{ paddingLeft: "2rem" }}>
          View each projects with documentations.
        </H6>

        <SCROLL id='desktop'>{projects} </SCROLL>
        <MDIV id='mobile'>{projectM}</MDIV>
      </div>
      <HALF2 className='half2 '>
        <Carousel
          images={images}
          setVisibility={setVisibility}
          visibility={visibility}
          msetVisibility={msetVisibility}
          mvisibility={mvisibility}
        />
      </HALF2>
    </div>
  );
}

export default Projects;
