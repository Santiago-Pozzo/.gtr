import React from 'react'

import { BrowserRouter, 
         Routes as ReactDomRoutes,
         Route
} from "react-router-dom"

import Home from "../components/Home/Home"
import Products from "../components/Products/Products"
import Layout from '../components/Layout/Layout'
import About from '../components/About/About'
import Error from '../components/Error/Error'
import Contact from '../components/Contact/Contact'
import Login from '../components/Login/login'
import Register from '../components/Register/Register'
import Validate from '../components/Validate/validate'


const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path='/' element={<Home/>} />
                <Route path='products' element={<Products/>} />
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='login' element={<Login/>} />
                <Route path='register' element={<Register/>} />
                <Route path='validate' element={<Validate/>} />
                <Route path='*' element={<Error/>} />
            </ReactDomRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
