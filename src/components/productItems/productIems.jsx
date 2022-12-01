import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ProductItems = ({ name, price, count, imageUrl }) => {
	const [productCount, setProductCount] = useState(0)

	const onClickAdd = () => {
		setProductCount(productCount + 1)
	}
	return (
		<div className='allPoructs_block'>
			<div className='products'>
				<div className='products_el'>
					<div className='products_block'>
						<img
							className='products_block__image'
							src={imageUrl}
							alt='Product'
						/>
						<div className='products_block__price'> {price} P </div>
						<h4 className='products_block__title'>{name}</h4>

						<div className='products_block__count'>{count}</div>
					</div>

					<div className='products_el__button'>
						<button onClick={onClickAdd}>В корзину {productCount}</button>
					</div>
				</div>
			</div>
		</div>
	)
}
