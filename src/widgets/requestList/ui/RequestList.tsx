import { Request } from '@/entities/request'
import { useRequestsStore } from '@/app/store'
import s from './RequestList.module.scss'
import { Link } from 'react-router'

const RequestList = () => {
	const requests = useRequestsStore(state => state.requests)
	if (requests.length == 0)
		return <div style={{ textAlign: 'center' }}>Cписок пуст</div>
	return (
		<div className={s.requestList}>
			{requests.map(request => (
				<Link
					key={request.requestId}
					to={request.requestId ? `/requests/${request.requestId}` : '#'}
				>
					<Request requestData={request} allDetails={false} />
				</Link>
			))}
		</div>
	)
}

export default RequestList
