import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginPage } from './login/login'
import { toast } from 'react-toastify'
import { Register } from './register/register'
import { instance } from '../../utils/axios/axios'
import { useAppDispatch } from '../../utils/hooks/hooks'
import { login } from '../../redux/slises/auth/authSlice'

export const AuthRootComponent: FC = (): JSX.Element => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		if (location.pathname === '/login') {
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
				toast.error('не удалось(')
				return error
			}
		} else {
			const newUser = {
				username,
				email,
				password,
				repeatPassword,
			}
			const user = await instance.post('auth/register', newUser)
			console.log(user)
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
