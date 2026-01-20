import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Dashboard, Login,  } from "../pages";

export const AppRoutes = () =>{
    return(
        <BrowserRouter>
        
            <Routes>

                <Route path="/entrar" element={<Login />}></Route>
                <Route path="/pagina-inicial" element={<Dashboard />}></Route>            
                <Route path="*" element={<Navigate to={"/pagina-inicial"}/>}></Route>
            
            </Routes>
        
        </BrowserRouter>
    );
};