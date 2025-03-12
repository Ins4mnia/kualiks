import { useRequestsStore } from '@/app/store'
import { Request } from '@/entities/request'
import { DeleteRequestFromStore } from '@/features/deleteRequestFromStore'
import { Modal } from '@/shared/ui/modal'
import { RequestForm } from '@/widgets/requestForm'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const RequestDetailPage = () => {
	const [redactModalFormIsOpen, setRedactModalFormIsOpen] =
		useState<boolean>(false)
	const navigate = useNavigate()
	const { requestId } = useParams()

	const request = useRequestsStore(state =>
		state.requests.find(request => request.requestId === requestId)
	)

	if (!request) {
		return <div>Запрос не найден</div>
	}

	return (
		<div>
			<div>
				<DeleteRequestFromStore
					onClick={() => navigate('/requests')}
					requestId={request.requestId}
				>
					Удалить заявку
				</DeleteRequestFromStore>
				<button
					onClick={() => setRedactModalFormIsOpen(!redactModalFormIsOpen)}
				>
					Редактировать заявку
				</button>
			</div>
			<Modal
				isOpen={redactModalFormIsOpen}
				onClose={() => setRedactModalFormIsOpen(!redactModalFormIsOpen)}
			>
				<RequestForm
					requestData={request}
					updateMode={true}
					closeModal={() => setRedactModalFormIsOpen(!redactModalFormIsOpen)}
				/>
			</Modal>
			<Request requestData={request} />
		</div>
	)
}

export default RequestDetailPage
