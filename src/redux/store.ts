import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slises/auth/authSlice'
import cartSlice from './slises/cart/cartSlice'
import productSlice from './slises/product/productSlice'
import searchSlice from './slises/search/searchSlice'
import sortingSlice from './slises/sorting/sortingSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		search: searchSlice,
		product: productSlice,
		sorting: sortingSlice,
		cart: cartSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
