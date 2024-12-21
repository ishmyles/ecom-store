import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import PageTemplate from './components/PageTemplate/PageTemplate'
import Home from './components/HomePage/Home/Home'
import Shop from './components/ShopPage/Shop/Shop'
import ShoppingCart from './components/ShoppingCartPage/ShoppingCart/ShoppingCart'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
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
