import React from 'react'

import { useSelector } from 'react-redux'
import { ProductItems } from '../../../../components/productItems/productIems'

export const SrteetFoodRibbon = () => {
	const productArray = useSelector(state => state.productSlice.productArray)

	const fillterForRest = productArray => {
		if (productArray.category === 'Горячий стритфуд') {
			return true
		}
		return false
	}

	const filterNewRest = productArray.filter(fillterForRest)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Закуски</h1>
					<div className='productElements'>
						{filterNewRest.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
