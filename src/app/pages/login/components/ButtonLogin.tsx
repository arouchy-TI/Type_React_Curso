import type React from "react";

interface IButtonLoginProps {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: React.ReactNode
};

export const ButtonLoggin: React.FC<IButtonLoginProps> = ( { type, onClick, children } ) => {
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};