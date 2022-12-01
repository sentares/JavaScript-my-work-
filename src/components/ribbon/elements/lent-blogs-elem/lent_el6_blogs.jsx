import React from 'react'
import { Link } from 'react-router-dom'

export const LentBlogsElem6 = () => {
	return (
		<div>
			<div className='ribbon__lenta_blogs'>
				<div className='blog2'>
					<div>
						<Link to='/'>
							<p className='text-3xl font-bold'>Вода и напитки</p>
						</Link>
					</div>
					<div className='blogs'>
						<ul>
							<li className='blogs-el1'>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-6-1.webp' alt='' />
											<p>Вода</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-6-2.webp' alt='' />
											<p>Соки и морсы</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-6-3.webp' alt='' />
											<p>Газироквка</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-6-4.webp' alt='' />
											<p>Холодный чай и кофе</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-6-5.webp' alt='' />
											<p>Энергетики</p>
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
