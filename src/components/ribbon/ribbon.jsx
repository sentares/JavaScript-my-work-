import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { MainEvent } from './elements/main_event'
import { ButtonSale } from './elements/button_sale'
import { YouLikeLent } from './elements/you_like_lent'
import { LentBlogs } from './elements/lent_blogs'
import { ItemsContext, SearchContext } from '../../App'

export const Ribbon = () => {
	const { items, setItems } = useContext(ItemsContext)
	const { searchValue } = useContext(SearchContext)

	const searchName = items.filter(obj => {
		if (obj.name.includes(searchValue)) {
			return true
		}
		return false
	})
	return (
		<div className='ribbon'>
			<MainEvent />
			<ButtonSale />
			<YouLikeLent />
			<LentBlogs />
		</div>
	)
}
