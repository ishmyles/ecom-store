import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from './components/HomePage/Home/Home'
import Shop from './components/ShopPage/Shop/Shop'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
                <Navbar />
                <Outlet />
                <Footer />
             </>,
    errorElement: <ErrorPage />,
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
  },
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
