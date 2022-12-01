import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const DoneCatalog = () => {
	return (
		<div>
			<div className='allLavkaCatalog'>
				<ul>
					<li className='name'>
						<button>
							<Link to='/streetFood'>Горячий стритфуд</Link>
						</button>
					</li>

					<li className='name'>
						<button>
							<Link to='/restaurant'>Из ресторанов</Link>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
