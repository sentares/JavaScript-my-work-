import { Link } from 'react-router-dom'
import { FC } from 'react'

export const AllLavkaCatalog: FC = (): JSX.Element => {
	return (
		<div>
			<div className='allLavkaCatalog'>
				<ul>
					<li className='name'>
						<button>
							<Link to='/fromLavka'>Все из Лавки</Link>
						</button>
					</li>

					<li className='name'>
						<button>
							<Link to='/novinki'>Новое</Link>
						</button>
					</li>
					<li className='name'>
						<button>
							<Link to='/choose_Together'>Выбираем вместе</Link>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
