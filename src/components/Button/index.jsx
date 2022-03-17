import { ButtonRed } from "./style";

const ButtonDefault = ({ children, ...res }) => {
  return <ButtonRed {...res}>{children}</ButtonRed>;
};

export default ButtonDefault;
