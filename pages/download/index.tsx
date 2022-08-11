import type { NextPage } from 'next'

import { Container, Grid } from '@mui/material'
import { Title } from 'components'
import { DownloadCard, DownloadCardProps } from 'components/Card/DownloadCard'
import styled from 'styled-components'
import { BgMatrixRight, Section } from 'styles'

const SectionGray = styled(Section)`
	background-color: ${({ theme }) => theme?.colors?.darkBlue4};
`
const TitleCenter = styled(Title)`
	margin-bottom: 40px;
	text-align: center;
	@media screen and (max-width: 1700px) {
		margin-bottom: 36px;
	}
	@media screen and (max-width: 1400px) {
		margin-bottom: 34px;
	}
	@media screen and (max-width: 900px) {
		margin-bottom: 22px;
	}
	@media screen and (max-width: 900px) {
		margin-bottom: 22px;
	}
`

const data1: Array<DownloadCardProps> = [
	{
		downloadBtnProps: {
			isActive: true
		},
		avatarSrc: '/images/MacOS.png',
		name: 'MacOS'
	},
	{
		downloadBtnProps: {
			isActive: true
		},
		avatarSrc: '/images/Window.png',
		name: 'Windows'
	},
	{
		downloadBtnProps: {
			isActive: false
		},
		avatarSrc: '/images/Ios.png',
		name: 'IOS'
	},
	{
		downloadBtnProps: {
			isActive: false
		},
		avatarSrc: '/images/Android.png',
		name: 'Android'
	}
]

const data2: Array<DownloadCardProps> = [
	{
		downloadBtnProps: {
			isActive: true
		},
		avatarSrc: '/images/Chrome.png',
		name: 'Chrome'
	},
	{
		downloadBtnProps: {
			isActive: true
		},
		avatarSrc: '/images/Firefox.png',
		name: 'Firefox'
	}
]

const Download: NextPage = () => {
	return (
		<>
			<BgMatrixRight>
				<Section>
					<Container>
						<TitleCenter size="md" headingType="h4" className="software-title">
							Huta Software
						</TitleCenter>
						<Grid
							justifyContent="center"
							container
							rowSpacing={{ xs: 2, sm: 3, lg: 4 }}
							columnSpacing={{ xs: 2, sm: 3, lg: 4 }}>
							{data1.map((download: DownloadCardProps, index?: number) => (
								<Grid key={index} item xs={6} md={3}>
									<DownloadCard {...download} />
								</Grid>
							))}
						</Grid>
					</Container>
				</Section>
			</BgMatrixRight>
			<SectionGray>
				<Container>
					<TitleCenter size="md" headingType="h4" className="extension-title">
						Huta Extension
					</TitleCenter>
					<Grid
						justifyContent="center"
						container
						rowSpacing={{ xs: 2, sm: 3, lg: 4 }}
						columnSpacing={{ xs: 2, sm: 3, lg: 4 }}>
						{data2.map((download: DownloadCardProps, index?: number) => (
							<Grid key={index} item xs={6} md={3}>
								<DownloadCard {...download} />
							</Grid>
						))}
					</Grid>
				</Container>
			</SectionGray>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Download page',
			description: 'This is a description for Dowload page'
		}
	}
}

export default Download
