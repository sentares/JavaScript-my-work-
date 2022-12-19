import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { FC } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import Swiper styles
import '../../../scss/components/_swiper.css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import required modules
// import { Pagination, Navigation } from 'swiper'
import { ProductItems } from '../../productItems/productIems'
import { useSelector } from 'react-redux'
import { selectProductArray } from '../../../redux/slises/product/selectors/productSel'

export const YouLikeLent: FC = (): JSX.Element => {
	// const { productArray } = useSelector(selectProductArray)

	// const fillterForRest = items => {
	// 	if (items.active === true) {
	// 		return true
	// 	}
	// 	return false
	// }

	// const filterNewRest = productArray.filter(fillterForRest)

	// const activeProducts = filterNewRest.map(obj => (
	// 	<ProductItems key={obj.id} {...obj} />
	// ))

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
					<div className=' mt-6'>
						<Swiper
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
							<SwiperSlide>
								{/* {filterNewRest.map(obj => (
									<ProductItems key={obj.id} {...obj} />
								))} */}
							</SwiperSlide>
							<SwiperSlide>slide2</SwiperSlide>
							<SwiperSlide>slide3</SwiperSlide>
							<SwiperSlide>slide4</SwiperSlide>
							<SwiperSlide>slide5</SwiperSlide>
							<SwiperSlide>slide6</SwiperSlide>
							<SwiperSlide>slide8</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}
