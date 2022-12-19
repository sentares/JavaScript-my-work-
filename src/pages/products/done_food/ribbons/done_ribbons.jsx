import React from 'react'

import { useSelector } from 'react-redux'
import { ProductItems } from '../../../../components/productItems/productIems'

export const DoneRibbons = () => {
	const productArray = useSelector(state => state.productSlice.productArray)

	const fillterForRest = items => {
		if (
			items.category === 'Из ресторанов' &&
			productArray.product === 'The Truffle'
		) {
			return true
		}
		return false
	}

	const filterNewRest = productArray.filter(fillterForRest)

	const fillterForRestTwo = productArray => {
		if (
			productArray.category === 'Из ресторанов' &&
			productArray.product === 'Lao Lee'
		) {
			return true
		}
		return false
	}

	const filterNewRest2 = productArray.filter(fillterForRestTwo)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>The Truffle</h1>
					<div className='productElements'>
						{filterNewRest.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
					<h1 className=' text-3xl font-bold'>Lao Lee</h1>
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
