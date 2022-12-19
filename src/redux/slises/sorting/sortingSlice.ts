import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISorting } from '../../../common/types/sorting'

const initialState: ISorting = {
	sorting: 'новое',
}

const sortingSlice = createSlice({
	name: 'sorting',
	initialState,
	reducers: {
		setSorting(state, action: PayloadAction<string>) {
			state.sorting = action.payload
		},
	},
})

export const { setSorting } = sortingSlice.actions
export default sortingSlice.reducer
