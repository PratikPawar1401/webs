import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import CartItem from './CartItem'
import ProductList from './ProductList'
import './App.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p className="tagline">Fresh houseplants delivered to your home</p>
        <AboutUs />
        <div className="landing-actions">
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}

export default App
