import React from 'react'
import { MainEvent } from './elements/main_event'
import { ButtonSale } from './elements/button_sale'
import { YouLikeLent } from './elements/you_like_lent'
import { LentBlogs } from './elements/lent_blogs'
import { FC } from 'react'

export const Ribbon: FC = (): JSX.Element => {
	return (
		<div className='ribbon'>
			<MainEvent />
			<ButtonSale />
			<YouLikeLent />
			<LentBlogs />
		</div>
	)
}
