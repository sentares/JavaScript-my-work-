import { FC } from 'react'
import React, { useState } from 'react'
import { navLavka } from '../../../common/moks/navigate/navLavka'
import { useNavigate } from 'react-router-dom'

export const YandexProducts: FC = (): JSX.Element => {
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
						<img src='/assets/webp/40x40-webp.webp' alt='' />
						<span className=' ml-2 font-medium	'>Придумано Яндекс Лавкой</span>
					</button>
				</div>
			</li>
			{open && (
				<ul className='popupCatalogComponents'>
					{navLavka.map(element => (
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
