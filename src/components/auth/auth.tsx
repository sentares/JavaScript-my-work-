import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginPage } from './login/login'
import { Register } from './register/register'
import { toast } from 'react-toastify'
import { instance } from '../../utils/axios/axios'
import { useAppDispatch } from '../../utils/hooks/hooks'
import { login } from '../../redux/slises/auth/authSlice'
import { AppErrors } from '../../common/errors/errors'

export const AuthRootComponent: FC = (): JSX.Element => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [username, setUsername] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		if (location.pathname === '/login') {
			if (email !== '' && password !== '') {
				try {
					const userData = {
						email,
						password,
					}
					const user = await instance.post('auth/login', userData)
					await dispatch(login(user.data))
					toast(`Welcome, ${user.data.user.firstName}`)
					navigate('/')
				} catch (error) {
					toast.error('Неудалось 🥺')
					throw new Error(AppErrors.PasswordDoNotMatch)
				}
			} else {
				toast.error('Введите адрес электронной почты и пароль.')
			}
		} else {
			if (repeatPassword !== password) return
			try {
				const userData = {
					firstName,
					username,
					email,
					password,
				}
				const newUser = await instance.post('auth/register', userData)
				await dispatch(login(newUser.data))
				toast(`Welcome, ${newUser.data.user.firstName}`)
				navigate('/')
			} catch (error) {
				toast.error('Неудалось 🥺')
				return error
			}
		}
	}

	return (
		<div className='authRoot'>
			<form onSubmit={handleSubmit}>
				{location.pathname === '/register' ? (
					<Register
						setEmail={setEmail}
						setPassword={setPassword}
						setUsername={setUsername}
						setRepeatPassword={setRepeatPassword}
					/>
				) : location.pathname === '/login' ? (
					<LoginPage setEmail={setEmail} setPassword={setPassword} />
				) : null}
			</form>
		</div>
	)
}
