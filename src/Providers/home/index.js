import { createContext, useState } from "react";

export const HomeContext = createContext([]);

export const HomeProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const rating = [
        { title: "Título 1", description: "Descrição 1" },
        { title: "Título 2", description: "Descrição 2" },
        { title: "Título 3", description: "Descrição 3" },
        { title: "Título 4", description: "Descrição 4" },
    ];

    const addCount = () => {
        if (count < 3) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    };

    const subCount = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(3);
        }
    };

    return (
        <HomeContext.Provider value={{ rating, count, addCount, subCount }}>
            {children}
        </HomeContext.Provider>
    );
};
