import React, { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeUsuario: string;
};

// criando canal de transmissao - subcomponenetes (provider, consumer)
const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ( {children} ) => {
    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: "Felipe"}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};