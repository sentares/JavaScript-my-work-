import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductsArray, Products } from '../../../common/types/productType'

const initialState: IProductsArray = {
	productArray: [],
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductArray(state, action: PayloadAction<Products[]>) {
			state.productArray = action.payload
		},
	},
})

export const { setProductArray } = productSlice.actions
export default productSlice.reducer
