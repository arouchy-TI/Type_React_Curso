import { useEffect, useMemo, useState } from "react";

// Componente de Login 
export const Login = () => {
    // usando use state
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    };

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

    // usando use memo
    const emailLength = useMemo(() => {
        console.log("Calculando tamanho do email...");
        return email.length * 1000;
    }, [email.length]);
    
    return(
        <div>
            <form >

                <p>Quantidade de caracteres no email: {emailLength}</p>

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