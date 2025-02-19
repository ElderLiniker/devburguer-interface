import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Elements } from '@stripe/react-stripe-js'

import { RouterProvider } from 'react-router-dom'// tenho que importa o router provider de dentro do router dom para localizar a rota criada//

import { ToastContainer } from 'react-toastify'// biblioetca que mostra na tela ao usuario se a senha esta correta//

import GlobalStyles from './styles/globalStyles'

import { router } from './routes'
import AppProvider from './hooks'
import { Header } from './components/Header'
import stripePromise from './config/stripeConfig'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}  >

        <RouterProvider router={router} />

      </Elements>

      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='light' />
    </AppProvider>
  </StrictMode>,
)
