// import './App.css'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage/HomePage"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import ProductPage from "./pages/ProductPage/ProductPage"
import PostsPage from "./pages/PostsPage/PostsPage"
import { useState } from "react"
import CartPage from "./pages/CartPage/CartPage"

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/catalog" element={<CatalogPage/>}></Route>
        <Route path="/catalog/:id" element={<ProductPage/>}></Route>
        <Route path="/posts" element={<PostsPage/>}></Route>
        <Route path="/cart" element={<CartPage cart = {cart} />}></Route>

      </Routes>
      <Footer></Footer>
    </>
  )
}
