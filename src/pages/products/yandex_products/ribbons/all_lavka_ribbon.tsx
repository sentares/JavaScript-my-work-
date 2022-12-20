import React from 'react'
import { ProductItems } from '../../../../components/productItems/productIems'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectProductArray } from '../../../../redux/slises/product/selectors/productSel'

export const AllLavkaRibbon: FC = (): JSX.Element => {
	const productArray = useSelector(selectProductArray)

	// const filterByCategory = productArray => {
	// 	if (
	// 		productArray.category === 'Все из лавки' &&
	// 		productArray.product === 'Яйца'
	// 	) {
	// 		return true
	// 	}
	// 	return false
	// }
	// const filter = productArray.filter(filterByCategory)

	// const filterByProduct = productArray => {
	// 	if (
	// 		productArray.category === 'Все из лавки' &&
	// 		productArray.product === 'Вода'
	// 	) {
	// 		return true
	// 	}
	// 	return false
	// }

	// const filterProduct = productArray.filter(filterByProduct)

	// const filterByProductMilk = productArray => {
	// 	if (
	// 		productArray.category === 'Все из лавки' &&
	// 		productArray.product === 'Молочные продукты'
	// 	) {
	// 		return true
	// 	}
	// 	return false
	// }

	// const filterMilk = productArray.filter(filterByProductMilk)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Яйца</h1>
					<div className='productElements'>
						{/* {filter.map(obj => (
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
						))} */}
					</div>
				</div>
			</div>
		</div>
	)
}
