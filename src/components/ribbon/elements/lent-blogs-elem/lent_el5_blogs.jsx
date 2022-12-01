import React from 'react'
import { Link } from 'react-router-dom'

export const LentBlogsElem5 = () => {
	return (
		<div>
			<div className='ribbon__lenta_blogs'>
				<div className='blog1'>
					<div>
						<Link to='/'>
							<p className='text-3xl font-bold'>Булочная</p>
						</Link>
					</div>
					<div className='blogs'>
						<ul>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-5-1.webp' alt='' />
											<p>Хлеб</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-5-2.webp' alt='' />
											<p>Выпечка</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/'>
											<img src='/assets/webp/lavka-5-3.webp' alt='' />
											<p>Хлебцы</p>
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
