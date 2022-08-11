import Image from 'next/image'

import { DownloadCardProps } from '.'
import {
	AvatarWrap,
	DownloadCardButton,
	DownloadCardName,
	DownloadCardWrap
} from './DownloadCard.styled'

function DownloadCard({
	downloadBtnProps,
	avatarSrc,
	name
}: DownloadCardProps) {
	return (
		<DownloadCardWrap>
			<AvatarWrap>
				<Image
					priority
					src={avatarSrc}
					alt="download-card-image"
					layout="fill"
					objectFit="contain"
					objectPosition="center center"
				/>
			</AvatarWrap>
			<DownloadCardName>{name}</DownloadCardName>
			<DownloadCardButton isActive={downloadBtnProps.isActive}>
				<div>{downloadBtnProps.isActive ? 'Download' : 'Will coming soon'}</div>
			</DownloadCardButton>
		</DownloadCardWrap>
	)
}

export default DownloadCard
