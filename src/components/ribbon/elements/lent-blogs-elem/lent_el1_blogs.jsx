import React from 'react'
import { Link } from 'react-router-dom'

export const LentBlogsElem = () => {
	return (
		<div>
			<div className='ribbon__lenta_blogs'>
				<div className='blog1'>
					<div>
						<Link to='/'>
							<p className='text-3xl font-bold'>Придумано Яндекс Лавкой</p>
						</Link>
					</div>
					<div className='blogs'>
						<ul>
							<li>
								<div>
									<button>
										<Link to='/fromLavka'>
											<img src='/assets/webp/yandex-lavka1-webp.webp' alt='' />
											<p>Все "Из Лавки"</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/newFromLavka'>
											<img src='/assets/webp/yandex-lavka2.webp' alt='' />
											<p>Новое</p>
										</Link>
									</button>
								</div>
							</li>
							<li>
								<div>
									<button>
										<Link to='/choseTogether'>
											<img src='/assets/webp/yandex-lavka3.webp' alt='' />
											<p>Выбираем вместе</p>
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
