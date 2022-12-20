import { FC } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navDoneFood } from '../../../common/moks/navigate/navDomeFood'

export const DoneFoot: FC = (): JSX.Element => {
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()

	return (
		<>
			<li className='mt-2'>
				<div className='first__catalog'>
					<button
						onClick={() => {
							setOpen(!open)
						}}
					>
						<img src='/assets/webp/40x40-cake.webp' alt='' />{' '}
						<span className=' ml-2 font-medium	'>Готовая еда</span>
					</button>
				</div>
			</li>
			{open && (
				<ul className='popupCatalogComponents'>
					{navDoneFood.map(element => (
						<li className=' mt-3 ml-11'>
							<div className='first__catalog'>
								<button onClick={() => navigate(`${element.path}`)}>
									<span className=' ml-2 font-medium'>{element.name}</span>
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	)
}
