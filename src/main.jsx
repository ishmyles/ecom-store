import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.css'

import App from './App'
import Home from './components/HomePage/Home/Home'
import Shop from './components/Shop/Shop'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import ErrorPage from './components/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop/",
        element: <Shop />,
      },
      {
        path: "shop/cart",
        element: <ShoppingCart />,
      },
    ],
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
