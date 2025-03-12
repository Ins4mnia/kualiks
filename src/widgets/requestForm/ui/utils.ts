import { IRequest } from '@/app/store'

const isFormValid = (newRequestData: IRequest): boolean => {
	return (
		newRequestData.title.trim() !== '' &&
		newRequestData.description.trim() !== '' &&
		newRequestData.category.trim() !== ''
		// newRequestData.date.trim() !== ''
	)
}

export { isFormValid }
