//material ui
import {
  SearchOutlined,
  ShoppingCartOutlined,
  Delete,
} from "@material-ui/icons";

//import Link react-router-dom
import { Link } from "react-router-dom";

//styled-components
import styled from "styled-components";


//helper
import { isInCart } from "../helper/function";

//useSelector
import { useSelector , useDispatch } from "react-redux";

//cart action
import { removeItem , addItem } from "../Redux/Cart/cartAction";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:hover ${Info} {
    opacity: 1;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
   height:300px ;
  }

  @media (max-width: 576px) {
   height :250px ;
   max-width: 300px;
  }
  @media (max-width: 471px) {
    
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;

  @media (max-width: 768px) {
   width :180px ;
   height: 180px;
  }

  @media (max-width: 576px) {
   width:160px ;
   height: 160px;
  }

  @media (max-width: 380px) {
    width: 140px;
    height: 140px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  z-index: 2;
  @media (max-width: 768px) {
  width: 180px;
  height: 180px;
  }

  @media (max-width: 576px) {
    width: 160px;
    height: 160px;
}

@media (max-width: 380px) {
  width  :140px ;
  height: 140px;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.2s ease;
  position: relative;
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    width: 80px;
    background-color: black;
    color: #fff;
    font-size: 10px;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        {isInCart(state, item.id) ? (
          <Icon
            onClick={() => dispatch(removeItem(item))}
            data-hover="حذف از سبد خرید"
          >
            <Delete />
          </Icon>
        ) : (
          <Icon
            onClick={() => dispatch(addItem(item))}
            data-hover="افزودن به سبد خرید"
          >
            <ShoppingCartOutlined />
          </Icon>
        )}
        <Link to={`/productDetail/${item.id}`}>
          <Icon style={{ color: "black" }} data-hover="جزییات محصول">
            <SearchOutlined />
          </Icon>
        </Link>
      </Info>
    </Container>
  );
};

export default Product;
