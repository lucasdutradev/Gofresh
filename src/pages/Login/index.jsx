import Logo from "../../images/logoGoFresh.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputsDefault from "../../components/InputsDefault";
import {
    BoxIcon,
    ContainerBox,
    FormBox,
    LeftBox,
    Line,
    LineBox,
    RigthBox,
    SocialBox,
    SocialBoxIcon,
} from "./style";
import ButtonDefault from "../../components/Button";
import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LoginContext } from "../../Providers/postLogin";

const LoginPage = () => {
    const { handleSubmitPostLogin } = useContext(LoginContext);
    const formValidation = yup.object().shape({
        email: yup
            .string()
            .required("E-mail obrigatorio")
            .email("E-mail invalido."),
        password: yup.string().required("Senha Obrigatoria"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formValidation),
    });

    const onSubmitFunction = (data) => {
        handleSubmitPostLogin(data);
    };

    return (
        <ContainerBox>
            <RigthBox>
                <div className="box-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <h3>Login</h3>
                <h1>Go fresh in your home</h1>
                <FormBox onSubmit={handleSubmit(onSubmitFunction)}>
                    <span className="error">{errors.email?.message}</span>
                    <InputsDefault
                        isError={errors.email?.message}
                        nameInput="email"
                        register={register}
                        type={"text"}
                        placeholder={"Digite seu e-mail:"}
                    />
                    <span className="error">{errors.password?.message}</span>
                    <InputsDefault
                        isError={errors.password?.message}
                        nameInput="password"
                        register={register}
                        type={"text"}
                        placeholder={"Digite sua senha:"}
                    />

                    <span className="register-box">
                        Não possui conta? <p>Cadastre-se</p>
                    </span>
                    <ButtonDefault type="Submit">Login</ButtonDefault>
                </FormBox>
                <SocialBox>
                    <LineBox>
                        <Line></Line>
                        <p>OU</p>
                        <Line></Line>
                    </LineBox>
                    <SocialBoxIcon>
                        <BoxIcon initColor>
                            <FaFacebookF />
                        </BoxIcon>
                        <BoxIcon>
                            <FcGoogle />
                        </BoxIcon>
                    </SocialBoxIcon>
                </SocialBox>
            </RigthBox>
            <LeftBox></LeftBox>
        </ContainerBox>
    );
};
export default LoginPage;
