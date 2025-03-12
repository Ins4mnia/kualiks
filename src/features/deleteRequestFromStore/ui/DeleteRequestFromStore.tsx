import { IRequest, useRequestsStore } from '@/app/store'
import { FC, ReactNode } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	requestId: IRequest['requestId']
	children: ReactNode
	onClick?: () => void
}

const DeleteRequestFromStore: FC<Props> = ({
	requestId,
	children,
	onClick,
	...rest
}) => {
	const deleteRequest = useRequestsStore(state => state.deleteRequest)

	const handleClick = () => {
		deleteRequest(requestId)
		onClick?.()
	}

	return (
		<button {...rest} onClick={handleClick}>
			{children}
		</button>
	)
}

export default DeleteRequestFromStore
