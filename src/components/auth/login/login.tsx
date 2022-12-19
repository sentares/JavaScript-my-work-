import React from 'react'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { IPropsLogin } from '../../../common/types/auth'

export const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { setEmail, setPassword } = props

	return (
		<div className='bg-yellow-400 h-screen overflow-hidden flex items-center justify-center '>
			<div className='bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-xl	'>
				<div className='bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 shadow-2xl hover:bg-amber-200 hover:rounded-3xl hover:ease-in duration-300'>
					<Link to='/'>
						<svg
							width='64'
							height='64'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='32' cy='32' r='32' fill='#FC3F1D' />
							<path
								d='M37.02 52h6.977V12H33.842c-10.213 0-15.57 5.228-15.57 12.951 0 6.667 3.473 10.426 9.625 14.509l3.738 2.467-4.798-4.024L17.33 52h7.564L35.05 36.846l-3.532-2.35c-4.268-2.878-6.358-5.11-6.358-9.956 0-4.258 3.003-7.136 8.712-7.136h3.12V52h.03z'
								fill='#fff'
							/>
						</svg>
					</Link>
				</div>
				<div className='p-14 md:p-16'>
					<div className='flex items-center text-lg mb-6 md:mb-8 '>
						<svg className='absolute ml-3' width='24' viewBox='0 0 24 24'>
							<path d='M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z' />
						</svg>
						<input
							type='text'
							id='username'
							className='bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full rounded-md focus:bg-amber-200 hover:bg-zinc-300'
							placeholder='Username'
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex items-center text-lg mb-6 md:mb-8'>
						<svg className='absolute ml-3' viewBox='0 0 24 24' width='24'>
							<path d='m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z' />
						</svg>
						<input
							type='password'
							id='password'
							className='bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full rounded-md focus:bg-amber-200 hover:bg-zinc-300'
							placeholder='Пароль'
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button className='bg-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-md hover:bg-amber-400 hover:ease-in duration-300 hover:text-gray-900 '>
						Войти
					</button>
					<div className='flex items-center text-lg mt-10'>
						<p className=' m-auto'>
							Нет аккаунта?{' '}
							<Link
								className='text-amber-400 hover:text-amber-600'
								to='/register'
							>
								Зарегистрироваться
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
