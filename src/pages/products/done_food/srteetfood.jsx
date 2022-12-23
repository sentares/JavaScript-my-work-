import React from 'react'
import { Link } from 'react-router-dom'
import { Catalog } from '../../../components/catalog/catalog'
import { SrteetFoodRibbon } from './ribbons/street_food_ribbon'

export const SrteetFood = () => {
	return (
		<div>
			<div className='allLavka'>
				<div className=' mt-5'>
					<nav className=' flex '>
						<Link to='/' className=' text-slate-400'>
							Главная /
						</Link>
						<Link to='/streetFood' className=' text-slate-400'>
							Горячий стритфуд
						</Link>
					</nav>
				</div>
				<h1 className=' mt-6  text-6xl font-bold'> Горячий стритфуд</h1>
				<div className='allLavka__lenta'>
					<div className='productsCatalog'>
						<Catalog />
					</div>
					<div className='productsRibbon'>
						<SrteetFoodRibbon />
					</div>
				</div>
			</div>
		</div>
	)
}
