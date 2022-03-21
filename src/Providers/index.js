import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";
import { ListProvider } from "./list";
import { CountPageProvider } from "./countPage";
import { CartProvider } from "./cart";

const Provider = ({ children }) => {
  return (
    <CartProvider>
      <ListProvider>
        <CountPageProvider>
          <RegisterProvider>
            <LoginProvider>{children}</LoginProvider>
          </RegisterProvider>
        </CountPageProvider>
      </ListProvider>
    </CartProvider>
  );
};

export default Provider;
