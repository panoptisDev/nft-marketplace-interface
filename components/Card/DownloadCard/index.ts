import DownloadCard from './DownloadCard'

export interface DownloadButtonProps {
	isActive: boolean
}

export interface DownloadCardProps {
	avatarSrc: string
	name: string
	downloadBtnProps: DownloadButtonProps
}

export { DownloadCard }
