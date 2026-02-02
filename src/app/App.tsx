// COMPONENTE RAIZ DA APLICACAO
// RENDERIZA AS ROTAS DA APLICACAO
// IMPORTANDO ROTAS DA PASTA ROUTES
import { AppRoutes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/context";

export function App() {
  
  return (
    // Aplicando Context from "./shared/context" - UsuarioLogadoProvider no app.tsx
    <UsuarioLogadoProvider>
      <AppRoutes/>
    </UsuarioLogadoProvider>

  );
};

