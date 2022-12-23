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
					<div className='mt-5 flex items-center justify-center'>
						<div className=' text-[13.5px] font-semibold	'>ИЛИ</div>
					</div>
					<button
						aria-label='Continue with google'
						role='button'
						className='focus:outline-none md:p-4 p-[6px] justify-center rounded-md border-none bg-gray-200 flex items-center w-full mt-5 hover:bg-amber-400 hover:ease-in duration-300 hover:text-gray-900'
					>
						<svg
							width='19'
							height='20'
							viewBox='0 0 19 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z'
								fill='#4285F4'
							/>
							<path
								d='M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z'
								fill='#34A853'
							/>
							<path
								d='M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z'
								fill='#FBBC05'
							/>
							<path
								d='M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z'
								fill='#EB4335'
							/>
						</svg>
						<p className=' ml-4 text-gray-700 items-center font-medium text-lg'>
							Войти с помощью Google
						</p>
					</button>
					<div className='flex items-center text-lg mt-8'>
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
