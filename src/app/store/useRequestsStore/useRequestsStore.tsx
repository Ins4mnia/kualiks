import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware' // Импортируем persist
import type { IRequestsStore } from './types'

const useRequestsStore = create<IRequestsStore>()(
	persist(
		(set, get) => ({
			requests: [],
			addRequest: requestData => {
				const { requests } = get()
				set({ requests: [requestData, ...requests] })
			},
			deleteRequest: requestId => {
				const { requests } = get()
				const newRequests = requests.filter(
					request => request.requestId !== requestId
				)
				set({ requests: newRequests })
			},
			updateRequest: (requestId, newRequestData) => {
				const { requests } = get()
				set({
					requests: requests.map(request =>
						request.requestId === requestId ? newRequestData : request
					),
				})
			},
		}),
		{
			name: 'requests-store',
			storage: createJSONStorage(() => localStorage),
		}
	)
)

export { useRequestsStore }
