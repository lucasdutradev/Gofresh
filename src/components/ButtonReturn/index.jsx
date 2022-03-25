import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BtnReturn } from "./style";

export const ButtonReturn = () => {
  return (
    <BtnReturn>
      <Link to="/menu">&lt; IR PARA LISTA</Link>
    </BtnReturn>
  );
};
