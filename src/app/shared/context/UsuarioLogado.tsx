import React, { createContext } from "react";

// dados compartilhados no contexto
interface IUsuarioLogadoContextData {
    nomeUsuario: string;
};

// criando canal de transmissao - subcomponenetes (provider, consumer) - parametros de tipagem
// objeto vazio {} - representacao IUsuarioLogadoContextData
const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

// contante do tipo, componente react funcional
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ( {children} ) => {
    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: "Felipe"}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};