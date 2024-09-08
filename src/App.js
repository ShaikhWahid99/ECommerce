import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import ProductDetail from "./features/product-list/components/ProductDetail.js";

import Cartpage from './pages/Cartpage.js';
import Checkout from './pages/Checkout.js';

import Home from "./pages/Home";

import Loginpage from './pages/Loginpage.js';
import Signuppage from './pages/Signuppage.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home> ),
  },

  {
    path: "/cart",
    element: (<Cartpage></Cartpage> ),
  },

  {
    path: "/checkout",
    element: (<Checkout></Checkout> ),
  },
  {
    path: "/ProductDetail",
    element: <ProductDetail></ProductDetail> ,
  },
 
  {
    path: "/login",
    element: <Loginpage></Loginpage>,
  },

    {
      path: "/signup",
      element: (<Signuppage></Signuppage>),},
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
  
    </div>
  );
}

export default App;
