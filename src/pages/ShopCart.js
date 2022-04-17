//Link react-router-dom
import { Link } from "react-router-dom";

//img
import empty from "../images/201-2018325_img-empty-shopping-cart-gif-clipart.png";
import checkoutIMG from "../images/checkout.png";

//styled-components
import styled from "styled-components";

//components
import Cart from "../components/Cart";

//helper
import { discount } from "../helper/function";

//responsive
import { mobile } from "../responsive";

//useSelector and useDispatch
import { useDispatch, useSelector } from "react-redux";

//cart action
import { checkout, clear } from "../Redux/Cart/cartAction";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const CheckoutButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
  border-radius: 4px;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.01);
    background-color: green;
  }
  @media (max-width: 576px) {
    font-size: 10px;
  }

  @media (max-width: 380px) {
    font-size: 11px;
  }
`;

const ClearButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease;
  border-radius: 4px;
  &:hover {
    transform: scale(1.01);
    background-color: red;
    color: white;
  }
  @media (max-width: 576px) {
    font-size: 10px;
  }
  @media (max-width: 380px) {
    font-size: 11px;
  }
`;

const TopTexts = styled.div`
  @media (max-width: 576px) {
    font-size: 14px;
  }
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  direction: rtl;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.01);
    font-size: 16px;
    background-color: green;
  }
`;

const Checkout = styled.div`
  text-align: center;

  img {
    width: 270px;
    @media (max-width: 576px) {
      width: 220px;
    }
    @media (max-width: 380px) {
      width: 170px;
    }
  }
  h3 {
    color: rgb(18, 129, 18);
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
  a {
    text-decoration: none;
    color: rgb(91, 91, 238);
    font-weight: bold;
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
`;

const Clear = styled.div`
  text-align: center;
  margin-top: 10px;

  img {
    width: 200px;

    @media (max-width: 380px) {
      width: 170px;
    }
  }

  p {
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 11px;
    }
  }

  a {
    text-decoration: none;
    color: rgb(91, 91, 238);
    @media (max-width: 576px) {
      font-size: 15px;
    }
    @media (max-width: 380px) {
      font-size: 11px;
    }
  }
`;

const ShopCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.selectedItems);
  return (
    <Container>
      <Wrapper>
        {state.itemsCounter > 0 && <Title>سبد خرید</Title>}
        <Top>
          {state.itemsCounter > 0 && (
            <ClearButton onClick={() => dispatch(clear())}>
              حذف سبد خرید
            </ClearButton>
          )}
          {state.itemsCounter > 0 && (
            <TopTexts>
              <TopText>تعداد سفارشات({state.itemsCounter})</TopText>
            </TopTexts>
          )}
          {state.itemsCounter > 0 && (
            <CheckoutButton type="filled" onClick={() => dispatch(checkout())}>
              پرداخت سفارش
            </CheckoutButton>
          )}
        </Top>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
        {state.itemsCounter > 0 && (
          <Bottom>
            <Summary>
              <SummaryTitle>فاکتور</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>جمع کل </SummaryItemText>
                <SummaryItemPrice> {state.total} هزار تومان</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>تخفیف</SummaryItemText>
                <SummaryItemPrice>
                  {discount(state.total)} هزار تومان
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>مبلغ پرداختی</SummaryItemText>
                <SummaryItemPrice>
                  {state.total - discount(state.total)} هزار تومان
                </SummaryItemPrice>
              </SummaryItem>
              <Button onClick={() => dispatch(checkout())}>پرداخت سفارش</Button>
            </Summary>
          </Bottom>
        )}
        {state.checkout && (
          <Checkout>
            <img src={checkoutIMG} alt="checkout" />
            <h3> خرید شما با موفقیت انجام شد </h3>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Checkout>
        )}
        {!state.checkout && state.itemsCounter === 0 && (
          <Clear>
            <img src={empty} alt="empty-card" />
            <h5>سبد خرید شما خالی است!</h5>
            <p>می‌توانید برای مشاهده محصولات به صفحه زیر بروید:</p>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Clear>
        )}
      </Wrapper>
    </Container>
  );
};

export default ShopCart;
