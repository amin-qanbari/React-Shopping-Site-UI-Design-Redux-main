//usecontext
import { useContext } from "react";

//context
import { searchContext } from "../Context/SearchContextProvider";

import styled from "styled-components";
import Product from "../components/Product";
import { autumn } from "../data";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LightJacket = () => {
  const searchTerm = useContext(searchContext);

  return (
    <Container>
      {autumn
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

export default LightJacket;
