<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useCallback } from "react";

// dados compartilhados no contexto - propiedades que vao poder ser disponibilizadas no contexto
interface IUsuarioLogadoContextData {
    nomeUsuario: string;
    logout: () => void;
=======
import React, { createContext } from "react";
=======
import React, { createContext, useCallback } from "react";
>>>>>>> feature/hooks

// dados compartilhados no contexto - propiedades que vao poder ser disponibilizadas no contexto
interface IUsuarioLogadoContextData {
    nomeUsuario: string;
<<<<<<< HEAD
>>>>>>> feature/contexts
=======
    logout: () => void;
>>>>>>> feature/hooks
};

// criando canal de transmissao - subcomponenetes (provider, consumer) - parametros de tipagem
// objeto vazio {} - representacao IUsuarioLogadoContextData
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

// passando dado: nomeUsuario, para os filhos do provider 
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ( {children} ) => {
<<<<<<< HEAD
<<<<<<< HEAD

    // crianca funcao para ser usada no contexto
=======

>>>>>>> feature/hooks
    const handlerLogout = useCallback(() => {
        console.log('Testando botao');
    }, []);

<<<<<<< HEAD
    return(
        <UsuarioLogadoContext.Provider value={{ nomeUsuario: "Felipe", logout: handlerLogout }}>
=======
    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: "Felipe"}}>
>>>>>>> feature/contexts
=======
    return(
        <UsuarioLogadoContext.Provider value={{ nomeUsuario: "Felipe", logout: handlerLogout }}>
>>>>>>> feature/hooks
            {children}
        </UsuarioLogadoContext.Provider>
    );
};