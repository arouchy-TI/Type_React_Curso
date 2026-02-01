import { useRef } from "react";
import { Link } from "react-router-dom";

// armazenar dentro use Ref, qualquer tipo de valor
// componente dashboard
export const Dashboard = () => {
    const counterRef = useRef({ counter : 0 });

    return(
        <div>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => {counterRef.current.counter++}}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Log</button>

            <p>DashBoard</p>
            <Link to="/entrar">Login</Link>
        </div>
    )
}