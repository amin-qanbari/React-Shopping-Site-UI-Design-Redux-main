import React from "react";
//styled-components
import styled from "styled-components";

const Div = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.9;
    width: 60%;
    /* height: 100vh; */
    transition: all 0.2s linear;
    background-color: ${({ open }) => (open ? "rgba(0, 0, 0, 0.5)" : "")};
    /* opacity: 1; */
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    @media (max-width: 576px) {
      width: 50%;
    }
    @media (max-width: 380px) {
      width: 45%;
    }
  }
`;

const Backdrop = ({ open, backdrop }) => {
  return <div>{open && <Div open={open} onClick={backdrop}></Div>}</div>;
};

export default Backdrop;
