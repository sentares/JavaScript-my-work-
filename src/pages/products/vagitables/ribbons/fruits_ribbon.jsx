import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ItemsContext } from '../../../../App'
import { ProductItems } from '../../../../components/productItems/productIems'
// import items from '../ribbons/t.json'

export const FruitsRibbon = () => {
	const { items, setItems } = useContext(ItemsContext)

	const fillterForOv = items => {
		if (items.product === 'Самый сезон') {
			return true
		}
		return false
	}

	const filterNewOv = items.filter(fillterForOv)

	const fillterForRestTwo = items => {
		if (items.product === 'Ягоды') {
			return true
		}
		return false
	}

	const filterNewRest2 = items.filter(fillterForRestTwo)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Самый сезон</h1>
					<div className='productElements'>
						{filterNewOv.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Ягоды</h1>
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
