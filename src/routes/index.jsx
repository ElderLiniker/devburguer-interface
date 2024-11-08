import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/login";
import { Register } from "../containers/Register";

import { Home } from "../containers/home";



export const router = createBrowserRouter([

{
    path:"/login",
    element: <Login/>,
},

{
    path:"/cadastro",
    element: <Register/>,
},
{
    path: "/home",
    element: <Home/>
    
}


])