import { FC } from 'react'
import { YandexProducts } from './catalog-components/yandexProducts'
import { DoneFoot } from './catalog-components/doneFood'
import { Vegetables } from './catalog-components/vegetables'

export const Catalog: FC = (): JSX.Element => {
	return (
		<div className='catalog'>
			<div className='catalog__list'>
				<span className='name'>Каталог</span>
				<ul>
					<YandexProducts />
					<DoneFoot />
					<Vegetables />
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
