import React, { useState } from "react";
import styled from "styled-components";
import CarouselComponent from "../components/CarouselComponent";
import CarouselComponentBig from "../components/CarouselComponentBig";

const MODALCONTENT = styled.div`
  background: transparent;
  border: none;
  margin: auto;
  padding: 5px;
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MMODALCONTENT = styled.div`
  background: transparent;
  border: none;
  margin-top: 10%;
  padding: 5px;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

const MODAL = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const MMODAL = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const CLOSE = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const BUTTON = styled.button`
  text-align: center;
  padding: 10px;
  border: 1px solid white;
  background: transparent;
`;

function Carousel({
  images,
  visibility,
  setVisibility,
  mvisibility,
  msetVisibility
}) {
  return (
    <>
      <div id='mobile'>
        <CarouselComponent images={images} setVisibility={setVisibility} />
        <MMODAL
          style={mvisibility ? { display: "none" } : { display: "block" }}
        >
          <DIV>
            <MMODALCONTENT>
              <div className='modalRe' style={{ height: "95%" }}>
                <CLOSE onClick={() => msetVisibility(true)}>
                  {" "}
                  <svg
                    height='20pt'
                    viewBox='0 0 329.26933 329'
                    width='20pt'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g fill='#f44336'>
                      <path d='m21.339844 329.398438c-5.460938 0-10.925782-2.089844-15.082032-6.25-8.34375-8.339844-8.34375-21.824219 0-30.164063l286.589844-286.59375c8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.339844 8.34375 21.824219 0 30.164063l-286.589844 286.59375c-4.183594 4.179687-9.621094 6.25-15.082031 6.25zm0 0' />
                      <path d='m307.929688 329.398438c-5.460938 0-10.921876-2.089844-15.082032-6.25l-286.589844-286.59375c-8.34375-8.339844-8.34375-21.824219 0-30.164063 8.339844-8.339844 21.820313-8.339844 30.164063 0l286.589844 286.59375c8.34375 8.339844 8.34375 21.824219 0 30.164063-4.160157 4.179687-9.621094 6.25-15.082031 6.25zm0 0' />
                    </g>
                  </svg>
                </CLOSE>
                <CarouselComponentBig images={images} />
              </div>

              <BUTTON>View More Details</BUTTON>
            </MMODALCONTENT>
          </DIV>
        </MMODAL>
      </div>
      <div id='desktop'>
        <CarouselComponent images={images} setVisibility={setVisibility} />
        <MODAL style={visibility ? { display: "none" } : { display: "block" }}>
          <DIV>
            <MODALCONTENT>
              <CLOSE onClick={() => setVisibility(true)}>
                <svg
                  height='20pt'
                  viewBox='0 0 329.26933 329'
                  width='20pt'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g fill='#f44336'>
                    <path d='m21.339844 329.398438c-5.460938 0-10.925782-2.089844-15.082032-6.25-8.34375-8.339844-8.34375-21.824219 0-30.164063l286.589844-286.59375c8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.339844 8.34375 21.824219 0 30.164063l-286.589844 286.59375c-4.183594 4.179687-9.621094 6.25-15.082031 6.25zm0 0' />
                    <path d='m307.929688 329.398438c-5.460938 0-10.921876-2.089844-15.082032-6.25l-286.589844-286.59375c-8.34375-8.339844-8.34375-21.824219 0-30.164063 8.339844-8.339844 21.820313-8.339844 30.164063 0l286.589844 286.59375c8.34375 8.339844 8.34375 21.824219 0 30.164063-4.160157 4.179687-9.621094 6.25-15.082031 6.25zm0 0' />
                  </g>
                </svg>
              </CLOSE>
              <CarouselComponentBig images={images} />
            </MODALCONTENT>
          </DIV>
        </MODAL>
      </div>
    </>
  );
}

export default Carousel;
