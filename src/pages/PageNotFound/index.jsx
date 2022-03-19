import FallCup from "../../images/coffe.svg";
import { BoxContainer } from "./style";
import ButtonDefault from "../../components/Button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <BoxContainer>
      <img src={FallCup} alt="404" />
      <h1>404</h1>
      <p>Pagina não encontrada</p>
      <ButtonDefault>
        <Link to="/login">Voltar</Link>
      </ButtonDefault>
    </BoxContainer>
  );
};

export default PageNotFound;
