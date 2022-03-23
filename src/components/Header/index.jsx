import { HeaderStyled, StyledBurger, Nav } from "./style";
import Logo from "../../images/logoGoFresh.png";
import { useContext } from "react";
import { HeaderContext } from "../../Providers/header";

const Header = () => {
  const { open, setOpen } = useContext(HeaderContext);

  return (
    <HeaderStyled>
      <img src={Logo} alt="Logomarca" />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav open={open}>
        <li>Início</li>
        <li>Cardápio</li>
        <li>Cadastrar</li>
        <li>Entrar</li>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
