import React, { useContext, useState } from "react";
import { mobile } from "../../responsive";

//material UI
import { Search, ArrowDropDown } from "@material-ui/icons";

//styled components
import styled from "styled-components";

//react-router-dom
import { Link } from "react-router-dom";
import { setSearchContext } from "../../Context/SearchContextProvider";

//css
import "./navbar.css";
import Burger from "./Burger";
import CartCountButton from "../CartCountButton";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0rem;
  background-color:  #24292f;
  z-index: 1000;
  color: #f1f1f1;

  .dropdown {
    position: relative;
    cursor: pointer;
    &:hover {
      ul {
        display: flex;
      }
    }

    svg {
      position: absolute;
    }
  }

  .dropdown ul {
    position: absolute;
    z-index: 10;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
    border-radius: 3px;
    overflow: hidden;
    color: #000;
    display: ${({ dropdown }) => (dropdown ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 130px;

    li {
      width: 100%;
      display: none;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      height: 0;
      a {
        color: black;
      }
      &:hover {
        background-color: #111;
        opacity: 0.5;
        display: flex;
        a {
          color: #f1f1f1;
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const SearchContainer = styled.div`
  direction: rtl;
  border: 0.5px solid gray;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-left: 1rem;
  padding: 6px;
  ${mobile({ height: "25px" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "100px", height: "15px", fontSize: "12px" })}
`;

const Navbar = () => {
  const setSearchTerm = useContext(setSearchContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [dropdown] = useState(false);

  return (
    <Nav className="navigation" dropdown={dropdown}>
      <SearchContainer>
        <Input
          placeholder="جستجو"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search style={{ color: "gray", fontSize: 16 }} />
      </SearchContainer>

      <Burger />

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <li>
            <CartCountButton />
          </li>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/login">ورود</Link>
          </li>
          <li>
            <Link to="/register">ثبت نام</Link>
          </li>
          <li className="dropdown">
            <div>
              محصولات
              <ArrowDropDown />
              <ul>
                <li className="li-none">
                  <Link to="/summer">اجناس تابستانی</Link>
                </li>
                <li className="li-none">
                  <Link to="/autumn">بافت</Link>
                </li>
                <li className="li-none">
                  <Link to="/t-shirt">تی شرت</Link>
                </li>
                <li className="li-none">
                  <Link to="/shirt">پیراهن</Link>
                </li>
                <li className="li-none">
                  <Link to="/nightwear">لباس خواب</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
