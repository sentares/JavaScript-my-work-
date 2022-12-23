import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../../../scss/components/_swiper.css'

import { ProductItems } from '../../productItems/productIems'
import { useSelector } from 'react-redux'
import { selectProductArray } from '../../../redux/slises/product/selectors/productSel'

export const YouLikeLent: FC = (): JSX.Element => {
	const { productArray } = useSelector(selectProductArray)

	const filteredActiveSaleProducts = productArray.filter(
		obj => obj.product === 'Яйца'
	)

	return (
		<div>
			<div className='ribbon__youLike'>
				<div className=' mt-8 	'>
					<div className=' flex justify-between items-center'>
						<Link to='/'>
							<p className='text-3xl font-bold'>Вам понравится</p>
						</Link>
						<div>
							<button className=' flex items-center font-semibold rounded-3xl bg-[#efeeed] p-2 pl-4 hover:bg-[#d5d5d4] '>
								Все <MdOutlineNavigateNext />
							</button>
						</div>
					</div>
					<div className='flex mt-6'>
						{filteredActiveSaleProducts.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

{
	/* <Swiper
							slidesPerView={4}
							spaceBetween={4}
							slidesPerGroup={4}
							loop={true}
							loopFillGroupWithBlank={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className='mySwiper'
						>
							<SwiperSlide></SwiperSlide>
	</Swiper> */
}
