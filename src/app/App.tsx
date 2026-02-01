// COMPONENTE RAIZ DA APLICACAO
// RENDERIZA AS ROTAS DA APLICACAO
// IMPORTANDO ROTAS DA PASTA ROUTES
import { AppRoutes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/context";

export function App() {
  
  return (
    
    <UsuarioLogadoProvider>
      <AppRoutes/>
    </UsuarioLogadoProvider>

  );
};

