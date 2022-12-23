import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IProductItem } from '../../common/types/productItem'

export const ProductItems: FC<IProductItem> = ({
	name,
	price,
	count,
	imageUrl,
	id,
}: IProductItem): JSX.Element => {
	return (
		<div className='allPoructs_block'>
			<div className='products'>
				<div className='products_el'>
					<div className='products_block'>
						<Link to={`/shop/${id}`}>
							<img
								className='products_block__image'
								src={imageUrl}
								alt='Product'
							/>
							<div className='products_block__price'> {price} P </div>
							<h4 className='products_block__title'>{name}</h4>

							<div className='products_block__count'>{count}</div>
						</Link>
					</div>

					<div className='products_el__button'>
						<button>В корзину</button>
					</div>
				</div>
			</div>
		</div>
	)
}
