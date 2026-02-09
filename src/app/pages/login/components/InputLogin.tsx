import React from "react";

// Interface vai especificar quais Atributos ou propriedades Componente espera receber - vao fazer parte do componente
interface IInputLoginProps{
    label: string;
    value: string;
    type?: string;
    // passar funcoes ao componentes
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
};

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {

    return(

        <div>

            <label>

                <span>{props.label}</span>
                <input 
                    ref={ref}
                    value={props.value}
                    type={props.type}
                    onChange={evento => props.onChange(evento.target.value)}
                    onKeyDown={evento => evento.key === 'Enter' 
                        ? props.onPressEnter && props.onPressEnter() 
                        : undefined
                    }
                />

            </label>

        </div>
    );
});