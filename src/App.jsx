import './App.css'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CategoriesWrapper from './components/Categories/CategoriesWrapper'
import ProductsCards from './components/Products/ProductsCards'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>  
      <Navbar/>
      <Layout>
        <Hero/>
        <CategoriesWrapper/>
        <ProductsCards/> 
      </Layout>
      <Footer/>       
    </>
  )
}

export default App
