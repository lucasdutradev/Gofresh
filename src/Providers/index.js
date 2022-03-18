import { RegisterProvider } from "./postRegister";
import { LoginProvider } from "./postLogin";
import { ListProvider } from "./list";
import { CountPageProvider } from "./countPage";
import { HeaderProvider } from "./header";

const Provider = ({ children }) => {
    return (
        <ListProvider>
            <CountPageProvider>
                <HeaderProvider>
                    <RegisterProvider>
                        <LoginProvider>{children}</LoginProvider>
                    </RegisterProvider>
                </HeaderProvider>
            </CountPageProvider>
        </ListProvider>
    );
};

export default Provider;
