import React from "react";
import styled from "styled-components";
import { categories } from "../../utils/data";


const HeroContainer = styled.div({
  padding: "2vw",
  "@media (max-width: 768px)": {
    padding:"10vw 5vw",
  },
});


const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Wrapper = styled.div({
  display: "flex",
  gap: "2vw",
  alignItems: "center",
});

const WrapperHeader = styled.h1({
  fontSize: "6vw",
  fontWeight: "500",
  "@media (max-width: 768px)": {
    fontSize: "10vw",
  },
});

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 470px;
  height: 500px;
  text-align: center;
  background-color: #fff;
`;

const ImageContainer = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const cardData = [
  {
    id: 1,
    src: "/debora-cardenas-KPyXMkJ0UQU-unsplash.jpg",
    alt: "Card 2",
  },
  {
    id: 2,
    src: "/debora-cardenas-KPyXMkJ0UQU-unsplash.jpg",
    alt: "Card 3",
  },
  {
    id: 3,
    src: "/debora-cardenas-KPyXMkJ0UQU-unsplash.jpg",
    alt: "Card 4",
  },
];

const Products = () => {
  return (
    <HeroContainer>
      <Container>
        <Wrapper>
          <WrapperHeader>New In</WrapperHeader>
          <p className="lk">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Commodi, quod. Lorem ipsum dolor sit amet.
          </p>
        </Wrapper>
        <div>Pagination</div>
      </Container>
      {/* PAGINATION */}
      <div>
        <CardContainer>
          {categories.map((card) => (
            <Card key={card.id}>
              <ImageContainer src={card.img} alt={card.alt} />
            </Card>
          ))}
        </CardContainer>
      </div>
    </HeroContainer>
  );
};

export default Products;
