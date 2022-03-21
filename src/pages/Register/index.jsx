import Logo from "../../images/logoGoFresh.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputsDefault from "../../components/InputsDefault";
import { ContainerBox, FormBox, LeftBox, RigthBox } from "./style";
import ButtonDefault from "../../components/Button";
import { useContext } from "react";
import { RegisterContext } from "../../Providers/postRegister";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Providers/postLogin";
import { Redirect } from "react-router-dom";

const RegisterPage = () => {
  const { isLogin } = useContext(LoginContext);
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

  const onSubmitFunction = (data) => {
    data = {
      ...data,
      codigoConvite: Math.floor(Date.now() * Math.random()).toString(36),
    };
    handleSubmitPost(data);
  };

  if (isLogin) {
    return <Redirect to="/menu" />;
  }

  return (
    <ContainerBox>
      <RigthBox>
        <div className="box-logo">
          <img src={Logo} alt="logo" />
        </div>
        <h3>Registro</h3>
        <h1>Go fresh in your home</h1>
        <FormBox onSubmit={handleSubmit(onSubmitFunction)}>
          <span className="error">{errors.name?.message}</span>
          <InputsDefault
            isError={errors.name?.message}
            type={"text"}
            nameInput="name"
            register={register}
            placeholder={"*Digite seu nome:"}
          />
          <span className="error">{errors.email?.message}</span>
          <InputsDefault
            isError={errors.email?.message}
            nameInput="email"
            register={register}
            type={"text"}
            placeholder={"*Digite seu melhore e-mail:"}
          />
          <span className="error">{errors.password?.message}</span>
          <InputsDefault
            isError={errors.password?.message}
            nameInput="password"
            register={register}
            type={"text"}
            placeholder={"*Digite uma senha forte:"}
          />
          <span className="error">{errors.confirmPassword?.message}</span>
          <InputsDefault
            isError={errors.confirmPassword?.message}
            nameInput="confirmPassword"
            register={register}
            type={"text"}
            placeholder={"*Confirme sua senha:"}
          />
          <InputsDefault
            nameInput="cep"
            register={register}
            type={"text"}
            placeholder={"Digite seu cep (ex: 00000-000)"}
          />
          <span>
            Ja possui conta?
            <p>
              <Link to="/login">Login</Link>
            </p>
          </span>
          <ButtonDefault type="Submit">Registrar</ButtonDefault>
        </FormBox>
      </RigthBox>
      <LeftBox></LeftBox>
    </ContainerBox>
  );
};
export default RegisterPage;
