import { Link } from 'react-router'
import s from './Header.module.scss'
const Header = () => {
	return (
		<div className={s.header}>
			<Link to={'/requests'}>Все заявки</Link>
			<Link to={'/requests/new'}>Создать новую заявку</Link>
		</div>
	)
}

export default Header
