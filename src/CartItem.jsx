import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  decrementItem,
  incrementItem,
  removeItem,
  selectCartItemsArray,
  selectTotalCost,
  selectTotalCount,
} from './CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItemsArray)
  const totalCount = useSelector(selectTotalCount)
  const totalCost = useSelector(selectTotalCost)

  const handleCheckout = () => {
    window.alert('Checkout Coming Soon')
  }

  return (
    <div className="page-shell">
      <header className="navbar">
        <span className="brand">Paradise Nursery</span>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">
            Cart <span className="cart-count">🛒 {totalCount}</span>
          </Link>
        </nav>
      </header>

      <main className="cart-content">
        <h2>Shopping Cart</h2>
        <p>Total plants in cart: {totalCount}</p>

        {cartItems.length === 0 ? (
          <p>Your cart is empty. Add some plants from the product listing page.</p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <article key={item.id} className="cart-row">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      type="button"
                      onClick={() => dispatch(decrementItem(item.id))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="qty-btn"
                      type="button"
                      onClick={() => dispatch(incrementItem(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        )}

        <h3>Total Cart Cost: ${totalCost}</h3>

        <div className="cart-actions">
          <button className="checkout-btn" type="button" onClick={handleCheckout}>
            Checkout
          </button>
          <Link to="/products" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  )
}

export default CartItem