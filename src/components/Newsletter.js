//styled-components
import styled from "styled-components";


//material ui
import { Send} from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  @media (max-width: 992px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 576px) {
    height: 33vh;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  direction: rtl;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }

  @media (max-width: 380px) {
    font-size: 14px;
  }
`;

const InputContainer = styled.div`
  width: 550px;
  height: 40px;
  background-color: white;
  display: flex;
  direction: rtl;

  @media (max-width: 992px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 576px) {
    width: 300px;
    height: 30px;
  }

  @media (max-width: 380px) {
    width: 50%;
    height: 24px;
    justify-content: center;
  }
`;

const Input = styled.input`
  border: 1px solid lightgray;
  flex: 8;
  padding-right: 20px;
  outline: none;
  font-size: 20px;
  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
    padding-right: 10px;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #00bfd6;
  color: white;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Newsletter = () => {
  return (
    <Container>
      <Title>اطلاع از آخرین محصولات :</Title>
      <InputContainer>
        <Input placeholder=" ایمیل خود را وارد کنید" />
        <Button><Send/></Button>
      </InputContainer>

    </Container>
  );
};

export default Newsletter;
