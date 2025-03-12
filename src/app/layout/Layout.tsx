import { Outlet } from 'react-router'
import { Header } from '@/widgets/header'
import s from './Layout.module.scss'
const Layout = () => {
	return (
		<>
			<Header />
			<main className={s.layout}>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
