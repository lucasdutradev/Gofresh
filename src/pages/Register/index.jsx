// import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputsDefault from "../../components/InputsDefault";
import { ContainerBox, FormBox } from "./style";
import ButtonDefault from "../../components/Button";
import { useContext } from "react";
import { RegisterContext } from "../../Providers/postRegister";

const RegisterPage = () => {
  const { handleSubmitPost } = useContext(RegisterContext);
  const formValidation = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup
      .string()
      .required("E-mail obrigatorio")
      .email("E-mail invalido."),
    password: yup
      .string()
      .required("Senha Obrigatoria")
      .matches(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        "Senha fraca"
      ),
    confirmPassword: yup
      .string()
      .required("E necessário preencher o campo.")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
    cep: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  });
  console.log(errors);

  const onSubmitFunction = (data) => {
    data = {
      ...data,
      codigoConvite: Math.floor(Date.now() * Math.random()).toString(36),
    };
    handleSubmitPost(data);
  };

  return (
    <ContainerBox>
      <h3>Registro</h3>
      <h1>Go fresh in your home</h1>
      <FormBox onSubmit={handleSubmit(onSubmitFunction)}>
        <InputsDefault
          type={"text"}
          nameInput="name"
          register={register}
          placeholder={"Digite seu nome:"}
        />
        <InputsDefault
          nameInput="email"
          register={register}
          type={"text"}
          placeholder={"Digite seu melhore e-mail:"}
        />
        <InputsDefault
          nameInput="password"
          register={register}
          type={"text"}
          placeholder={"Digite uma senha forte:"}
        />
        <InputsDefault
          nameInput="confirmPassword"
          register={register}
          type={"text"}
          placeholder={"Confirme sua senha:"}
        />
        <InputsDefault
          nameInput="cep"
          register={register}
          type={"text"}
          placeholder={"Digite seu cep (ex: 00000-000)"}
        />
        <span>
          Ja possui conta? <p>Login</p>
        </span>
        <ButtonDefault type="Submit">Registrar</ButtonDefault>
      </FormBox>
    </ContainerBox>
  );
};
export default RegisterPage;
