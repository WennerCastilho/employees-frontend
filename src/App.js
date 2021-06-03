import styled from "styled-components";
import { Sidebar } from "./components/sidebar";
import { Switch, Route } from "react-router-dom";

import { ListEmployees } from "./components/listEmployees";

export const App = () => (
  <Container>
    <Sidebar />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <div className="header"></div>
          <ListEmployees />
        </Route>
        <Route path="/buscar">
          <div className="header"></div>
          Campo de Busca
        </Route>
        <Route path="/cadastrar">
          <div className="header"></div>
          Página de Cadastro
        </Route>
      </Switch>
    </div>
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

  div.content {
    width: 100%;
    /* background: red; */
    border-radius: 0 5px 5px 0;
  }
`;
