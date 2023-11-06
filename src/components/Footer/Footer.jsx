import React from "react";
import styled from "styled-components";

const CurrentYear = new Date().getFullYear();

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4vw;
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  color: white;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 90%;
    gap: 30px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-right: 0.9px solid white;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    broder-bottom: 0.9px solid white;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LightHeading = styled.h1`
  font-weight: lighter;
  font-size: 2rem; /* Adjust the font size as needed for responsiveness */

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
    font-weight: 600;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem; /* Adjust the font size as needed for responsiveness */

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Adjust font size for smaller screens */
  }
`;

const SubscribeButton = styled.button`
  padding: 10px 20px; /* Adjust padding for responsiveness */
  font-size: 1rem; /* Adjust the font size as needed for responsiveness */
  color: black;
  @media (max-width: 768px) {
    padding: 8px 16px; /* Adjust padding for smaller screens */
    font-size: 0.8rem; /* Adjust font size for smaller screens */
  }
`;
const Copyright = styled.div`
  font-size: 0.8rem;
  margin-top: 10px; /* Add margin-top as needed */
`;
const Footer = () => {
  return (
    <Container className="bg-black">
      <Wrapper>
        <LeftContainer>
          <LightHeading>SIGN UP TO OUR NEWSLETTER</LightHeading>
          <Paragraph>$10 Off Your First Order</Paragraph>
          <div>
            <SubscribeButton className="btn">Subscribe</SubscribeButton>
          </div>
        </LeftContainer>
        <RightContainer>
          <LightHeading className="xl">News</LightHeading>
          <Paragraph>Discover All Our News</Paragraph>
          <div>
            <SubscribeButton className="btn">Subscribe</SubscribeButton>
          </div>
        </RightContainer>
      </Wrapper>
      <Copyright className="text-white">
        {" "}
        &copy; {CurrentYear} Lorem ipsum dolor sit amet.
      </Copyright>
    </Container>
  );
};

export default Footer;
