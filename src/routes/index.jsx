import { Route, Routes } from "react-router-dom";



import { Cart, Home, Checkout, Login, Menu, Register, CompletePayment, Orders, NewProduct, EditProduct, Produtos } from "../containers";
import { UserLayout } from "../layout/UserLayout";
import { AdminLayout } from "../layout/UserLayout/AdminLayout";




export function Router() {

    return (
        <Routes>


            <Route path="/" element={<Login />} />
            <Route path="/" element={<UserLayout />} >
                <Route path="/home" element={<Home />} />

                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/complete" element={<CompletePayment />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />} >
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/novo-produto" element={<NewProduct />} />
                <Route path="/admin/editar-produto" element={<EditProduct />} />
                <Route path="/admin/produtos" element={<Produtos />} />

            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />





        </Routes>

    )
}




/*
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


])*/