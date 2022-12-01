import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ItemsContext } from '../../../../App'
import { ProductItems } from '../../../../components/productItems/productIems'
// import items from '../ribbons/t.json'

export const SrteetFoodRibbon = () => {
	const { items, setItems } = useContext(ItemsContext)

	const fillterForRest = items => {
		if (items.category === 'Горячий стритфуд') {
			return true
		}
		return false
	}

	const filterNewRest = items.filter(fillterForRest)

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
