import { createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/api";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
  const handleSubmitPost = (data) => {
    Api.post("/register", data)
      .then((_) => {
        toast.success("Registrado com sucesso!");
      })
      .catch((_) => {
        toast.error("E-mail ja existente");
      });
  };

  return (
    <RegisterContext.Provider value={{ handleSubmitPost }}>
      {children}
    </RegisterContext.Provider>
  );
};
