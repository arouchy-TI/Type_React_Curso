import { use, useEffect, useState } from "react";

// Componente de Login 
export const Login = () => {
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    };

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
    
    return(
        <div>
            <form >
                <label>
                    <span>Email</span>
                    <input value={email} onChange={evento => setEmail(evento.target.value)} />
                </label>

                <label>
                    <span>Senha</span>
                    <input value={password} onChange={evento => setPassword(evento.target.value)} />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    );
};