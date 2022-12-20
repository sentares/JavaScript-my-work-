import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISorting, Sort } from '../../../common/types/sorting'

const initialState: ISorting = {
	sorting: {
		name: '',
		sortingProperty: '',
	},
}

const sortingSlice = createSlice({
	name: 'sorting',
	initialState,
	reducers: {
		setSorting(state, action: PayloadAction<Sort>) {
			state.sorting = action.payload
		},
	},
})

export const { setSorting } = sortingSlice.actions
export default sortingSlice.reducer
