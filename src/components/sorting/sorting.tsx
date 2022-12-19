import { FC, useState } from 'react'
import { BiSliderAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { selectSorting } from '../../redux/slises/sorting/selectors/sortingSel'

export const Sorting: FC = (): JSX.Element => {
	const sorting = useSelector(selectSorting)
	const dispatch = useDispatch

	const lavkaCatalog = ['Все из лавки', 'Новое', 'Выбираем вместе']

	const [open, setOpen] = useState(false)
	return (
		<>
			<div className='sorting'>
				<button
					onClick={() => {
						setOpen(!open)
					}}
				>
					<span>
						<BiSliderAlt className='sorting__icon' />
					</span>
				</button>
			</div>
		</>
	)
}
