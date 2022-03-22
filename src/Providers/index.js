import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";
import { ListProvider } from "./list";
import { CountPageProvider } from "./countPage";
import { CartProvider } from "./cart";
import { ChangeCategoryProvider } from "./changeCategory";

const Provider = ({ children }) => {
  return (
    <ChangeCategoryProvider>
      <CartProvider>
        <ListProvider>
          <CountPageProvider>
            <RegisterProvider>
              <LoginProvider>{children}</LoginProvider>
            </RegisterProvider>
          </CountPageProvider>
        </ListProvider>
      </CartProvider>
    </ChangeCategoryProvider>
  );
};

export default Provider;
