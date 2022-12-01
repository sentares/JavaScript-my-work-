import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ItemsContext } from '../../../../App'
import { ProductItems } from '../../../../components/productItems/productIems'
// import items from '../ribbons/t.json'

export const DoneRibbons = () => {
	const { items, setItems } = useContext(ItemsContext)

	const fillterForRest = items => {
		if (items.category === 'Из ресторанов' && items.product === 'The Truffle') {
			return true
		}
		return false
	}

	const filterNewRest = items.filter(fillterForRest)

	const fillterForRestTwo = items => {
		if (items.category === 'Из ресторанов' && items.product === 'Lao Lee') {
			return true
		}
		return false
	}

	const filterNewRest2 = items.filter(fillterForRestTwo)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>The Truffle</h1>
					<div className='productElements'>
						{filterNewRest.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
					<h1 className=' text-3xl font-bold'>Lao Lee</h1>
					<div className='productElements'>
						{filterNewRest2.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
