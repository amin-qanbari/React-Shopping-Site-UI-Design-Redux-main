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
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
