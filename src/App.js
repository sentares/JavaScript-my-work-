import { createContext, useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Login } from './components/auth/login/login'
import { Register } from './components/auth/register/register'
import { Header } from './components/header/header'
import { Home } from './pages/home/home'
import { Restaurant } from './pages/products/done_food/restaurant'
import { SrteetFood } from './pages/products/done_food/srteetfood'
import { Fruits } from './pages/products/vagitables/fruits'
import { Vegitables } from './pages/products/vagitables/vegitables'
import { AllLavka } from './pages/products/yandex_products/all_lavka'
import { NewLavka } from './pages/products/yandex_products/new_lavka'
import { TakeTogether } from './pages/products/yandex_products/take_together'
import './scss/app.scss'

export const ItemsContext = createContext()
export const SearchContext = createContext()

function App() {
	const [items, setItems] = useState([])
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
			<ItemsContext.Provider value={{ items, setItems }}>
				<SearchContext.Provider value={{ searchValue, setSearchValue }}>
					<Header />
					<div className='content'>
						<div className='container'>
							<Routes>
								<Route path='/' element={<Home items={items} />} />
								<Route path='/fromLavka' element={<AllLavka />} />
								<Route path='/newFromLavka' element={<NewLavka />} />
								<Route path='/choseTogether' element={<TakeTogether />} />
								<Route path='/restaurant' element={<Restaurant />} />
								<Route path='/streetFood' element={<SrteetFood />} />
								<Route path='/fruits' element={<Fruits />} />
								<Route path='/vagitables' element={<Vegitables />} />
							</Routes>
						</div>
					</div>
				</SearchContext.Provider>
			</ItemsContext.Provider>
		</div>
	)
}

export default App
