import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { allEmployees } from "../../store/modules/employees/actions";

import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";

import { Delete } from "./delete";
import { Update } from "./update";

export const Home = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const getEmployees = async () => {
    const axios = require("axios");
    let response = await axios.get("http://127.0.0.1:8000/api/employees/");
    let data = await response;
    return dispatch(allEmployees(data.data));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const additionalCols = [
    {
      header: "Modificar",
      td: (data) => {
        return (
          <div className="modificar">
            <Update employee={data} />
            <Delete employee={data} />
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {employees && (
        <ReactFlexyTable
          data={employees}
          filterable
          additionalCols={additionalCols}
          pageSizeOptions={[5, 10]}
          className="table"
          previousText="Voltar"
          nextText="Avançar"
        />
      )}
    </Container>
  );
};

export const Container = styled.div`
  height: 100%;
  --rft-main-color: #00363a;
  --rft-button-color: #00363a;
  --rft-even-row-color: #f3f3f3;

  border-left: 2px solid transparent;

  table {
    border-radius: 0 5px 0 0;
    th {
      :hover {
        background: transparent;
      }
    }

    tr {
      :hover {
        color: #000;
      }
    }
  }

  div.modificar {
    display: flex;
  }

  @media (max-width: 892px) {
    border: 0;
    border-top: 10px solid transparent;
    border-radius: 0;

    table {
      border-radius: 0;
    }
  }
`;
