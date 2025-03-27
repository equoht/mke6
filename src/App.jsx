// import './App.css'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage/HomePage"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import ProductPage from "./pages/ProductPage/ProductPage"

export default function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/catalog" element={<CatalogPage/>}></Route>
        <Route path="/catalog/:id" element={<ProductPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
