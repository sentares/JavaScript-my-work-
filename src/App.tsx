import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Restaurant } from './pages/products/done_food/restaurant'
import { SrteetFood } from './pages/products/done_food/srteetfood'
import { Fruits } from './pages/products/vagitables/fruits'
import { Vegitables } from './pages/products/vagitables/vegitables'
import { AllLavka } from './pages/products/yandex_products/all_lavka'
import { NewLavka } from './pages/products/yandex_products/new_lavka'
import { TakeTogether } from './pages/products/yandex_products/take_together'
import { ToastContainer } from 'react-toastify'
import './scss/app.scss'
import { AuthRootComponent } from './components/auth/auth'
import { LayoutComponent } from './components/layout/layout'
import { PrivateRoute } from './utils/route/privateRoute'

const App = () => {
	return (
		<div className='wrapper'>
			<LayoutComponent>
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<PrivateRoute />}>
								<Route path='/' element={<Home />} />
								<Route path='/fromLavka' element={<AllLavka />} />
								<Route path='/novinki' element={<NewLavka />} />
								<Route path='/choose_together' element={<TakeTogether />} />
								<Route path='/restaurant' element={<Restaurant />} />
								<Route path='/streetFood' element={<SrteetFood />} />
								<Route path='/fruits' element={<Fruits />} />
								<Route path='/vagetables' element={<Vegitables />} />
							</Route>
							<Route path='/login' element={<AuthRootComponent />} />
							<Route path='/register' element={<AuthRootComponent />} />
						</Routes>
					</div>
				</div>
			</LayoutComponent>

			<ToastContainer />
		</div>
	)
}

export default App
