import { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'
interface Props {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		if (isOpen) window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [isOpen, onClose])

	if (!isOpen) return null

	return createPortal(
		<div className={s.modal_overlay} onClick={onClose}>
			<div className={s.modal__content} onClick={e => e.stopPropagation()}>
				<button onClick={onClose} className={s.modal__close}>
					<span>X</span>
				</button>
				{children}
			</div>
		</div>,
		document.body
	)
}
