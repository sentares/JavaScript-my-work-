import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AllLavkaCatalog = () => {
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
							<Link to='/newFromLavka'>Новое</Link>
						</button>
					</li>
					<li className='name'>
						<button>
							<Link to='/choseTogether'>Выбираем вместе</Link>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
