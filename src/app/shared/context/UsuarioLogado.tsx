import React, { createContext } from "react";

// dados compartilhados no contexto - propiedades que vao poder ser disponibilizadas no contexto
interface IUsuarioLogadoContextData {
    nomeUsuario: string;
    logout: () => void;
};

// criando canal de transmissao - subcomponenetes (provider, consumer) - parametros de tipagem
// objeto vazio {} - representacao IUsuarioLogadoContextData
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

// passando dado: nomeUsuario, para os filhos do provider 
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ( {children} ) => {
    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: "Felipe"}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};