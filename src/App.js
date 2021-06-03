import styled from "styled-components";
import { Sidebar } from "./components/sidebar";
import { Switch, Route } from "react-router-dom";

import { ListEmployees } from "./components/listEmployees";

export const App = () => (
  <Container>
    <Sidebar />
    <Switch>
      <Route exact path="/">
        <ListEmployees />
      </Route>
      <Route path="/buscar">Campo de Busca</Route>
      <Route path="/cadastrar">Página de Cadastro</Route>
    </Switch>
  </Container>
);

export const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  bottom: 50px;
  left: 50px;

  display: flex;

  background-color: #ffffff4d;
  border-radius: 5px;
  font-family: sans-serif;
  backdrop-filter: blur(10px);
`;
// SideBar #00363a
