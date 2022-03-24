import { createContext, useState } from "react";

export const HomeContext = createContext([]);

export const HomeProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [modal, setModal] = useState(false);

    const rating = [
        {
            title: "Mariana Oliveira",
            description:
                "Pratos muito bons e de fácil preparo. Está sendo melhor cozinhar com Go Fresh... Ganhei mais tempo nos meus dias. Recomendo!!",
        },
        {
            title: "Antonio Carlos S.",
            description:
                "Aprendi muitas receitas novas, e não preciso mais me preocupar de ir ao mercado. Agora com go fresh, minha geladeira tem sempre alimentos de qualidade e na quantidade correta.",
        },
        {
            title: "Daniel Ferreira",
            description:
                "Rápido, prático e muito gostoso. Go fresh tem salvado minhas semanas corridas. Recomendo 100%.",
        },
        {
            title: "Lucia Silva",
            description:
                "Testado e aprovado!! Muito bom poder escolher pratos diferentes para cada dia da semana, e receber alimentos frescos e bem embalados. Ainda posso escolher o dia que quero receber.",
        },
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
        <HomeContext.Provider
            value={{ rating, count, addCount, subCount, modal, setModal }}
        >
            {children}
        </HomeContext.Provider>
    );
};
