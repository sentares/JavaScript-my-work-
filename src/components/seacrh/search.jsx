import debounce from 'lodash.debounce'
import React, { useCallback, useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { SearchContext } from '../../App'

export const Search = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext)

	return (
		<div>
			<div className='search'>
				<form>
					<div className='search__linze'>
						<span>
							<BiSearch className='lupa' />
						</span>
						<input
							type='text'
							value={searchValue}
							onChange={event => setSearchValue(event.target.value)}
							placeholder='Найти в Лавке'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
