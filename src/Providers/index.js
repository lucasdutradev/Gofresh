import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";

const Provider = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>{children}</LoginProvider>
    </RegisterProvider>
  );
};

export default Provider;
