//styled-components
import styled from "styled-components";

//material ui
import { Add, Remove, Delete } from "@material-ui/icons";

//responsive
import { mobile } from "../responsive";

//helper 
import { quantityCount } from "../helper/function";

//useSelector and useDispatch
import { useDispatch, useSelector } from "react-redux";

//cart action
import { removeItem , increase , decrease  } from "../Redux/Cart/cartAction";

const Info = styled.div`
  flex: 3;
  display: flex;
`;

const Product = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: aliceblue;
  margin: 15px 0;
  border-radius: 3px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  direction: rtl;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const AddContainer = styled.div`
  color: green;
  cursor: pointer;
  transition: all 0.1s ease;
  border-radius: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const RemoveContainer = styled.div`
  color: red;
  cursor: pointer;
  transition: all 0.1s ease;
  border-radius: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;
const TrashContainer = styled.div`
  cursor: pointer;
  transition: all 0.1s ease;
  border-radius: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px 10px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 0px 8px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  direction: rtl;

  ${mobile({ marginBottom: "20px" })}
`;

const Cart = ({ data }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { img, price, title , id } = data;


  
  return (
    <Info>
      <Product>
        <ProductDetail>
          <Image src={img} />
          <Details>
            <ProductName>
              <b>نام محصول :</b> {title}
            </ProductName>

            <ProductSize>
              <b>Size:</b> 37.5
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <AddContainer
              onClick={() => dispatch(increase(data))}
            >
              <Add />
            </AddContainer>
            <ProductAmount>{quantityCount(state , id)}</ProductAmount>
            {quantityCount(state , id) > 1 ? (
              <RemoveContainer
                onClick={() => dispatch(decrease(data))}
              >
                <Remove />
              </RemoveContainer>
            ) : (
              <TrashContainer
                onClick={() => dispatch(removeItem(data))}
              >
                <Delete />
              </TrashContainer>
            )}
          </ProductAmountContainer>
          <ProductPrice>{price} هزار تومان</ProductPrice>
        </PriceDetail>
      </Product>
    </Info>
  );
};

export default Cart;
