import styled from "styled-components";

export const Employee = ({ employees }) => (
  <Container>
    <span className="nome">{employees.nome}</span>
    <span className="cpf">{employees.cpf}</span>
    <span className="salario">{employees.salario}</span>
    <span className="desconto">{employees.desconto}</span>
    <span className="dependentes">{employees.dependentes}</span>
    <span className="desconto_IRPF">{employees.desconto_IRPF}</span>
    <span className="deletar">{employees.deletar || "X"}</span>
  </Container>
);

export const Container = styled.div`
  background-color: lightcoral;
  width: 800px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
