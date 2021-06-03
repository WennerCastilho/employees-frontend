import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";

export const Header = () => (
  <Container>
    <span className="nome">Nome</span>
    <span className="cpf">CPF</span>
    <span className="salario">Salário</span>
    <span className="desconto">Desconto</span>
    <span className="dependentes">Dependentes</span>
    <span className="desconto_IRPF">IRPF</span>
    <span className="deletar">Editar</span>
  </Container>
);

export const Employee = ({ employees }) => (
  <Container>
    <span className="nome">{employees.nome}</span>
    <span className="cpf">{employees.cpf}</span>
    <span className="salario">R$ {employees.salario}</span>
    <span className="desconto">R$ {employees.desconto.toFixed(2)}</span>
    <span className="dependentes">{employees.dependentes}</span>
    <span className="desconto_IRPF">
      R$ {employees.desconto_IRPF.toFixed(2)}
    </span>
    <span className="deletar">
      <BsPencil style={{ fontSize: "22px" }} />
      <RiDeleteBin6Line style={{ fontSize: "22px" }} />
    </span>
  </Container>
);

export const Container = styled.div`
  background-color: lightcoral;
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    text-align: center;
  }

  span.nome {
    min-width: 230px;
    width: 25%;
  }
  span.cpf {
    min-width: 110px;
    width: 12%;
  }
  span.salario {
    min-width: 100px;
    width: 15%;
  }
  span.desconto {
    min-width: 100px;
    width: 10%;
  }
  span.dependentes {
    min-width: 110px;
    width: 10%;
  }
  span.desconto_IRPF {
    min-width: 100px;
    width: 15%;
  }
  span.deletar {
    min-width: 100px;
    width: 10%;
  }
`;
