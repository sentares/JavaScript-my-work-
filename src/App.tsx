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
import { PrivateRoute } from './utils/routes/private/privateRoute'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart.tsx/cart'
import { Checkout } from './pages/checkout/checkout'
import { ProductDetails } from './pages/productDetails/productDetails'

const App = () => {
	return (
		<div className='wrapper'>
			<LayoutComponent>
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<PrivateRoute />}>
								<Route path='/' element={<Home />} />
								<Route path='shop' element={<Shop />} />
								<Route path='shop/:id' element={<ProductDetails />} />
								<Route path='cart' element={<Cart />} />
								<Route path='checkout' element={<Checkout />} />
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
