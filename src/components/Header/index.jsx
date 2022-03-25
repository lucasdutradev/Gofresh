import { HeaderStyled, StyledBurger, Nav } from "./style";
import Logo from "../../images/logoGoFresh.png";
import { useContext } from "react";
import { HeaderContext } from "../../Providers/header";
import { ConfigContext } from "../../Providers/userConfig";
import { Link } from "react-router-dom";
import { FiCornerDownRight } from "react-icons/fi";

const Header = () => {
  const { open, setOpen } = useContext(HeaderContext);
  const { userInfo } = useContext(ConfigContext);
  const desconect = () => {
    localStorage.clear();
    document.location.reload(true);
  };

  return (
    <HeaderStyled>
      <Link to="/">
        <img src={Logo} alt="Logomarca" />
      </Link>

      {localStorage.getItem("@Token") && (
        <Link to="configuration">
          {userInfo.name !== undefined ? (
            <div className="containerUser">{userInfo.name[0]}</div>
          ) : (
            <></>
          )}
        </Link>
      )}

      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav open={open}>
        <Link to="/">
          <li>Início</li>
        </Link>
        <Link to="/menu">
          <li>Cardápio</li>
        </Link>
        {localStorage.getItem("@Token") ? (
          <>
            <Link to="/configuration">
              <li>Configuração</li>
            </Link>
            <hr />
            <button onClick={desconect}>
              <li>
                Desconectar <FiCornerDownRight />
              </li>
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <li>Cadastrar</li>
            </Link>
            <Link to="/login">
              <li>Entrar</li>
            </Link>
          </>
        )}
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
