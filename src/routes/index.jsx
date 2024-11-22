import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/login";
import { Register } from "../containers/Register";

import { Home } from "../containers/home";
import { Menu } from "../containers/Menu";



export const router = createBrowserRouter([

{
    path:"/",
    element: <Login/>,
},
{
    path:"/Login",
    element: <Login/>,
},

{
    path:"/Cadastro",
    element: <Register/>,
},
{
    path: "/Home",
    element: <Home/>
    
},
{
    path: "/cardapio",
    element: <Menu/>
    
}


])