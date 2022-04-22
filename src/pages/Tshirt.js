//usecontext
import { useContext } from "react";

//context
import { searchContext } from "../Context/SearchContextProvider";

import styled from "styled-components";
//data
import { tshirt } from "../data";

//components
import Product from "../components/Product";

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 0;
  max-width: 1100px;
  margin: 40px auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Tshirt = () => {
  const searchTerm = useContext(searchContext);

  return (
    <Container>
      {tshirt
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
          <Product key={item.id} item={item} />
        ))}
    </Container>
  );
};

export default Tshirt;
