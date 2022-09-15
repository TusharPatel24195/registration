import React from "react";
import styled from "styled-components";
import logo from "../assets/logo1.svg";
import Input from "./Input";

const sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} />
        <h3>
          Eli <span>Codes</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Password" type="password" />
        <button>Sign Up</button>
      </Form>
    </Container>
  );
};

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #666666;
  }

  button {
    width: 335px;
    height: 59px;
    left: 93px;
    top: 682px;

    background: #70edb9;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    border-radius: 11px;

    background: #70edb9;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 11px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    /* identical to box height */

    color: #ffffff;
    cursor: pointer;
    margin: 1rem 0;
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    text-align: center;
    color: #ff8d8d;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 519px;
  height: 100%;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(48px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
`;

export default sidebar;
