import React, { useContext } from 'react'
import { ProductItems } from '../../../../components/productItems/productIems'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ItemsContext } from '../../../../App'
// import items from '../ribbons/t.json'

export const NewLavkaRibbon = () => {
	const { items, setItems } = useContext(ItemsContext)

	const filterByCategoryNew = items => {
		if (items.category === 'Новое' && items.product === 'Сладкое и снеки') {
			return true
		}
		return false
	}

	const filterNew = items.filter(filterByCategoryNew)

	const filterByProduct = items => {
		if (
			items.category === 'Новое' &&
			items.product === 'Замороженные десерты и выпечка'
		) {
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
					<h1 className=' text-3xl font-bold'>Сладкое и снеки</h1>
					<div className='productElements'>
						{filterNew.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
					<h1 className=' text-3xl font-bold'>
						Замороженные десерты и выпечка
					</h1>
					<div className='productElements'>
						{filterProduct.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
