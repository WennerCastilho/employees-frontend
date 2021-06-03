import styled from "styled-components";

import { Link } from "react-router-dom";

import { BsSearch, BsHouseDoor } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const employees = useSelector((state) => state.employees);
  return (
    <Container>
      <Icon to="/">
        <BsHouseDoor />
      </Icon>
      <Icon to="/buscar">
        <BsSearch />
      </Icon>
      <Icon to="/cadastrar">
        <HiUserAdd />
      </Icon>
    </Container>
  );
};

export const Container = styled.div`
  width: 60px;

  background: #00363a;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px 0 0 5px;
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
