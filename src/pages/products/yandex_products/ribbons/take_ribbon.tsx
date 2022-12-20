import React from 'react'
import { ProductItems } from '../../../../components/productItems/productIems'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectProductArray } from '../../../../redux/slises/product/selectors/productSel'
// import items from '../ribbons/t.json'

export const TakeRibbon: FC = (): JSX.Element => {
	const productArray = useSelector(selectProductArray)

	// const filterByCategoryNew = productArray => {
	// 	if (productArray.category === 'Выбираем вместе') {
	// 		return true
	// 	}
	// 	return false
	// }
	// const filterNew = productArray.filter(filterByCategoryNew)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Выбираем вместе</h1>
					<div className='productElements'>
						{/* {filterNew.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))} */}
					</div>
				</div>
			</div>
		</div>
	)
}
