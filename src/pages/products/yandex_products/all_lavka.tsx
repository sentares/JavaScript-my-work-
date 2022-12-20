import React from 'react'
import { Link } from 'react-router-dom'
import { AllLavkaCatalog } from './catalogs/all_lavka_catalog'
import { AllLavkaRibbon } from './ribbons/all_lavka_ribbon'
import { FC } from 'react'

export const AllLavka: FC = (): JSX.Element => {
	return (
		<div>
			<div className='allLavka'>
				<div className=' mt-5'>
					<nav className=' flex '>
						<Link to='/' className=' text-slate-400'>
							Главная /
						</Link>
						<Link to='/newFromLavka' className=' text-slate-400'>
							Все из лавки
						</Link>
					</nav>
				</div>
				<h1 className=' mt-6  text-6xl font-bold'>Все из Лавки</h1>
				<div className='allLavka__lenta'>
					<div className='productsCatalog'>
						<AllLavkaCatalog />
					</div>
					<div className='productsRibbon'>
						<AllLavkaRibbon />
					</div>
				</div>
			</div>
		</div>
	)
}
