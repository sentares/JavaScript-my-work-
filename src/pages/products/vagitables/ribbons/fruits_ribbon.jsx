import React from 'react'

import { useSelector } from 'react-redux'
import { ProductItems } from '../../../../components/productItems/productIems'

export const FruitsRibbon = () => {
	const productArray = useSelector(state => state.productSlice.productArray)

	const fillterForOv = productArray => {
		if (productArray.product === 'Самый сезон') {
			return true
		}
		return false
	}

	const filterNewOv = productArray.filter(fillterForOv)

	const fillterForRestTwo = productArray => {
		if (productArray.product === 'Ягоды') {
			return true
		}
		return false
	}

	const filterNewRest2 = productArray.filter(fillterForRestTwo)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Самый сезон</h1>
					<div className='productElements'>
						{filterNewOv.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Ягоды</h1>
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
