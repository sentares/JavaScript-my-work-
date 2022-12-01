import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const FruitsCatalog = () => {
	return (
		<div>
			<div className='allLavkaCatalog'>
				<ul>
					<li className='name'>
						<button>
							<Link to='/fruits'>Фрукты</Link>
						</button>
					</li>

					<li className='name'>
						<button>
							<Link to='/vagitables'>Овощи</Link>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
