import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AboutUs from './AboutUs'
import CartItem from './CartItem'
import ProductList from './ProductList'
import './App.css'

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page background-image">
      <div className="landing-overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p className="tagline">Fresh houseplants delivered to your home</p>
        <AboutUs />
        <div className="landing-actions">
          <button className="get-started-btn" type="button" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [showProductList, setShowProductList] = useState(false)
  const navigate = useNavigate()

  const handleGetStartedClick = () => {
    setShowProductList(true)
    navigate('/products')
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          showProductList ? (
            <ProductList />
          ) : (
            <LandingPage onGetStarted={handleGetStartedClick} />
          )
        }
      />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}

export default App
