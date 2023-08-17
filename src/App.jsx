import './App.css'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CategoriesWrapper from './components/Categories/CategoriesWrapper'
import ProductsCards from './components/Products/ProductsCards'
import Footer from './components/Footer/Footer'
import Featured from './components/Featured/Featured'

import { MenuDespegable } from './Contexts/HeaderContext'

function App() {
  return (
    <>      
      <Layout>
        <MenuDespegable> 
          <Navbar/>
        </MenuDespegable>  

        <Hero/>
        <Featured/>
        <CategoriesWrapper/>
        <ProductsCards/> 

        <Footer/> 
      </Layout>      
    </>
  )
}

export default App
