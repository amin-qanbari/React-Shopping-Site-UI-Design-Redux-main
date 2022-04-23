import React, { useState } from "react";

//styled-components
import styled from "styled-components";

//components
import CartCountButton from "../CartCountButton";
import Backdrop from "./Backdrop";
import NavbarSmall from "./NavbarSmall";

const Div = styled.div`
  display: none;
  width: 2rem;
  height: 1.8rem;
  position: absolute;
  top: 20px;
  right: ${({open}) => open ? "5px" : "20px"};
  z-index: 200;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  @media (max-width: 380px) {
    width: 28px;
    height: 28px;
  }

  div {
    width: 1.9rem;
    height: 0.23rem;
    background-color: ${({ open }) => (open ? "gray" : "#fff")};
    border-radius: 10px;
    transform-origin: 1.8px;
    transition: all 0.2s linear;
    :nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
    @media (max-width: 380px) {
      width: 1.5rem;
      height: 0.2rem;
      transform-origin: -0.7px;
    }
  }
`;

const CartContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

`

const Burger = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <div>
      <CartContainer>
        <CartCountButton />
      </CartContainer>
      <Div open={open} onClick={openHandler}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <NavbarSmall open={open} close={closeHandler} />
      <Backdrop open={open} backdrop={openHandler}/>
    </div>
  );
};

export default Burger;
