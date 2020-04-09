import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
function Social() {
  return (
    <DIV>
      <a href='https://www.linkedin.com/in/peacevisuals'>
        <img src='linkedin.svg' alt='' width='30px' />
      </a>

      <a href='https://twitter.com/Iffect_prince'>
        <img src='twitter.svg' alt='' width='30px' />
      </a>

      <a href='https://www.behance.net/ifepeace828e'>
        <img src='behance.svg' alt='' width='30px' />
      </a>
    </DIV>
  );
}

export default Social;
