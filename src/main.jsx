import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Elements } from '@stripe/react-stripe-js'

import { BrowserRouter } from 'react-router-dom'// tenho que importa o router provider de dentro do router dom para localizar a rota criada//

import { ToastContainer } from 'react-toastify'// biblioetca que mostra na tela ao usuario se a senha esta correta//

import GlobalStyles from './styles/globalStyles'


import AppProvider from './hooks'
import { Header } from './components/Header'
import stripePromise from './config/stripeConfig'
import { ThemeProvider } from 'styled-components'

import { standardTheme } from './styles/themes/standard'
import { Router } from './routes'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}  >

         <BrowserRouter>
         
         <Router/>
         </BrowserRouter>

        </Elements>

        <GlobalStyles />
        <ToastContainer autoClose={2000} theme='light' />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
