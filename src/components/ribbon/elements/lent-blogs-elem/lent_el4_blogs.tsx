import React from 'react'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const LentBlogsElem4: FC = (): JSX.Element => {
	return (
		<div>
			<div className='ribbon__lenta_blogs'>
				<div className='blog2'>
					<div>
						<Link to='/'>
							<p className='text-3xl font-bold'>Молочный прилавок</p>
						</Link>
					</div>
					<div className='blogs'>
						<ul>
							<li className='blogs-el1'>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-4-1.webp' alt='' />
											<p>Молоко, масло и яица</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-4-2.webp' alt='' />
											<p>Сыры</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-4-3.webp' alt='' />
											<p>
												Кефир, сметана, <br></br> творог
											</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-4-4.webp' alt='' />
											<p>Йогурты и десерты</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-4-5.webp' alt='' />
											<p>Молочное для детей</p>
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
