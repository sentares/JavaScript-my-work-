import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearchValue } from '../../../common/types/search'

const initialState: ISearchValue = {
	searchValue: '',
}

const searchSlice = createSlice({
	name: 'seacrh',
	initialState,
	reducers: {
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		},
	},
})

export const { setSearchValue } = searchSlice.actions
export default searchSlice.reducer
