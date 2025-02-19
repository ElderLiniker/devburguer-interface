import { createBrowserRouter } from "react-router-dom";


import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Cart, Home,Checkout, Login, Menu, Register, CompletePayment } from "../containers";







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
    
},
{
    path: "/carrinho",
    element: <Cart/>
},
 {
    path: "/checkout",
    element: <Checkout/>
},
{
    path: "/complete",
    element: <CompletePayment/>
},


])