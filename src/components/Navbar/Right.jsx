import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HamburgerOpenLinks from "./HamburgerOpenLinks";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../reducers/features/cartSlice";
import { Link } from "react-router-dom";

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1vw",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
});

const RightNavLinks = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1vw",
});

const Hamburger = styled.div({
  display: "none",
  "@media (max-width: 768px)": {
    display: "flex",
    gap: "2vw",
  },
});

const Right = () => {
  const { totalQuantity, cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <span>EN</span>
          <span>
            <ArrowDropDownIcon />
          </span>
        </Wrapper>
        <RightNavLinks>
          <SearchIcon />
          <FavoriteBorderIcon />
          <PersonOutlineIcon />

          <span>Carts: {totalQuantity}</span>
        </RightNavLinks>

        {/* <span> */}
      </Container>
      {/* HAMBURGER */}
      <Hamburger>
        <SearchIcon />
        <MenuOpenIcon onClick={toggleHamburgerMenu} />
        <HamburgerOpenLinks
          isOpen={isHamburgerOpen}
          toggleMenu={toggleHamburgerMenu}
        />
      </Hamburger>
      {/* HAMBURGER */}
    </div>
  );
};

export default Right;
