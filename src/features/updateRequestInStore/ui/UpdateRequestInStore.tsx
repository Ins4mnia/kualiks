import { IRequest, useRequestsStore } from '@/app/store'
import { FC, ReactNode } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	requestId: string
	newRequestData: IRequest
	children: ReactNode
	onClick?: () => void
}

const UpdateRequestInStore: FC<Props> = ({
	requestId,
	newRequestData,
	children,
	onClick,
	...rest
}) => {
	const updateRequest = useRequestsStore(state => state.updateRequest)

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!newRequestData || !requestId) return alert('Неккоректные данные')
		e.preventDefault()
		updateRequest(requestId, newRequestData)
		onClick?.()
	}

	return (
		<button {...rest} onClick={handleClick}>
			{children}
		</button>
	)
}

export default UpdateRequestInStore
