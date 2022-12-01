import React from 'react'
import { Link } from 'react-router-dom'

import { AllLavkaCatalog } from './catalogs/all_lavka_catalog'
import { NewLavkaRibbon } from './ribbons/new_ribbom'

export const NewLavka = () => {
	return (
		<div>
			<div className='allLavka'>
				<div className=' mt-5'>
					<nav className=' flex '>
						<Link to='/' className=' text-slate-400'>
							Главная /
						</Link>
						<Link to='/fromLavka' className=' text-slate-400'>
							Новое
						</Link>
					</nav>
				</div>
				<h1 className=' mt-6  text-6xl font-bold'>Новое</h1>
				<div className='allLavka__lenta'>
					<div className='productsCatalog'>
						<AllLavkaCatalog />
					</div>
					<div className='productsRibbon'>
						<NewLavkaRibbon />
					</div>
				</div>
			</div>
		</div>
	)
}
