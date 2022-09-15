import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";
import Main from "./Main";
import SideBar from "./SideBar";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <SideBar></SideBar>
        <Main></Main>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background: url(${bgImg}) no-repeat center center / cover;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
