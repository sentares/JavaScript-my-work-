import React, { useContext, useState } from 'react'
import { Catalog } from '../../components/catalog/catalog'
import { Ribbon } from '../../components/ribbon/ribbon'
import { useEffect } from 'react'
import axios from 'axios'
import { ItemsContext, SearchContext } from '../../App'
import { ProductItems } from '../../components/productItems/productIems'

export const Home = () => {
	const { items, setItems } = useContext(ItemsContext)
	const { searchValue } = useContext(SearchContext)

	useEffect(() => {
		axios
			.get('https://636a0bb3c07d8f936d91891b.mockapi.io/employe-salary')
			.then(res => {
				setItems(res.data)
			})
	}, [])

	const searchName = items.filter(obj => {
		let count = 0
		if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
			return true, (count += 1)
		} else if (obj.category.toLowerCase().includes(searchValue.toLowerCase())) {
			return true, (count += 1)
		}
		return false, count
	})
	return (
		<div className='home__container'>
			<div className='catalog'>
				<Catalog />
			</div>
			<div className='ribbon'>
				{searchValue ? (
					<div className='searchAnswer'>
						<div className='nameOfSearch'>
							По запросу <strong className='nameOf'>{searchValue}</strong>{' '}
							нашлось:
						</div>
						<div className='searchedProducts'>
							{searchName.map(obj => (
								<ProductItems key={obj.id} {...obj} />
							))}
						</div>
					</div>
				) : (
					<Ribbon />
				)}
			</div>
		</div>
	)
}
