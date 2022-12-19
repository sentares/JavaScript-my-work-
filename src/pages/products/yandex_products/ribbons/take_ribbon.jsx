import React from 'react'
import { ProductItems } from '../../../../components/productItems/productIems'

import { useSelector } from 'react-redux'
// import items from '../ribbons/t.json'

export const TakeRibbon = () => {
	const productArray = useSelector(state => state.productSlice.productArray)

	const filterByCategoryNew = productArray => {
		if (productArray.category === 'Выбираем вместе') {
			return true
		}
		return false
	}

	const filterNew = productArray.filter(filterByCategoryNew)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Выбираем вместе</h1>
					<div className='productElements'>
						{filterNew.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
