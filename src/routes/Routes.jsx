import React from 'react'

import { BrowserRouter, 
         Routes as ReactDomRoutes,
         Route
} from "react-router-dom"

import Hero from "../components/Hero/Hero"
import Products from "../components/Products/Products"
import Layout from '../components/Layout/Layout'
import { GiH2O } from 'react-icons/gi'

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path='/' element={<Hero/>} />
                <Route path='products' element={<Products/>} />

                <Route path='*' element={<h2>Error!</h2>} />
            </ReactDomRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
