import { useState } from 'react'
import './App.css'
import ProductData from './assets/ProductData'
import ProductLoop from './components/ProductCard'
import ShoppingCartLoop from './components/ShoppingCart'
import Header from './components/Header'

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [products, setProducts] = useState(ProductData)
  return (
    <>
      <Header setShowShoppingCart={setShowShoppingCart} showShoppingCart={showShoppingCart}/>
      {!showShoppingCart && <ProductLoop products={products} setProducts={setProducts}/>}
      {showShoppingCart && <ShoppingCartLoop products={products} setProducts={setProducts}/>}
    </>
  )
}

export default App

