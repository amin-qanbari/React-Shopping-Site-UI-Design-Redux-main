import React from 'react'

//styled-component
import styled from "styled-components"

//material-UI
import { KeyboardArrowUp } from '@material-ui/icons';

const A = styled.a`
  background-color: #6b706f;
  opacity: 0.5;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: fixed;
  bottom: 10px;
  left: 20px;
  transition: all 0.2s ease;
  z-index: 1000;

  &:hover{
    background-color: #24292f;
    opacity: 0.5;
  }

  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    width: 80px;
    background-color: #6b706f;
    color: #fff;
    font-size: 10px;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    z-index: 1;
    left: 20px;
    bottom: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const JumpToUp = () => {
  return (
    <div>
              <A href="#top" data-hover="پرش به بالا">
        <KeyboardArrowUp />
      </A>
    </div>
  )
}

export default JumpToUp