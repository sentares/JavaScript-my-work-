import React from 'react'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const MainEvent: FC = (): JSX.Element => {
	return (
		<div>
			<div className='ribbon__main_elements'>
				<ul className='first__block'>
					<li className='sale'>
						<div>
							<button>
								<Link to='/'>
									<p>Скидки</p>
								</Link>
							</button>
						</div>
					</li>
					<li>
						<div>
							<button className='cheese'>
								<Link to='/'>
									<p>Сырный фестиваль</p>
								</Link>
							</button>
						</div>
					</li>
					<li>
						<div>
							<button className='tea'>
								<Link to='/'>
									<p>Чем согреться</p>
								</Link>
							</button>
						</div>
					</li>
					<li>
						<div>
							<button className='cash'>
								<Link to='/'>
									<p>Кэшбек</p>
								</Link>
							</button>
						</div>
					</li>
					<li>
						<div>
							<button className='lunch'>
								<Link to='/'>
									<p>Что на обед</p>
								</Link>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
