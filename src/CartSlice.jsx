import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload
      const existingItem = state.items[product.id]

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items[product.id] = {
          ...product,
          quantity: 1,
        }
      }
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload
      const itemId = id

      if (!state.items[itemId]) {
        return
      }

      state.items[itemId].quantity += amount

      if (state.items[itemId].quantity <= 0) {
        delete state.items[itemId]
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      delete state.items[itemId]
    },
  },
})

export const { addItem, updateQuantity, removeItem } = cartSlice.actions

export const selectCartItemsArray = (state) => Object.values(state.cart.items)

export const selectTotalCount = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0)

export const selectTotalCost = (state) =>
  Object.values(state.cart.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

export default cartSlice.reducer