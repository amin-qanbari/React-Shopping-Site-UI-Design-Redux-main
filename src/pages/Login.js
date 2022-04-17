//styled-components
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../components/validate/toast";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { validate } from "../components/validate/validate";
import image from "../images/signin.webp";



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
  width: 30%;
  padding: 20px;
  background-color: white;

  @media (max-width:992px) {
  width: 35%;
}
  @media (max-width:768px) {
  width: 45%;
}
  @media (max-width:576px) {
  width: 60%;
}

  @media (max-width: 380px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin-top: 14px;
  padding: 10px;
  border: 1.5px solid gray;
  border-radius: 3px;

  &::placeholder{
    color: #111;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin: 15px 0;
  border-radius: 2px;

  @media (max-width: 380px) {
   font-size: 14px;
  }
  
`;

const TextLink = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  /* text-decoration: underline; */
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 5px 6px 0px 0px;
    color: red;
    font-size: 12px;
    font-weight: 500;
  }
`;

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const touchedHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You sign in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        username: true,
        password: true,
      });
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>ورود</Title>
        <Form onSubmit={submitHandler}>
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
          <Button type="submit">ورود</Button>
          {/* <TextLink>DO NOT YOU REMEMBER THE PASSWORD?</TextLink> */}
          <Link to="/register">
            <TextLink>CREATE A NEW ACCOUNT</TextLink>
          </Link>
        </Form>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
};

export default Login;
