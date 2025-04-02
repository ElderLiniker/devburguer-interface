
import { Outlet, Navigate } from "react-router-dom";
import { SideNavAdmin } from "../../../containers";


import {Container} from "./styles"




export function AdminLayout() {

    const { admin: isAdmin } = JSON.parse(localStorage.getItem("devburguer: useData"))




    return isAdmin ?
    (
    <Container> 

        <SideNavAdmin />
        <main>
            <section>
            <Outlet />
            </section>
        </main>
         
        
          </Container>
        ) : <Navigate to="/login" />




}