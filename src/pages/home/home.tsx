import { FC, useState } from 'react'
import { Catalog } from '../../components/catalog/catalog'
import { Ribbon } from '../../components/ribbon/ribbon'
import { useEffect } from 'react'
import axios from 'axios'
import { ProductItems } from '../../components/productItems/productIems'
import { useDispatch, useSelector } from 'react-redux'
import { setProductArray } from '../../redux/slises/product/productSlice'
import { selectProductArray } from '../../redux/slises/product/selectors/productSel'
import { selectSearch } from '../../redux/slises/search/selectors/searchSel'

export const Home: FC = (): JSX.Element => {
	const { productArray } = useSelector(selectProductArray)
	const dispatch = useDispatch()
	const { searchValue } = useSelector(selectSearch)

	useEffect(() => {
		axios
			.get('https://636a0bb3c07d8f936d91891b.mockapi.io/employe-salary')
			.then(res => {
				dispatch(setProductArray(res.data))
			})
	}, [])

	if (!productArray) {
		return <>Загрузка...</>
	}

	const searchName = productArray.filter(obj => {
		if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
			return true
		} else if (obj.category.toLowerCase().includes(searchValue.toLowerCase())) {
			return true
		}
		return false
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
