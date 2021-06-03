import styled from "styled-components";

import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { removeEmployee } from "../../store/modules/employees/actions";

export const Delete = ({ employee }) => {
  const dispatch = useDispatch();

  const getEmployees = () => {
    const axios = require("axios");
    axios.delete(`http://127.0.0.1:8000/api/employees/${employee.id}/`);
    dispatch(removeEmployee(employee));
  };

  return (
    <Container>
      <span className="delete" onClick={getEmployees}>
        <RiDeleteBin6Line />
      </span>
    </Container>
  );
};

export const Container = styled.div`
  span {
    font-size: 20px;
  }
`;
