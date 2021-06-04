import styled from "styled-components";

import { Link } from "react-router-dom";

import { BsHouseDoor } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";

export const Sidebar = () => (
  <Container>
    <Icon to="/">
      <BsHouseDoor />
    </Icon>
    <Icon to="/cadastrar">
      <HiUserAdd />
    </Icon>
  </Container>
);

export const Container = styled.div`
  width: 60px;

  background: #00363a;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px 0 0 5px;

  @media (max-width: 892px) {
    width: 100%;
    height: 80px;
    border-radius: 0;

    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Icon = styled(Link)`
  color: #fff;
  font-size: 20px;

  width: 50px;
  height: 50px;
  margin-top: 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #fff;
    color: #00363a;
    font-size: 24px;
  }
`;
