import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//styled-components
import styled from "styled-components";

//validate
import { validate } from "../components/validate/validate";

//toast
import { notify } from "../components/validate/toast";

import image from "../images/register.jpg";

const Container = styled.div`
  direction: rtl;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  padding: 10px 0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${image}) right;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  opacity: 0.9;

  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 992px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 68%;
  }

  @media (max-width: 576px) {
    width: 60%;
  }

  @media (max-width: 380px) {
    width: 85%;
  }
`;

const Title = styled.h1`
  font-size: clamp(1rem, 1.8vw, 2.5rem);
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
  }

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
  margin: 10px 10px 0px 0px;
  padding: 13px 10px 13px 40px;
  border: 1.5px solid gray;
  border-radius: 3px;
  font-size: clamp(0.7rem, 1.1vw, 2rem);

  &::placeholder {
    color: #111;
  }

  @media (max-width: 768px) {
  padding: 13px 10px 13px 20px;
    
  }
  @media (max-width: 576px) {
    width: 95%;
  }
  @media (max-width: 380px) {
    width: 100%;
    margin: 20px 0px 0px 0px;
  }
`;

const Agreement = styled.span`
  font-size: clamp(0.7rem, 1.1vw, 2rem);
  margin: 20px 5px;
  text-align: justify;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: clamp(0.7rem, 1.1vw, 2rem);

  @media (max-width: 576px) {
    width: 50%;
  }
  @media (max-width: 380px) {
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
              style={{
                border: errors.name && touched.name ? "1px solid red" : "",
              }}
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
              style={{
                border:
                  errors.lastName && touched.lastName ? "1px solid red" : "",
              }}
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
              style={{
                border:
                  errors.username && touched.username ? "1px solid red" : "",
              }}
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
              style={{
                border: errors.email && touched.email ? "1px solid red" : "",
              }}
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
              style={{
                border:
                  errors.password && touched.password ? "1px solid red" : "",
              }}
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
              style={{
                border:
                  errors.confirmPassword && touched.confirmPassword
                    ? "1px solid red"
                    : "",
              }}
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
            با ایجاد حساب کاربری، با پردازش اطلاعات شخصی خود مطابق با سیاست حفظ{" "}
            <b>حریم خصوصی</b> موافقت می کنم.
          </Agreement>
          <Button type="submit">ساختن حساب</Button>
        </Form>
        <ToastContainer className="toast" />
      </Wrapper>
    </Container>
  );
};

export default Register;
