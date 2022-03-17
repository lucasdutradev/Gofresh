import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";
import { ListProvider } from "./list";

const Provider = ({ children }) => {
  return (
    <ListProvider>
      <RegisterProvider>
        <LoginProvider>{children}</LoginProvider>
      </RegisterProvider>
    </ListProvider>
  );
};

export default Provider;
