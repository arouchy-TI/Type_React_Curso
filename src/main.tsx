import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// IMPORTANDO COMPONENTE RAIZ DA APLICACAO
import { App } from './app/App.tsx'

// .render - Renderizando Componente App dentro do StrictMode usando createRoot
// RENDERIZANDO O ARQUIVO INDEX.HTML
createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <App />

  </StrictMode>,

)
