import React from "react";
import styled from "@emotion/styled";
import { gsap, Power1 } from "gsap";
import CloseIcon from "@mui/icons-material/Close";

const Wrapper = styled.div({
  width: "100%",
  height: "0",
  position: "fixed",
  top: "0",
  left: "0",
  backgroundColor: "#393e46",
  color: "white",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 14vw",
});

const NavLinks = styled.div({
  fontSize: "10vw",
  fontWeight: "700",
});

const HamburgerOpenLinks = ({ isOpen, toggleMenu }) => {
  if (isOpen) {
    gsap.to(".menu", 0.3, {
      height: "100vh",
      ease: Power1.easeInOut,
    });
  } else {
    gsap.to(".menu", 0.3, {
      height: 0,
      ease: Power1.easeInOut,
    });
  }

  return (
    <Wrapper className="menu">
      {isOpen && (
        <>
          <CloseIcon onClick={toggleMenu} className="iconClose" />
          <NavLinks>
            <div className="nav-ul">
              <p>Home</p>
              <p>Explore</p>
              <p>Shop By Category</p>
              <p>About Us</p>
              <p>Contact</p>
            </div>
          </NavLinks>
        </>
      )}
    </Wrapper>
  );
};

export default HamburgerOpenLinks;
