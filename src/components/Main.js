import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <h1>
        Join The <br />
        Team
      </h1>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 87px;
    line-height: 102px;

    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
export default Main;
