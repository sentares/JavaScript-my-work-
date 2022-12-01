import React from 'react'
import { Link } from 'react-router-dom'
import { FruitsCatalog } from './catalogs/fruits_catalog'
import { OvRibbon } from './ribbons/ov_ribbon'

export const Vegitables = () => {
	return (
		<div>
			<div className='allLavka'>
				<div className=' mt-5'>
					<nav className=' flex '>
						<Link to='/' className=' text-slate-400'>
							Главная /
						</Link>
						<Link to='/vagitables' className=' text-slate-400'>
							Овощи
						</Link>
					</nav>
				</div>
				<h1 className=' mt-6  text-6xl font-bold'>Овощной прилавок</h1>
				<div className='allLavka__lenta'>
					<div className='productsCatalog'>
						<FruitsCatalog />
					</div>
					<div className='productsRibbon'>
						<OvRibbon />
					</div>
				</div>
			</div>
		</div>
	)
}
