import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, selectTotalCount } from './CartSlice'

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      {
        id: 'ap-1',
        name: 'Snake Plant',
        price: 28,
        image:
          'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ap-2',
        name: 'Spider Plant',
        price: 22,
        image:
          'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ap-3',
        name: 'Peace Lily',
        price: 31,
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ap-4',
        name: 'Aloe Vera',
        price: 18,
        image:
          'https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ap-5',
        name: 'Areca Palm',
        price: 36,
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32e8b8f?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ap-6',
        name: 'Rubber Plant',
        price: 34,
        image:
          'https://images.unsplash.com/photo-1587334281400-155cf2fb0f4b?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      {
        id: 'lm-1',
        name: 'ZZ Plant',
        price: 30,
        image:
          'https://images.unsplash.com/photo-1611211232932-da3113c4f30a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'lm-2',
        name: 'Pothos',
        price: 20,
        image:
          'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'lm-3',
        name: 'Jade Plant',
        price: 24,
        image:
          'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'lm-4',
        name: 'Cast Iron Plant',
        price: 33,
        image:
          'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'lm-5',
        name: 'Chinese Evergreen',
        price: 29,
        image:
          'https://images.unsplash.com/photo-1602923668104-8f2b43f112f8?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'lm-6',
        name: 'Haworthia',
        price: 16,
        image:
          'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    name: 'Flowering Plants',
    plants: [
      {
        id: 'fp-1',
        name: 'Anthurium',
        price: 35,
        image:
          'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'fp-2',
        name: 'Orchid',
        price: 40,
        image:
          'https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'fp-3',
        name: 'Kalanchoe',
        price: 23,
        image:
          'https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'fp-4',
        name: 'African Violet',
        price: 21,
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'fp-5',
        name: 'Begonia',
        price: 26,
        image:
          'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'fp-6',
        name: 'Peace Rose',
        price: 32,
        image:
          'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalCount = useSelector(selectTotalCount)

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

      <main className="products-content">
        {plantCategories.map((category) => (
          <section key={category.name} className="category-section">
            <h2>{category.name}</h2>
            <div className="products-grid">
              {category.plants.map((plant) => {
                const isAdded = Boolean(cartItems[plant.id])

                return (
                  <article key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price}</p>
                    <button
                      className="add-btn"
                      type="button"
                      disabled={isAdded}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default ProductList