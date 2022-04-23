//material ui
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowRightAlt,
} from "@material-ui/icons";

//responsive
// import { mobile } from "../responsive";

import styled from "styled-components";
import { useState } from "react";

//data
import { sliderItems } from "../../data";

//react-router-dom Link
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const Container = styled.div``;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #6b706f;
  color: #f1f1f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    background-color: #24292f;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const Image = styled.img`
  width: 400px;

  @media (min-width: 992px) {
    width: 380px;
    height: auto;
  }
  @media (max-width: 992px) {
    width: 380px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 260px;
  }

  @media (max-width: 576px) {
    width: 220px;
    padding: 0 10px;
  }
`;
const InfoContainer = styled.div`
  width: 50%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 46px;
  background: #e5e3e0;
  box-shadow: -35px -35px 70px #d3d1ce, 35px 35px 70px #f7f5f2;
  /* box-shadow: rgb(0 0 0 / 20%) 0px 5px 6px -3px,
    rgb(0 0 0 / 14%) 0px 9px 12px 1px, rgb(0 0 0 / 12%) 0px 3px 16px 2px; */
  border-radius: 12px;
  @media (max-width: 576px) {
    justify-content: space-around;
  }
`;

const Title = styled.h1`
  font-size: 2.1rem;
  text-decoration: underline wavy;
  text-underline-position: under;
  @media (max-width: 992px) {
    font-size: 1.7rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 992px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    margin: 40px 0px;
    font-size: 0.6rem;
  }

  @media (max-width: 576px) {
    font-size: 0.55rem;
    font-weight: 600;
    margin: 30px 0px;
  }
`;
const Linked = styled(Link)`
  padding: 4px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  /* border: 2px solid gray; */
  color: black;
  font-size: 18px;
  background-color: transparent;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  cursor: pointer;
  transition: all 0.15s ease;
  border-radius: 48px;
  font-weight: 500;

  div {
    display: flex;
    align-items: center;
    margin-left: 3px;
  }

  &:hover {
    background-color: #24292f;
    color: white;
  }

  @media (max-width: 992px) {
    font-size: 18px;
    padding: 6px 8px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
    padding: 3px 8px;
  }
`;

const Slider = () => {
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="swiper"
    >
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Linked
                    to={
                      item.id === 1
                        ? "/summer"
                        : item.id === 2
                        ? "/autumn"
                        : "/nightwear"
                    }
                  >
                    نمایش بیشتر
                    <div>
                      <ArrowRightAlt />
                    </div>
                  </Linked>
                </InfoContainer>
              </Slide>
            </SwiperSlide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </Swiper>
  );
};

export default Slider;
