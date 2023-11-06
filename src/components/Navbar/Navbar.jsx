import React from "react";
import Left from "./left";
import Center from "./Center";
import Right from "./Right";
import styled from "styled-components";

const NavContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1vw 4vw",

  "@media (max-width: 768px)": {
    padding: "4vw 6vw ",
  },
});

const Navbar = () => {
  return (
    <NavContainer>
      <Left />
      <Center />
      <Right />
    </NavContainer>
  );
};

export default Navbar;
