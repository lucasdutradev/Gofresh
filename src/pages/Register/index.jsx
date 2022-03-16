// import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonRed } from "../../components/Button/style";
import InputsDefault from "../../components/InputsDefault";
import { ContainerBox, FormBox } from "./style";

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup
      .string()
      .required("E-mail obrigatorio")
      .email("E-mail invalido."),
    password: yup
      .string()
      .required("Senha Obrigatoria")
      .min(8, "no minimo 8 caracteres"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => console.log(data);
  return (
    <ContainerBox>
      <h3>Registro</h3>
      <h1>Go fresh in your home</h1>
      <FormBox onSubmit={handleSubmit(onSubmitFunction)}>
        <InputsDefault {...register("name")} placeholder="Digite seu nome:" />
        <InputsDefault
          {...register("email")}
          placeholder="Digite seu melhore e-mail:"
        />
        <InputsDefault
          {...register("password")}
          type="password"
          placeholder="Digite uma senha forte:"
        />
        <InputsDefault
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirme sua senha:"
        />
        <InputsDefault
          {...register("cep")}
          type="text"
          placeholder="Digite seu cep (ex: 00000-000)"
        />
      </FormBox>
      <span>
        Ja possui conta? <p>Login</p>
      </span>
      <ButtonRed>Registrar</ButtonRed>
    </ContainerBox>
  );
};
export default Register;
