import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/inputLogin";

// Componente de Login 
export const Login = () => {

    // usando use Ref
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    
    // usando use state
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    // usando use callback
    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);

    }, [email, password]);

    // usando use effect
    useEffect(() => {
        if(window.confirm("Voce é homem?")){
            console.log("Usuario é homem");
        } else {
            console.log("Usuario é mulher");
        }
    }, []);

    useEffect(() => {
        console.log(email);
    }, [email]);

    useEffect(() => {
        console.log(password);
    }, [password]);

    // usando use memo - memoriza o valor calculado
    const emailLength = useMemo(() => {
        console.log("Calculando tamanho do email...");
        return email.length * 1000;
    }, [email.length]);


    
    return(
        <div>
            <form >

                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                    label="Email"
                    value={email}  
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus() }
                />

                <InputLogin
                    type="password"
                    label="Senha"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />
                

                {/* <label>
                    <span>Senha</span>
                    <input 
                        type="password"
                        value={password}
                        ref={inputPasswordRef}
                        onChange={evento => setPassword(evento.target.value)} 
                        />
                </label> */}

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    );
};