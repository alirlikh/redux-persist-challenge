import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartSlice, { persistedReducer } from "./features/cart/cartSlice"
import { persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
