import React from 'react'

import { useSelector } from 'react-redux'
import { ProductItems } from '../../../../components/productItems/productIems'

export const OvRibbon = () => {
	const productArray = useSelector(state => state.productSlice.productArray)

	const fillterForOv = productArray => {
		if (productArray.product === 'Помидоры') {
			return true
		}
		return false
	}

	const filterNewOv = productArray.filter(fillterForOv)

	const fillterForRestTwo = productArray => {
		if (productArray.product === 'Огурцы') {
			return true
		}
		return false
	}

	const filterNewRest2 = productArray.filter(fillterForRestTwo)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Помидоры</h1>
					<div className='productElements'>
						{filterNewOv.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
					<h1 className=' text-3xl font-bold'>Огурцы</h1>
					<div className='productElements'>
						{filterNewRest2.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
