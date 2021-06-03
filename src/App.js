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
          <ListEmployees />
        </Route>
        <Route path="/cadastrar">Página de Cadastro</Route>
      </Switch>
    </div>
  </Container>
);

export const Container = styled.div`
  position: absolute;
  top: 40px;
  right: 50px;
  bottom: 40px;
  left: 50px;

  display: flex;

  background-color: #ffffff4d;
  border-radius: 5px;
  font-family: sans-serif;
  backdrop-filter: blur(10px);

  div.content {
    width: 100%;
    border-radius: 0 5px 5px 0;
  }
`;
