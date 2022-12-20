import React from 'react'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { AllLavkaCatalog } from './catalogs/all_lavka_catalog'
import { AllLavkaRibbon } from './ribbons/all_lavka_ribbon'
import { TakeRibbon } from './ribbons/take_ribbon'

export const TakeTogether: FC = (): JSX.Element => {
	return (
		<div>
			<div className='allLavka'>
				<div className=' mt-5'>
					<nav className=' flex '>
						<Link to='/' className=' text-slate-400'>
							Главная /
						</Link>
						<Link to='/choseTogether' className=' text-slate-400'>
							Выбираем вместе
						</Link>
					</nav>
				</div>
				<h1 className=' mt-6  text-6xl font-bold'> Выбираем вместе</h1>
				<div className='allLavka__lenta'>
					<div className='productsCatalog'>
						<AllLavkaCatalog />
					</div>
					<div className='productsRibbon'>
						<TakeRibbon />
					</div>
				</div>
			</div>
		</div>
	)
}
