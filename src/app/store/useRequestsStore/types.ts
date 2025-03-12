interface IRequest {
	requestId: string
	title: string
	description: string
	category: string
	date: string
}

interface IRequestsStore {
	requests: IRequest[]
	addRequest: (request: IRequest) => void
	deleteRequest: (id: IRequest['requestId']) => void
	updateRequest: (id: IRequest['requestId'], request: IRequest) => void
}

export type { IRequestsStore, IRequest }
