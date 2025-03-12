import { IRequest, useRequestsStore } from '@/app/store'
import { FC, ReactNode } from 'react'
import s from './AddRequestToStore.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	requestData: IRequest
	children: ReactNode
	onClick?: () => void
}

const formatDate = (date: Date): string => {
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	return `${day}.${month}.${year}`
}

const AddRequestToStore: FC<Props> = ({
	requestData,
	children,
	onClick,
	...rest
}) => {
	const addRequest = useRequestsStore(state => state.addRequest)

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!requestData) return alert('Неккоректные данные')
		const { title, description, category } = requestData
		e.preventDefault()
		addRequest({
			requestId: `${Date.now().toString(36)}${Math.random()}`,
			title,
			description,
			category,
			date: formatDate(new Date()),
		})
		onClick?.()
	}

	return (
		<button {...rest} className={s.button} onClick={handleClick}>
			{children}
		</button>
	)
}

export default AddRequestToStore
