import React from 'react'
import { Link } from 'react-router-dom'

export const LentBlogsElem3 = () => {
	return (
		<div>
			<div className='ribbon__lenta_blogs'>
				<div className='blog3'>
					<div>
						<Link to='/'>
							<p className='text-3xl font-bold'>Овощной прилавок</p>
						</Link>
					</div>
					<div className='blogs'>
						<ul>
							<li>
								<div>
									<button>
										<Link to='/vagitables'>
											<img src='/assets/webp/lavka-3-1.webp' alt='' />
											<p>Овощи, грибы и зелень</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/fruits'>
											<img src='/assets/webp/lavka-3-2.webp' alt='' />
											<p>Фрукты и ягоды</p>
										</Link>
									</button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
