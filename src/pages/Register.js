import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//styled-components
import styled from "styled-components";

//validate
import { validate } from "../components/validate/validate";

//toast
import { notify } from "../components/validate/toast";

import image from "../images/register.jpg"

const Container = styled.div`
direction: rtl;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${image}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  @media (max-width:992px) {
  width: 60%;
}
  @media (max-width:768px) {
  width: 70%;
}

@media (max-width:576px) {
  width: 60%;
}

@media (max-width:380px) {
  width: 75%;
}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  @media (max-width:576px) {
  font-size: 18px;
  font-weight: 700;
}
  @media (max-width:380px) {
  font-size: 16px;
  font-weight: 600;
}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: red;
    font-size: 12px;
    font-weight: 500;
    margin: 5px 12px 0px 0px;
  }
`;

const Input = styled.input`
  max-height: 15px;
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1.5px solid gray;
  border-radius: 3px;

  &::placeholder{
    color: #111;
  }
  @media (max-width:576px) {
  width: 95%;
}
@media (max-width:380px) {
 width: 80%;
}

`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  @media (max-width:576px) {
  font-size: 13px;
}

@media (max-width:380px) {
  font-size: 11px;
}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  @media (max-width:576px) {
  width: 50%;
}
  @media (max-width:380px) {
   width: 100%;
}
`;

const Register = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signin"));
  }, [data, touched]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You sign in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        lastName: true,
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const touchedHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>ایجاد حساب کاربری</Title>
        <Form onSubmit={submitHandler}>
        
          <Div>
            <Input
             style={{border: errors.name && touched.name ? "1px solid red" : ""}}
              placeholder="نام"
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </Div>

          <Div>
          <Input
           style={{border: errors.lastName && touched.lastName ? "1px solid red" : ""}}
            placeholder="نام خانوادگی"
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.lastName && touched.lastName && (
            <span> {errors.lastName} </span>
          )}
          </Div>

          <Div>
          <Input
            style={{border: errors.username && touched.username ? "1px solid red" : ""}}
            placeholder="نام کاربری"
            type="text"
            name="username"
            value={data.username}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.username && touched.username && (
            <span>{errors.username}</span>
          )}
          </Div>
        
          <Div>
          <Input
            style={{border: errors.email && touched.email ? "1px solid red" : ""}}
            placeholder="ایمیل"
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
          </Div> 

            <Div>  
          <Input
            style={{border: errors.password && touched.password ? "1px solid red" : ""}}
            placeholder="رمز عبور"
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
          </Div> 

          <Div>    
          <Input
             style={{border: errors.confirmPassword && touched.confirmPassword ? "1px solid red" : ""}}
            placeholder="تکرار رمز عبور"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
           </Div> 
          <Agreement>
            با ایجاد حساب کاربری، با پردازش اطلاعات شخصی خود مطابق با سیاست حفظ  <b>حریم خصوصی</b> موافقت می کنم.
          </Agreement>
          <Button type="submit">ساختن حساب</Button>
        </Form>
        <ToastContainer />
      </Wrapper>
    </Container>
  );
};

export default Register;
