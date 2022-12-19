import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { IPropsLayout } from '../../common/types/layout'
import { Catalog } from '../catalog/catalog'
import { Header } from '../header/header'

export const LayoutComponent: FC<IPropsLayout> = (
	props: IPropsLayout
): JSX.Element => {
	const { children } = props
	const { pathname } = useLocation()
	return (
		<div>
			{pathname === '/register' || pathname === '/login' ? (
				<div>{children}</div>
			) : (
				<div>
					<Header />
					<div>{children}</div>
				</div>
			)}
		</div>
	)
}
