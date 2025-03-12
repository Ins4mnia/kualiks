import { IRequest } from '@/app/store'
import { FC, memo } from 'react'
import s from './Request.module.scss'
interface Props {
	requestData: IRequest
	allDetails?: boolean
}

const Request: FC<Props> = memo(({ requestData, allDetails = true }) => {
	if (!requestData) return <div>Ошибка!</div>
	return (
		<div className={s.request}>
			<div className={s.request__header}>
				<h2>{requestData.title}</h2>
				<p>{requestData.date}</p>
			</div>
			{allDetails && (
				<div>
					<p>{requestData.category}</p>
					<textarea value={requestData.description} readOnly />
				</div>
			)}
		</div>
	)
})

export default Request
