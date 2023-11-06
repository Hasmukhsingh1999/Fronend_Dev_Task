import React from "react";
import styled from "styled-components";

const Component = styled.div({
  width: "100%",
  minHeight: "100vh",

});

const LeftComponent = styled.div({
  width: "58.5%",
  height: "100%",
  "@media (max-width: 768px)": {
    width: "100%",
    height: "100%",
  },
});

const LeftImg = styled.img({
  height: "48.3vw",
  width: "100%",
  objectFit: "cover",
  "@media (max-width: 768px)": {
   
    height: "100%",
  },
});

const RightComponent = styled.div({
  width: "38.5%",
  height: "100%",
  "@media (max-width: 768px)": {
    display: "none",
  },
});
const RightImg = styled.img({
  height: "inherit",
  width: "100%",
  objectFit: "cover",
});

const TextCompo = styled.div({

  "@media (max-width: 768px)": {
    textAlign: "center",
  },
});

const Headings = styled.h1({
  fontSize: "6.5vw",
  fontWeight: "500",
  "@media (max-width: 768px)": {
    fontSize: "8vw",
  padding:'10vw 0',
    // backgroundColor:'red'
  },
});

const Para = styled.p({
  fontSize: "2vw",
  marginTop: "4.5vw",
});

const SubscribeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: black; /* Set the background color to black */
  color: white; /* Set the text color to white */

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
`;
const Hero = () => {
  return (
    <Component>
      <div className="fl">
        {/* LEFT */}

        <LeftComponent className="fl1">
          <LeftImg
            src="https://buyma-global-prod-img.s3.amazonaws.com/img/upload/product_image/7ddd9c74-afa9-4077-86bb-c32a294e13f1/328e4149-8b6f-4d46-9b26-f2f557353444.png"
            alt=""
            srcset=""
          />
          <TextCompo>
            <Headings>
              Elevate Your Looks <br /> With Our Bags
            </Headings>
          </TextCompo>
        </LeftComponent>
        {/* LEFT */}

        {/* RIGHT */}
        <RightComponent className="fl2">
          <RightImg
            src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH165/2BBEF0002/2VH165_2BBE_F0002_V_OOO_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.600.600.jpg"
            alt=""
            srcset=""
          />
          <TextCompo>
            <Para>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              suscipit voluptates sunt. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint, possimus.
            </Para>
            <SubscribeButton className="btn">SHOP NOW</SubscribeButton>
          </TextCompo>
        </RightComponent>
        {/* RIGHT */}
      </div>
    </Component>
  );
};

export default Hero;
