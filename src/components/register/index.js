import styled from "styled-components";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Snackbar } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/modules/employees/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Register = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const axios = await require("axios");
    await axios
      .post("http://127.0.0.1:8000/api/employees/", {
        nome: data.nome,
        cpf: Number(data.cpf),
        salario: Number(data.salario),
        desconto: Number(data.desconto),
        dependentes: Number(data.dependentes),
      })
      .then((response) => {
        dispatch(dispatch(addEmployee(response.data)));
        setMessage("Funcionário criado com sucesso!");
        setOpen(true);
      })
      .catch(() => {
        setMessage("Nome ou CPF já existe!");
        setOpen(true);
      });
  };

  return (
    <Container>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("nome", { required: true })}
          id="nome"
          label="Nome"
          required
          autoFocus
        />

        <TextField
          {...register("cpf", { required: true })}
          id="cpf"
          label="CPF"
          required
          type="number"
        />
        <TextField
          {...register("salario", { required: true })}
          id="salario"
          label="Salário"
          required
          type="number"
        />
        <TextField
          {...register("desconto", { required: true })}
          id="desconto"
          label="Desconto"
          required
          type="number"
        />
        <TextField
          {...register("dependentes", { required: true })}
          id="dependentes"
          label="Dependentes"
          required
          type="number"
        />
        <p>
          {(errors?.nome?.type === "required" ||
            errors?.cpf?.type === "required" ||
            errors?.salario?.type === "required" ||
            errors?.desconto?.type === "required" ||
            errors?.dependentes?.type === "required") &&
            "⚠ Todos os campos são de preenchimento obrigatório"}
        </p>

        <input type="submit" value="Enviar" className="submit" />
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 5px 5px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    background-image: linear-gradient(to bottom right, #43b0b5, #d2c9a2);
    width: 40%;
    height: 60%;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: #bf1650;
      font-size: 14px;
    }

    input.submit {
      width: 40%;
      height: 30px;
      font-size: 14px;
      text-transform: uppercase;
      background: #00363a;
      color: #98d0bf;
      transition: 0.4s;

      :hover {
        background: #00363acf;
        color: #fff;
        transition: 0.4s;
      }
    }
  }

  @media (max-width: 892px) {
    form {
      background: transparent;
      margin-top: 30px;
    }
  }
`;
