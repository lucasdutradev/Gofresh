import { RegisterProvider } from "./postRegister";
import { ListProvider } from "./list";

const Provider = ({ children }) => {
  return (
    <ListProvider>
      <RegisterProvider>{children}</RegisterProvider>
    </ListProvider>
  );
};

export default Provider;
