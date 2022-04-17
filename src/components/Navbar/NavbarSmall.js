import React, { useState } from "react";

//material ui icons
import { ArrowDropDown } from "@material-ui/icons";

//styled-components
import styled from "styled-components";
import DropdownSmallItems from "./DropdownSmallItems";


const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 110;
  padding-top: 50px;
  background-color: #111;
  opacity: 0.9;
  transition: all 0.8s linear;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }
  li {
    position: relative;
    transition: background-color 0.1s linear;
    padding: 20px 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: #ccc;
      color: black;
    }
   svg {
     position: fixed;
     top: 137px;
   }
  }

  .dropdown {
    display: flex;
    flex-direction: column;
  }
`;

const NavbarSmall = ({open , close}) => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownHandler = () => {
      setDropdown(!dropdown);
    };
    return (
      <div>
        <Ul open={open} dropdown={dropdown}>
          <li onClick={close}>صفحه اصلی</li>
          <li className="dropdown" onClick={dropdownHandler}>
            <div>
              محصولات
              <ArrowDropDown />
            </div>
            <DropdownSmallItems dropdown={dropdown} />
          </li>
          <li onClick={close}>ورود</li>
          <li onClick={close}>ثبت نام</li>
        </Ul>
      </div>
    );
};

export default NavbarSmall;
