import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/login";
import { Register } from "../containers/Register";

import { Home } from "../containers/home";
import { Menu } from "../containers/Menu";


import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Cart } from "../containers/cart";



export const router = createBrowserRouter([

{
    path:"/",
    element: <Login/>,
},
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
    element:
    (
        <>
        <Header/>
        <Home/>
        <Footer/>
        </>

    ),
    
},
{
    path: "/cardapio",
    element:(
        <>
        <Header/>
        <Menu/>
        </>

    ), 
    
}, {
    path: "/carrinho",
    element: <Cart/>
},


])