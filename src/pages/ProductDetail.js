//styled-componentes
import styled from "styled-components";

//data api
import { productList } from "../data";

//responsive
import { mobile } from "../responsive";

//useparams id
import { useParams } from "react-router-dom";

//useSelector and useDispatch
import { useDispatch, useSelector } from "react-redux";

//cartAction
import { addItem, removeItem } from "../Redux/Cart/cartAction";

//helper
import { isInCart } from "../helper/function";
import { CheckCircle } from "@material-ui/icons";

const Container = styled.div`
margin-top: 40px;
`;

const Wrapper = styled.div`
  padding: 80px 50px 50px 50px;
  display: flex;
  @media (max-width: 992px) {
    padding: 80px 40px 40px 40px;
  }
  @media (max-width: 768px) {
    padding: 80px 0px 20px 0;
  }
  @media (max-width: 576px) {
    padding: 30px 0px 15px 0;
    flex-direction: column;
  }
  @media (max-width: 380px) {
    padding: 30px 10px 10px 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 70vh;
  object-fit: contain;

  @media (max-width: 1200px) {
    width: 400px;
    height: 60vh;
  }
  @media (max-width: 992px) {
    width: 350px;
    height: 50vh;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 45vh;
  }
  @media (max-width: 576px) {
    width: 250px;
    height: 35vh;
  }
  @media (max-width: 380px) {
    height: 37vh;
  }
`;

const InfoContainer = styled.div`
  padding: 0px 30px;
  direction: rtl;
  @media (max-width: 992px) {
    padding: 0px 25px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
  @media (max-width: 380px) {
    padding: 0px 10px;
  }
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  @media (max-width: 992px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 576px) {
    font-size: 23px;
  }
  @media (max-width: 380px) {
    font-size: 20px;
  }
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
  @media (max-width: 992px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
  @media (max-width: 380px) {
    font-size: 10px;
  }
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s linear;
  ${mobile({ width: "100%" })}
  div {
    display: flex;
    flex-direction: column;

    span {
      color: teal;
      font-size: 18px;
      display: flex;
      align-items: center;
    }

    button {
      width: 70%;
      margin-top: 10px;
      padding: 10px;
      border: 2px solid red;
      background-color: white;
      cursor: pointer;
      font-weight: 500;
      @media (max-width:380px){
        width: 60%;
        font-size: 13px;
      }

      &:hover {
        background-color: red;
        color: white;
      }
    }
  }
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: #fff;
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const product = productList[id - 1];
  const { img, title, desc, price } = product;
  console.log(isInCart(state, product.id));

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>

          <Desc>{desc}</Desc>
          <Price>$ {price} </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>رنگ</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
          </FilterContainer>
          <AddContainer>
            {!isInCart(state, product.id) ? (
              <Button onClick={() => dispatch(addItem(product))}>
                افزودن به سبد خرید
              </Button>
            ) : (
              <div>
                <span>به سبد خرید شما اضافه شد <CheckCircle/></span>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(product))}
                >
                  حذف از سبد خرید
                </button>
              </div>
            )}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductDetail;
