import RequestList from '@/widgets/requestList/ui/RequestList'
import { Link } from 'react-router'
import s from './RequestsPage.module.scss'

const RequestsPage = () => {
	return (
		<div className={s.requestsPage}>
			<div className={s.requestsPage__header}>
				<h1>Все заявки</h1>
				<Link to={'/requests/new'}>Добавить заявку</Link>
			</div>
			<RequestList />
		</div>
	)
}

export default RequestsPage
