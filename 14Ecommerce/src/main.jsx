import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Shop,ShopCategory,Product,LoginSignup,Cart} from './pages/index.js'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Shop />
      },
      {
        path:"/mens",
        element:<ShopCategory category="men" banner={men_banner} />
      },
      {
        path:"/womens",
        element:<ShopCategory category="women" banner={women_banner} />
      },
      {
        path:"/kids",
        element:<ShopCategory category="kid" banner={kid_banner} />
      },
      {
        path:"/product/:productId",
        element:<Product />,
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/login",
        element:<LoginSignup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
