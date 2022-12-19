import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch } from '../../redux/slises/search/selectors/searchSel'
import { setSearchValue } from '../../redux/slises/search/searchSlice'

export const Search = () => {
	const dispatch = useDispatch()

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
							onChange={event => dispatch(setSearchValue(event.target.value))}
							placeholder='Найти в Лавке'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
