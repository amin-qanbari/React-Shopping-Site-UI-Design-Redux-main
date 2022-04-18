import React from "react";

//styled-components
import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  display: ${({ dropdown }) => (dropdown ? "block" : "none")};
  background-color: ${({ dropdown }) => (dropdown ? "#ccc" : "")};
  li {
    width: 119vw;
    /* padding-top: 20px; */
    color: #000 !important;
    background-color: #111;
    color: #fff !important;

    /* opacity: .5; */


    &:hover {
      background-color: #111 !important;
      opacity: .5;
      color: #fff !important;
    }
  }
`;

const DropdownSmallItems = ({dropdown}) => {
  return (
    <div>
      <Ul dropdown={dropdown}>
        <li>a</li>
        <li>c</li>
        <li>c</li>
        <li>cd</li>
      </Ul>
    </div>
  );
};

export default DropdownSmallItems;
