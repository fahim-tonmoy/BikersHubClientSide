import React from "react";
import styled from "styled-components";

const BottomFooter = () => {
  return (
    <BottomFooterStyled>
      <p className="">&copy; BikersHub Ltd.</p>
      <p>
        Design and Developed By
        <a
          className="link"
          target=" _blank"
          href="https://www.facebook.com/fahim.hasan801/"
        >
          Fahim Hasan
        </a>
      </p>
    </BottomFooterStyled>
  );
};

const BottomFooterStyled = styled.div`
  /* height: 35px; */
  background-color: #1976d2ca;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: 600;
    /* padding: 10px ; */
    a {
      margin-left: 3px;
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: #34b434;
    }
  }
`;

export default BottomFooter;
