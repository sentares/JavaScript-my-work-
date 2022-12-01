import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNavigateNext } from 'react-icons/md'

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
import { ItemsContext } from '../../../App'

export const YouLikeLent = () => {
	const [productCount, setProductCount] = useState(0)

	const onClickAdd = () => {
		setProductCount(productCount + 1)
	}

	const { items, setItems } = useContext(ItemsContext)

	const fillterForRest = items => {
		if (items.active === true) {
			return true
		}
		return false
	}

	const filterNewRest = items.filter(fillterForRest)

	const activeProducts = filterNewRest.map(obj => (
		<ProductItems key={obj.id} {...obj} />
	))

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
							slidesPerView={3}
							spaceBetween={250}
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
							<SwiperSlide>{activeProducts}</SwiperSlide>
							{/* <SwiperSlide>slide2</SwiperSlide>
							<SwiperSlide>slide3</SwiperSlide>
							<SwiperSlide>slide4</SwiperSlide>
							<SwiperSlide>slide5</SwiperSlide>
							<SwiperSlide>slide6</SwiperSlide>
							<SwiperSlide>slide7</SwiperSlide>
							<SwiperSlide>slide8</SwiperSlide> */}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}

// {
// 	filterNewRest.map(obj => (
// 		<ProductItems key={obj.id} {...obj} />
// 	))
// }
