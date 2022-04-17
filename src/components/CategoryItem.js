import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width : 576px) {
    height: 50vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

@media (max-width : 380px) {
  height: 50vh;
}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    font-size: 24px;
}

@media (max-width: 768px) {
  font-size: 22px;
}

@media (max-width : 576px) {
  font-size: 20px;
}

@media (max-width : 380px) {
  font-size: 24px;
}
`;

const Linked = styled(Link)`
  border: none;
  background-color: white;
  text-decoration: none;
  color: gray;
  cursor: pointer;
  padding: 10px;
  font-weight: 600;

  @media (max-width: 992px) {
    padding: 16px;
    padding: 8px;
}

@media (max-width: 768px) {
  font-size: 14px;
  padding: 6px;
}

@media (max-width : 576px) {
  font-size: 12px;
  padding: 4px;
}

@media (max-width : 380px) {
  font-size: 14px;
  padding: 6px;
}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Linked
          to={
            item.id === 1
              ? "/shirt"
              : item.id === 2
              ? "/t-shirt"
              : "/lightJacket"
          }
        >
          مشاهده بیشتر
        </Linked>
      </Info>
    </Container>
  );
};

export default CategoryItem;
