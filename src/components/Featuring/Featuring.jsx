import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../utils/data";
import { Link } from "react-router-dom";

const Wrapper = styled.div({
  width: "100%",
  minHeight: "100vh",
  marginTop: "5vw",
});

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  margin: 20px;
`;

const Card = styled.div`
  width: 480px;
  height: 500px;
  text-align: center;
  background-color: #fff;
`;

const ImageContainer = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Buttonstyling = styled.div({
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "4vw",
});

const ButtonStl = styled.button({
  padding: "15px 33px",
  backgroundColor: "black",
  outline: "none",
  border: "none",
  color: "white",
});
const Featuring = () => {
  return (
    <Wrapper>
      <CardContainer>
        {popularProducts.map((card) => (
          <>
            <Card key={card.id}>
              <ImageContainer src={card.img} alt={card.alt} />
            </Card>
            {/* <Buttonstyling>
              <Link to={`/products/${card.id}`}>
                <ButtonStl className="btn-1">Click To check</ButtonStl>
              </Link>
            </Buttonstyling> */}
          </>
        ))}
      </CardContainer>
      <Buttonstyling>
        <Link to={`/carts`}>
          <ButtonStl className="btn-1">EXPLORE</ButtonStl>
        </Link>
      </Buttonstyling>
    </Wrapper>
  );
};

export default Featuring;
