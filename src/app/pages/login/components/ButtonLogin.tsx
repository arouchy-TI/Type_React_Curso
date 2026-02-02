import type React from "react";
import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/context";

interface IButtonLoginProps {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: React.ReactNode
};

export const ButtonLoggin: React.FC<IButtonLoginProps> = ( { type, onClick, children } ) => {

    // usando use Context - varias partes da aplicacao
    const {nomeUsuario} = useContext(UsuarioLogadoContext)

    return(
        <button type={type} onClick={onClick}>
           {nomeUsuario} {children}
        </button>
    );
};