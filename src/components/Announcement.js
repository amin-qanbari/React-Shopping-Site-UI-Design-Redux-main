import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

@media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }

@media (max-width : 380px) {
  font-size: 8px;
}
`



const Announcement = () => {
  return (
    <Container>
        پیشنهاد فوق العاده! 20درصد تخفیف برای سفارش های بالای 50 هزار تومان
    </Container>
  )
}

export default Announcement