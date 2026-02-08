import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLoggin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";


// Componente de Login 
export const Login = () => {

    // usando use Context - varias partes da aplicacao
    const {nomeUsuario} = useUsuarioLogado();

    // usando use Ref
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    
    // usando use state
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    // usando use callback
    const handleEntrar = useCallback( () => {
        console.log(email);
        console.log(password);

    }, [email, password] );

    // usando use effect - mensagem aparecendo na tela roda apenas uma vez
    useEffect(() => {
        if(window.confirm("Voce é homem?")){
            console.log("Usuario é homem");
        } else {
            console.log("Usuario é mulher");
        }
    }, []);

    // toda letra digitada dispara um console.log
    useEffect(() => {
        console.log(email);
    }, [email]);

    useEffect(() => {
        console.log(password);
    }, [password]);

    // usando use memo - memoriza o valor calculado, guarda um valor 
    const emailLength = useMemo(() => {
        console.log("Calculando tamanho do email...");
        return email.length * 1000;
    }, [email.length]);


    
    return(
        <div>
            <form >

                <p>Quantidade de caracteres no email: {emailLength}</p>
                <p>Usuario Logado: {nomeUsuario}</p>

                {/* importando componente de InputLogin da pasta login/components */}
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    type="password"
                    label="Senha"
                    ref={inputPasswordRef}
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />

                <ButtonLoggin type="button" onClick={handleEntrar}>
                    Entrar
                </ButtonLoggin>

                <ButtonLoggin type="button" onClick={handleEntrar}>
                    Cadastrar-se
                </ButtonLoggin>

            </form>
        </div>
    );
};