import React, { useContext } from 'react'
import { ProductItems } from '../../../../components/productItems/productIems'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ItemsContext } from '../../../../App'
// import items from '../ribbons/t.json'

export const AllLavkaRibbon = () => {
	const { items, setItems } = useContext(ItemsContext)

	const filterByCategory = items => {
		if (items.category === 'Все из лавки' && items.product === 'Яйца') {
			return true
		}
		return false
	}

	const filter = items.filter(filterByCategory)

	const filterByProduct = items => {
		if (items.category === 'Все из лавки' && items.product === 'Вода') {
			return true
		}
		return false
	}

	const filterProduct = items.filter(filterByProduct)

	const filterByProductMilk = items => {
		if (
			items.category === 'Все из лавки' &&
			items.product === 'Молочные продукты'
		) {
			return true
		}
		return false
	}

	const filterMilk = items.filter(filterByProductMilk)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Яйца</h1>
					<div className='productElements'>
						{filter.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
					<h1 className=' text-3xl font-bold'>Вода</h1>
					<div className='productElements'>
						{filterProduct.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
					<h1 className=' text-3xl font-bold'>Молочные продукты</h1>
					<div className='productElements'>
						{filterMilk.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
