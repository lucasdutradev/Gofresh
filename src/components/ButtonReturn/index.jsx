import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BtnReturn } from "./style";

export const ButtonReturn = () => {
  return (
    <BtnReturn>
      <Link to="/menu">voltar ao menu</Link>
    </BtnReturn>
  );
};
