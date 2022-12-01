import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Catalog = () => {
	const lavkaCatalog = ['Все из лавки', 'Новое', 'Выбираем вместе']
	const [open, setOpen] = useState(false)

	return (
		<div className='catalog'>
			<div className='catalog__list'>
				<span className='name'>Каталог</span>
				<ul>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button
								onClick={() => {
									setOpen(!open)
								}}
							>
								<img src='/assets/webp/40x40-webp.webp' alt='' />
								<span className=' ml-2 font-medium	'>
									Придумано Яндекс Лавкой
								</span>
							</button>
						</div>
					</li>
					{open && (
						<ul>
							{lavkaCatalog.map(value => (
								<li className=' mt-3 ml-11'>
									<div className='first__catalog'>
										<button>
											<span className=' ml-2 font-medium	'>
												<Link to='/fromLavka'>{value}</Link>
											</span>
										</button>
									</div>
								</li>
							))}
						</ul>
					)}
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-cake.webp' alt='' />
								<span className=' ml-2 font-medium	'>
									<Link to='/restaurant'>Готовая еда</Link>
								</span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-papper.webp' alt='' />
								<span className=' ml-2 font-medium	'>
									<Link to='/vagitables'>Овощной прилавок</Link>
								</span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-milk.webp' alt='' />
								<span className=' ml-2 font-medium	'>Молочный прилавок </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-brad.webp' alt='' />
								<span className=' ml-2 font-medium	'>Булочная </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-water.webp' alt='' />
								<span className=' ml-2 font-medium	'>Вода и напитки </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-candy.webp' alt='' />
								<span className=' ml-2 font-medium	'>Сладкое и снеки </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-meat.webp' alt='' />
								<span className=' ml-2 font-medium	'>Мясо, птица, рыба </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-freeze.webp' alt='' />
								<span className=' ml-2 font-medium	'>Заморозка </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-zoj.webp' alt='' />
								<span className=' ml-2 font-medium	'>Здоровый образ жизни </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-bacal.webp' alt='' />
								<span className=' ml-2 font-medium	'>Бакалея </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-child.webp' alt='' />
								<span className=' ml-2 font-medium	'>Для детей </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-animal.webp' alt='' />
								<span className=' ml-2 font-medium	'>Для животных </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-home.webp' alt='' />
								<span className=' ml-2 font-medium	'>Дом, милый дом </span>
							</button>
						</div>
					</li>
					<li className=' mt-3'>
						<div className='first__catalog'>
							<button>
								<img src='/assets/webp/40x40-med.webp' alt='' />
								<span className=' ml-2 font-medium	'>Очень надо </span>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
