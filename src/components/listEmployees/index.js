import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { allEmployees } from "../../store/modules/employees/actions";

import { Employee } from "../employee";

export const ListEmployees = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const getEmployees = async () => {
    const axios = require("axios");
    let response = await axios.get("http://127.0.0.1:8000/api/employees/");
    let data = await response;
    console.log("Requisitou");
    return dispatch(allEmployees(data.data));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <Container>
      <Employee
        employees={{
          nome: "Nome",
          cpf: "CPF",
          salario: "Salário",
          desconto: "Desconto",
          dependentes: "Dependentes",
          desconto_IRPF: "IRPF",
          deletar: "Deletar",
        }}
        key="header"
      />
      {employees &&
        employees.map((element) => (
          <Employee employees={element} key={element.nome} />
        ))}
    </Container>
  );
};

export const Container = styled.div``;
