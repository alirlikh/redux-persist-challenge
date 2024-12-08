import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { type CartItem, type Product } from "../../utils"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import { PersistConfig } from "redux-persist"

type CartState = {
  cartItem: CartItem[]
  numItemInCart: number
  total: number
}

const initialState: CartState = {
  cartItem: [],
  numItemInCart: 0,
  total: 0
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const product = state.cartItem.find((item) => item.id === action.payload.id)
      if (product) {
        product.quantity += action.payload.quantity
      } else {
        state.cartItem.push(action.payload)
      }
      state.total += action.payload.price * action.payload.quantity
      state.numItemInCart += action.payload.quantity
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload.id)
      state.numItemInCart -= action.payload.quantity
      state.total -= action.payload.price * action.payload.quantity
    },
    editItem: () => {}
  }
})

const persistConfig: PersistConfig<CartState> = {
  key: "cart",
  version: 1,
  storage
}

export const persistedReducer = persistReducer(persistConfig, cartSlice.reducer)

export const { addItem, removeItem, editItem } = cartSlice.actions
export default cartSlice.reducer
