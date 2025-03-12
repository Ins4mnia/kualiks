import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RequestsPage } from '@/pages/requestsPage'
import { RequestDetailPage } from '@/pages/requestDetailPage'
import { NewRequestPage } from '@/pages/newRequestPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { Layout } from '@/app/layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import '../styles/index.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Navigate to='/requests' replace />} />

					<Route path='/requests'>
						<Route index element={<RequestsPage />} />
						<Route path='new' element={<NewRequestPage />} />
						<Route path=':requestId' element={<RequestDetailPage />} />
					</Route>

					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
