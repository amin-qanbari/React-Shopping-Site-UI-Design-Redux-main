import React, { useContext, useState } from "react";
import { mobile } from "../../responsive";

//material UI
import { Search, Dehaze } from "@material-ui/icons";

//styled components
import styled from "styled-components";

//react-router-dom
import { Link } from "react-router-dom";
import { setSearchContext } from "../../Context/SearchContextProvider";

//css
import "./navbar.css";

const SearchContainer = styled.div`
  direction: rtl;
  border: 0.5px solid gray;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-left: 1rem;
  padding: 6px;
  ${mobile({height : "13px" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "90px" , height : "15px" , fontSize:"12px" })}
`;


const Navbar = () => {
  const setSearchTerm = useContext(setSearchContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <SearchContainer>
        <Input
          placeholder="جستجو"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search style={{ color: "gray", fontSize: 16 }} />
      </SearchContainer>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <Dehaze/>
      </button>
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
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/login">ورود</Link>
          </li>
          <li>
            <Link to="/register">ثبت نام</Link>
          </li>
          <li>
            <Link to="/allProducts">تمام محصولات</Link>
          </li>
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
    </nav>
  );
};

export default Navbar;
