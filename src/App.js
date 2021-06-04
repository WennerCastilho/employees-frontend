import styled from "styled-components";
import { Sidebar } from "./components/sidebar";
import { Switch, Route } from "react-router-dom";

import { Home } from "./components/home";
import { Register } from "./components/register";

export const App = () => (
  <Container>
    <Sidebar />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cadastrar">
          <Register />
        </Route>
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

  @media (max-width: 892px) {
    position: static;
    border-radius: 0;
    flex-direction: column;

    background-color: transparent;
    backdrop-filter: blur(1px);
  }
`;
