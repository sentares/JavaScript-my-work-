import React from 'react'
import { MdOutlineNavigateNext } from 'react-icons/md'

export const ButtonSale = () => {
	return (
		<div>
			<div className='ribbon__button_sale'>
				<button>
					<div>
						<div className='first_block'>
							<img src='/assets/png/orig.png' alt='' />
							<p className=' text-base'>
								Минус 30% на первый заказ, но есть детали
							</p>
						</div>
						<div className=' pr-5'>
							<MdOutlineNavigateNext className=' h-7 w-6 text-slate-600' />
						</div>
					</div>
				</button>
			</div>
		</div>
	)
}
