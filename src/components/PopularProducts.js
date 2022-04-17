//usecontext
import { useContext } from "react";

//styled-compnents
import styled from "styled-components";

//data
import { popularProducts } from "../data";

//components
import Product from "./Product";

//context
import { searchContext } from "../Context/SearchContextProvider";

const Title = styled.h2`
  padding: 0px 30px;
  direction: rtl;
  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }

  @media (max-width: 380px) {
    font-size: 14px;
  }
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }

  @media (max-width: 380px) {
    padding: 0px 20px;
  }
`;
const PopularProducts = () => {
  const searchTerm = useContext(searchContext);
  return (
    <>
      <Title>اجناس محبوب :</Title>
      <Container>
        {popularProducts
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else {
              return false;
            }
          })
          .map((item) => (
            <Product item={item} key={item.id} />
          ))}
      </Container>
    </>
  );
};

export default PopularProducts;
