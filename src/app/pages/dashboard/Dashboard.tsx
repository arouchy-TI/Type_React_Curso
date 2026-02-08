import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

// armazenar dentro use Ref, qualquer tipo de valor
// componente dashboard
export const Dashboard = () => {
    const counterRef = useRef({ counter : 0 });

    // chamando context, e acessando nome usuario
    const { nomeUsuario } = useUsuarioLogado();

    return(
        <div>
            <p>DashBoard</p>s
            <p>Ola - {nomeUsuario}</p>

            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => {counterRef.current.counter++}}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Log</button>

            <Link to="/entrar">Login</Link>
        </div>
    );
};