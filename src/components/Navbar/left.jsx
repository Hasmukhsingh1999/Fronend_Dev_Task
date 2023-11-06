import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "@emotion/styled";

const Support = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1vw",
 
});

const ContainerDiv = styled.div({
    display:'initial',
    "@media (max-width: 768px)": {
        display: "none",
      },
})

const Left = () => {
  return (
    <ContainerDiv>
      <Support>
        <PhoneIcon />
        Support +123 456 789
      </Support>
    </ContainerDiv>
  );
};

export default Left;
