import BottomFooter from "../../Components/Footer/BottomFooter";
import React from "react";
import TopFooter from "../../Components/Footer/TopFooter";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
        <TopFooter />
      <BottomFooter />
    </FooterStyled>
  );
};

const FooterStyled = styled.div`

  background-color: #8282f0;
  margin-bottom: -15px;
`;

export default Footer;
