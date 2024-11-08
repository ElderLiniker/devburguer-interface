import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { RouterProvider } from 'react-router-dom'// tenho que importa o router provider de dentro do router dom para localizar a rota criada//

import { ToastContainer } from 'react-toastify'// biblioetca que mostra na tela ao usuario se a senha esta correta//

import GlobalStyles from './styles/globalStyles'

import {router} from './routes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>   
    <GlobalStyles/>
      <ToastContainer autoClose={2000}  theme='light' />

  </StrictMode>,
)
