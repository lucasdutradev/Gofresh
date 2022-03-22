import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";
import { ListProvider } from "./list";
import { CountPageProvider } from "./countPage";
import { CartProvider } from "./cart";

const Provider = ({ children }) => {
  return (
    <ListProvider>
      <CountPageProvider>
        <RegisterProvider>
          <LoginProvider>
            <CartProvider>{children}</CartProvider>
          </LoginProvider>
        </RegisterProvider>
      </CountPageProvider>
    </ListProvider>
  );
};

export default Provider;
