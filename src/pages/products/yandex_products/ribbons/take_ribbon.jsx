import React, { useContext } from 'react'
import { ProductItems } from '../../../../components/productItems/productIems'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ItemsContext } from '../../../../App'
// import items from '../ribbons/t.json'

export const TakeRibbon = () => {
	const { items, setItems } = useContext(ItemsContext)

	const filterByCategoryNew = items => {
		if (items.category === 'Выбираем вместе') {
			return true
		}
		return false
	}

	const filterNew = items.filter(filterByCategoryNew)

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
