//usecontext
import { useContext } from "react";

//context
import { searchContext } from "../Context/SearchContextProvider";

import Product from "../components/Product";
import { summer } from "../data";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Summer = () => {
  const searchTerm = useContext(searchContext);

  return (
    <Container>
      {summer
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
  );
};

export default Summer;
