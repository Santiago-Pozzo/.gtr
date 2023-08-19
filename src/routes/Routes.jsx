import React from 'react'

import { BrowserRouter, 
         Routes as ReactDomRoutes,
         Route
} from "react-router-dom"

import Home from "../components/Home/Home"
import Products from "../components/Products/Products"
import Layout from '../components/Layout/Layout'


const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path='/' element={<Home/>} />
                <Route path='products' element={<Products/>} />

                <Route path='*' element={<h2>Error!</h2>} />
            </ReactDomRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
