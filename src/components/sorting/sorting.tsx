import { FC, useState } from 'react'
import { BiSliderAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Sort } from '../../common/types/sorting'
import { selectSorting } from '../../redux/slises/sorting/selectors/sortingSel'
import { setSorting } from '../../redux/slises/sorting/sortingSlice'

export const Sorting: FC = (): JSX.Element => {
	const { sorting } = useSelector(selectSorting)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)

	const sortList: Sort[] = [
		{
			name: 'новое',
			sortingProperty: '-id',
		},
		{
			name: 'старое',
			sortingProperty: 'id',
		},
		{
			name: 'по цене ⬆',
			sortingProperty: 'price',
		},
		{
			name: 'по цене ⬇',
			sortingProperty: '-price',
		},
		{
			name: 'по алфавиту A-z ',
			sortingProperty: 'name',
		},
		{
			name: 'по алфавиту Z-a ',
			sortingProperty: '-name',
		},
	]

	const setOpenedListItem = (obj: Sort) => {
		dispatch(setSorting(obj))
		setOpen(false)
	}

	return (
		<>
			<div className='Sort'>
				<div className='sorting'>
					<button
						className={sorting.name ? 'active' : ''}
						onClick={() => setOpen(!open)}
					>
						{sorting.name}
						<span>
							<BiSliderAlt className='sorting__icon' />
						</span>
					</button>
				</div>
				{open && (
					<div className='sort__popup'>
						<ul>
							{sortList.map((obj, i) => (
								<li
									key={i}
									onClick={() => setOpenedListItem(obj)}
									className={
										sorting.sortingProperty === obj.sortingProperty
											? 'active'
											: ''
									}
								>
									<span>{obj.name}</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	)
}
