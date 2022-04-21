import React, { useState } from "react";

//material ui icons
import { Home , ExitToApp , AssignmentInd } from "@material-ui/icons";

//styled-components
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  direction: rtl;
  width: 40%;
  display: none;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: -20px;
  right: 0;
  bottom: 0;
  /* z-index: 110; */
  padding-top: 50px;
  background-color: #ffffff;
  transition: all 0.8s linear;
  margin-top: 20px;

  hr{
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    z-index: 20000;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }
  li {
    transition: background-color 0.1s linear;
    padding: 10px 0;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width:100%;
    a {
      cursor: pointer;
      font-size: 14px;
      user-select: none;
      vertical-align: middle;
      color: inherit;
      font-weight: 600;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      text-decoration: none;
      width: 100%;
      padding: 8px 16px;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    &:hover {
      background-color: #F5F5F5;
    }
    svg {
      padding-left: 10px;
    }
  }

`;

const NavbarSmall = ({ open, close }) => {
  const [dropdown] = useState(false);

  return (
    <div>
      <Ul open={open} dropdown={dropdown}>
        <li onClick={close}>
          <Link to="/"> <Home/>صفحه اصلی</Link>
        </li>
        <li onClick={close}>
          <Link to="/login"><ExitToApp/> ورود</Link>
        </li>
        <li onClick={close}>
        <Link to="/register"><AssignmentInd/>ثبت نام</Link>

        </li>
      <hr />
      </Ul>
    </div>
  );
};

export default NavbarSmall;
