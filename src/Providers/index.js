import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";
import { ListProvider } from "./list";
import { CountPageProvider } from "./countPage";
import { HeaderProvider } from "./header";
import { CartProvider } from "./cart";
import { ChangeCategoryProvider } from "./changeCategory";
import { ConfigProvider } from "./userConfig";
import { CartEndProvider } from "./cartEnd";

const Provider = ({ children }) => {
  return (
    <CartEndProvider>
      <ChangeCategoryProvider>
        <ConfigProvider>
          <CartProvider>
            <ListProvider>
              <CountPageProvider>
                <HeaderProvider>
                  <RegisterProvider>
                    <LoginProvider>{children}</LoginProvider>
                  </RegisterProvider>
                </HeaderProvider>
              </CountPageProvider>
            </ListProvider>
          </CartProvider>
        </ConfigProvider>
      </ChangeCategoryProvider>
    </CartEndProvider>
  );
};

export default Provider;
