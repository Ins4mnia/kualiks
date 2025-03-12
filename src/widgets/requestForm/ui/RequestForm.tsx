import { IRequest } from '@/app/store'
import { FC, useCallback, useEffect, useState } from 'react'
import { AddRequestToStore } from '@/features/addRequestToStore'
import { UpdateRequestInStore } from '@/features/updateRequestInStore'
import { useNavigate } from 'react-router'
import { isFormValid } from './utils'
import s from './RequestForm.module.scss'

const initialState: IRequest = {
	requestId: '',
	title: '',
	description: '',
	category: '',
	date: '',
}

interface Props {
	updateMode?: boolean
	requestData?: IRequest
	closeModal?: () => void
}

const RequestForm: FC<Props> = ({
	updateMode = false,
	requestData = initialState,
	closeModal,
}) => {
	const [newRequestData, setNewRequestData] = useState<IRequest>(requestData)

	const navigate = useNavigate()
	const handleFormChange = (key: string, value: string) => {
		setNewRequestData({
			...newRequestData,
			[key]: value,
		})
		if (!updateMode) {
			localStorage.setItem('lsrd', JSON.stringify(newRequestData))
		}
	}

	const handleAddRequest = () => {
		navigate('/requests')
		setNewRequestData(initialState)
		if (!updateMode) {
			localStorage.removeItem('lsrd')
		}
	}

	const handleUpdateRequest = useCallback(() => {
		closeModal?.()
		setNewRequestData(initialState)
	}, [closeModal])

	useEffect(() => {
		if (!updateMode) {
			const lsrd = localStorage.getItem('lsrd')
			if (lsrd) {
				setNewRequestData(JSON.parse(lsrd))
			}
		}
	}, [])

	return (
		<form className={s.form}>
			<input
				style={{ padding: '10px' }}
				placeholder='Название'
				type='text'
				value={newRequestData.title}
				onChange={e => handleFormChange('title', e.target.value)}
			/>
			<select
				value={newRequestData.category}
				onChange={e => handleFormChange('category', e.target.value)}
			>
				<option value=''>Выберите категорию</option>
				<option value='Категория А'>Категория "А"</option>
				<option value='Категория B'>Категория "B"</option>
				<option value='Категория C'>Категория "C"</option>
			</select>
			<textarea
				style={{ padding: '10px' }}
				placeholder='Описание'
				value={newRequestData.description}
				onChange={e => handleFormChange('description', e.target.value)}
			/>
			{/* <input
				style={{ padding: '10px' }}
				placeholder='Дата'
				type='date'
				value={newRequestData.date}
				onChange={e => handleFormChange('date', e.target.value)}
			/> */}
			{updateMode ? (
				<UpdateRequestInStore
					disabled={!isFormValid(newRequestData)}
					requestId={requestData.requestId}
					newRequestData={newRequestData}
					onClick={handleUpdateRequest}
				>
					Обновить заявку
				</UpdateRequestInStore>
			) : (
				<AddRequestToStore
					disabled={!isFormValid(newRequestData)}
					requestData={newRequestData}
					onClick={handleAddRequest}
				>
					Создать заявку
				</AddRequestToStore>
			)}
		</form>
	)
}

export default RequestForm
