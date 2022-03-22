import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <HeaderContext.Provider value={{ open, setOpen }}>
            {children}
        </HeaderContext.Provider>
    );
};
