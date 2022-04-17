//usecontext
import { useContext } from "react";

//context
import { searchContext } from "../Context/SearchContextProvider";

import Product from "../components/Product";
import { autumn } from "../data";
import styled from "styled-components";
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Autumn = () => {
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
          <Product item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Autumn;
