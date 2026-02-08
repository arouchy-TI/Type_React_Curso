import type React from "react";
import { useUsuarioLogado } from "../../../shared/hooks";

interface IButtonLoginProps {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: React.ReactNode
};

export const ButtonLoggin: React.FC<IButtonLoginProps> = ( { type, onClick, children } ) => {

    // usando use Context - varias partes da aplicacao
    const {nomeUsuario} = useUsuarioLogado(); 

    return(
        <button type={type} onClick={onClick}>
           {nomeUsuario} {children}
        </button>
    );
};