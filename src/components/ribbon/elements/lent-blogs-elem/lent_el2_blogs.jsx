import React from 'react'
import { Link } from 'react-router-dom'

export const LentBlogsElem2 = () => {
	return (
		<div>
			<div className='ribbon__lenta_blogs'>
				<div className='blog2'>
					<div>
						<Link to='/streetFood'>
							<p className='text-3xl font-bold'>Готовая еда</p>
						</Link>
					</div>
					<div className='blogs'>
						<ul>
							<li className='blogs-el1'>
								<div>
									<button>
										<Link to='/streetFood'>
											<img src='/assets/webp/lavka-2-1.webp' alt='' />
											<p>Горячий стритфуд</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/restaurant'>
											<img src='/assets/webp/lavka-2-2.webp' alt='' />
											<p>Из ресторанов</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-2-3.webp' alt='' />

											<p>Основное меню</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-2-4.webp' alt='' />

											<p>Пекарня и кондитерская</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-2-5.webp' alt='' />

											<p>Горячий кофе</p>
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
