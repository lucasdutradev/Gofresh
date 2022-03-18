import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";
import { ListProvider } from "./list";
import { CountPageProvider } from "./countPage";

const Provider = ({ children }) => {
  return (
    <ListProvider>
      <CountPageProvider>
        <RegisterProvider>
          <LoginProvider>{children}</LoginProvider>
        </RegisterProvider>
      </CountPageProvider>
    </ListProvider>
  );
};

export default Provider;
