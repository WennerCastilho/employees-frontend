import styled from "styled-components";

import { BsPencil } from "react-icons/bs";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../store/modules/employees/actions";

export const Update = ({ employee }) => {
  const [showModal, setShow] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const axios = await require("axios");
    const response = await axios.patch(
      `http://127.0.0.1:8000/api/employees/${employee.id}/`,
      data
    );
    await dispatch(updateEmployee(response));
    hideModal();
  };

  const hideModal = () => setShow(!showModal);

  return (
    <Container>
      <span
        className="pencil"
        onClick={() => setShow((prevState) => !prevState)}
      >
        <BsPencil />
      </span>
      {showModal && <div className="background" onClick={hideModal} />}
      {showModal && (
        <Modal>
          <div className="modal header-modal">
            <h2>Editar Funcionário</h2>
          </div>

          <div className="modal body-modal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Nome</label>
              <input {...register("nome")} defaultValue={employee.nome} />
              <label>CPF</label>
              <input {...register("cpf")} defaultValue={employee.cpf} />
              <label>Salário</label>
              <input {...register("salario")} defaultValue={employee.salario} />
              <label>Desconto</label>
              <input
                {...register("desconto")}
                defaultValue={employee.desconto}
              />
              <label>Dependentes</label>
              <input
                {...register("dependentes")}
                defaultValue={employee.dependentes}
              />
              <div className="footer-modal">
                <button onClick={hideModal}>Cancelar</button>
                <input type="submit" />
              </div>
            </form>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export const Container = styled.div`
  span {
    font-size: 20px;
  }
  span.pencil {
    margin-right: 8px;
  }

  div.background {
    background: #00000082;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const Modal = styled.div`
  background-image: linear-gradient(to bottom right, #43b0b5, #d2c9a2);
  position: absolute;
  top: 15%;
  right: 30%;
  bottom: 15%;
  left: 30%;
  padding: 0 20px 20px;
  color: #00363a;

  div.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div.header-modal {
    height: 15%;
    align-items: flex-start;
  }
  div.body-modal {
    height: 85%;

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      label {
        margin: 10px auto;
      }

      input {
        width: 50%;
        outline: none;
        padding: 10px 5px;
        margin: 0 auto;
        text-align: center;
      }
      div.footer-modal {
        width: 80%;
        margin: 10px auto;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        button,
        input {
          width: 80px;
          border: 0;
          margin: 0 0 0 10px;
          padding: 10px;
          font-weight: 700;
          background: #0002;
          color: #00363a;
          cursor: pointer;
        }
      }
    }
  }
`;
