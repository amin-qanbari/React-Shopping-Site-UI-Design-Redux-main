import React, { useState } from "react";

//material ui icons
import { Home, ExitToApp, AssignmentInd, ArrowLeft } from "@material-ui/icons";

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
  @media (max-width: 576px) {
    width: 50%;
  }
  @media (max-width: 380px) {
    width: 55%;
  }
  hr {
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    z-index: 20000;
    width: 100%;
  }

  .container-collapse {
    width: 100%;
    padding: 13px 0;
    &:hover{
      background-color: #f5f5f5;

    }
  }

  .wraper-collapse {
    width: 95%;
  }

  .head-collapse {
    display: flex;
    align-items: center;
    padding-right: 20px;
    font-weight: 600;
    font-size: 12px;
    color: gray;
    user-select: none;
    cursor: pointer;
    svg {
      font-size: 16px;
      transition: all 0.3s ease;
      transform: ${(props) => (props.collapse ? "rotate(-90deg)" : "")};
    }

  }

  .container-dropdown {
  }

  .wraper-dropdown {
    transition: all 1s ease;
    display: ${(props) => (props.collapse ? "block" : "none")};
    transform: ${(props) =>
      props.collapse ? "translateY(1px)" : "translateX(0)"};

      ul{
        margin: 5px 15px 0 0;
        li {
          padding: 0;
          color: gray;
          width: 100%;
          &:hover{
            background-color: #fff;
          }
      &::before {
        content: "-";
        width: 12px;
        color:#5b5d60 ;
        font-weight: 600;
        font-size: 20px;
        margin:0 5px 0 -15px;
      }
      a{
        font-size: 12px;
        color:#5b5d60 ;
        
      }
    }
      }

  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }
  li {
    transition: background-color 0.1s linear;
    padding: 5px 0;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    a {
      cursor: pointer;
      font-size: 12px;
      user-select: none;
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
      background-color: #f5f5f5;
    }
    svg {
      padding-left: 10px;
    }
  }
`;

const NavbarSmall = ({ open, close }) => {
  const [dropdown] = useState(false);
  const [collapses, setCollapse] = useState(false);

  return (
    <div>
      <Ul open={open} dropdown={dropdown} collapse={collapses}>
        <li onClick={close}>
          <Link to="/">
            {" "}
            <Home />
            صفحه اصلی
          </Link>
        </li>
        <div className="container-collapse">
          <div className="wraper-collapse">
            <div
              className="head-collapse"
              onClick={() => setCollapse(!collapses)}
            >
              محصولات
              <ArrowLeft className="icon-left" />
            </div>
            <div className="container-dropdown">
              <div className="wraper-dropdown">
                <ul>
                  <li>
                    <Link to="/summer">اجناس تابستانی</Link>
                  </li>
                  <li>
                    <Link to="/autumn">بافت</Link>
                  </li>
                  <li>
                    <Link to="/t-shirt">تی شرت</Link>
                  </li>
                  <li>
                    <Link to="/shirt">پیراهن</Link>
                  </li>
                  <li>
                    <Link to="/nightwear">لباس خواب</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <li onClick={close}>
          <Link to="/login">
            <ExitToApp /> ورود
          </Link>
        </li>
        <li onClick={close}>
          <Link to="/register">
            <AssignmentInd />
            ثبت نام
          </Link>
        </li>
        <hr />
      </Ul>
    </div>
  );
};

export default NavbarSmall;
