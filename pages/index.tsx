import { useEffect, useRef } from 'react'

import type { NextPage } from 'next'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Container, Grid, IconButton, SvgIcon } from '@mui/material'
import { Description, Title, TopPage } from 'components'
import { DomainCardProps } from 'components/Card/DomainCard'
import { DomainCarousel } from 'components/pages/home/DomainCarousel'
import { InfoNumber } from 'components/pages/home/InfoNumber'
// import { MapEcosystem } from 'components/pages/home/MapEcosystem'
import { RoadMap } from 'components/pages/home/RoadMap'
import DomainSvg from 'public/images/noun-domain.svg'
import InternetSvg from 'public/images/noun-internet.svg'
import styled from 'styled-components'
import { BgGradient, Section } from 'styles'
import 'swiper/css'

const TopPageVideo = styled.video`
	position: absolute;
	left: 70%;
	min-width: 100%;
	min-height: 100%;
	transform: translateX(-70%);
	@media screen and (max-width: 991px) {
		left: 80%;
		min-width: auto;
		height: 100%;
		transform: translateX(-80%);
	}
`

const TypePageCustom = styled(TopPage)`
	.topPage--inner {
		text-align: left;
		.topPage--title {
			font-size: 88px;
			font-weight: 600;
			line-height: 1.1;
		}
	}
	@media screen and (max-width: 1699px) {
		.topPage--inner {
			.topPage--title {
				font-size: 73px;
			}
		}
	}
	@media screen and (max-width: 1399px) {
		.topPage--inner {
			.topPage--title {
				font-size: 60px;
			}
		}
	}
	@media screen and (max-width: 991px) {
		.topPage--inner {
			.topPage--title {
				font-size: 40px;
			}
		}
	}
	@media screen and (max-width: 767px) {
		.topPage--inner {
			text-align: center;
		}
	}
`

const BoxInfoContainer = styled(BgGradient)`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-start;
	padding: 40px 30px 40px 40px;
	border-radius: 20px;
	box-shadow: 0px 20px 54px 0px #857ab44d;
	.boxInfo-icon {
		width: 48px;
		height: 48px;
		margin-bottom: 24px;
	}
	.boxInfo-title {
		margin-bottom: 24px;
	}
	.boxInfo-description {
		flex: 1;
		margin-bottom: 20px;
	}
	.boxInfo-btn {
		padding: 10px;
		background-color: ${({ theme }) => theme?.colors?.white};
	}
	@media screen and (max-width: 1700px) {
		padding: 32px 25px 32px 32px;
		border-radius: 16px;
		.boxInfo-icon {
			width: 48px;
			height: 48px;
			margin-bottom: 24px;
		}
		.boxInfo-title {
			margin-bottom: 16px;
			font-size: 24px;
		}
		.boxInfo-description {
			margin-bottom: 20px;
			font-size: 16px;
		}
		.boxInfo-btn {
			padding: 8px;
		}
	}
	@media screen and (max-width: 768px) {
		padding: 30px 15px;
	}
`

const NiceBackground = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme?.colors?.darkPurple4};
	&:before {
		position: absolute;
		right: 0;
		bottom: -10%;
		width: 46%;
		height: 94%;
		background-image: url('/images/bg-home-info.png');
		background-position: right bottom;
		background-repeat: no-repeat;
		background-size: contain;
		content: '';
		pointer-events: none;
	}
	${Section} {
		position: relative;
		z-index: 1;
		background-color: transparent;
	}
	@media screen and (max-width: 768px) {
		&:before {
			bottom: 0;
		}
	}
`

const SectionGray = styled(Section)`
	background-color: ${({ theme }) => theme?.colors?.darkBlue4};
`

const domains: Array<DomainCardProps> = [
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } },
	{ domain: 'google.com', buttonProps: { children: 'Click 5 BNB' } }
]

const Home: NextPage = () => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if (videoRef.current?.play) {
			videoRef.current.play()
		}
	}, [])

	return (
		<>
			<TypePageCustom
				title="Be in new world of the internet"
				size="lg"
				containerProps={{
					justifyContent: 'flex-start'
				}}
				itemProps={{
					lg: 6,
					md: 7,
					sm: 12
				}}
				bgGradient={
					<TopPageVideo
						ref={videoRef}
						src="/video/banner.mp4"
						autoPlay
						loop
						muted
					/>
				}>
				<Description>
					Huta is decentralised domain name system which governed by community
				</Description>
			</TypePageCustom>

			<InfoNumber />

			<NiceBackground>
				<Section className="homepage-infomation" paddingVertical={0}>
					<Container>
						<Grid container columns={12} spacing={{ lg: 10, md: 3, xs: 4 }}>
							<Grid item md={6} xs={12}>
								<BoxInfoContainer bgImage="linear-gradient(126.21deg, #CF1FBD 0%, #D430EF 14.24%, #A30E93 49.56%, #CF1FBD 93.2%)">
									<SvgIcon
										component={InternetSvg}
										viewBox="0 0 48 48"
										className="boxInfo-icon"
									/>
									<Title size="xs" headingType="h4" className="boxInfo-title">
										A Decentralized Internet Governed By Community
									</Title>
									<Description size="sm" className="boxInfo-description">
										HUTA introduces a decentralized Internet with no central
										governing body. We believe that nobody reserves the right to
										dictate the primary operations of the internet. EXIP returns
										100% ownership &amp; control of domains and TLDs to the
										registrants for a single lifetime fee.
									</Description>
									<div className="boxInfo-btn-container">
										<IconButton
											aria-label="delete"
											size="large"
											className="boxInfo-btn">
											<ChevronRightIcon fontSize="inherit" />
										</IconButton>
									</div>
								</BoxInfoContainer>
							</Grid>
							<Grid item md={6} xs={12}>
								<BoxInfoContainer bgImage="linear-gradient(126.21deg, #6A35EE 0%, #9930EF 14.24%, #5737EE 49.56%, #795CEB 93.2%)">
									<SvgIcon
										component={DomainSvg}
										viewBox="0 0 48 48"
										className="boxInfo-icon"
									/>
									<Title size="xs" headingType="h4" className="boxInfo-title">
										Grab Your More Memorable Unique TLDs &amp; Premium Domains
										As NFTS
									</Title>
									<Description size="sm" className="boxInfo-description">
										Be unique with your domain extension, so potential clients
										&amp; communities will know precisely who you are and what
										you do. Create high SE0 impact premium domain names to send
										a strong signal to search engines and help you rank higher
										in the search results. More clicks, more leads, more
										customers.
									</Description>
									<div className="boxInfo-btn-container">
										<IconButton
											aria-label="delete"
											size="large"
											className="boxInfo-btn">
											<ChevronRightIcon fontSize="inherit" />
										</IconButton>
									</div>
								</BoxInfoContainer>
							</Grid>
						</Grid>
					</Container>
				</Section>
				<Section className="homepage-top-domain">
					<DomainCarousel
						title="Top Domain on sale"
						domains={domains}
						buttonMoreProps={{
							children: 'Explore More',
							endIcon: <ArrowForwardIcon />
						}}
					/>
				</Section>
			</NiceBackground>

			<SectionGray className="homepage-tld">
				<DomainCarousel
					title="Top TLDs on sale"
					domains={domains}
					buttonMoreProps={{
						children: 'Explore More',
						endIcon: <ArrowForwardIcon />
					}}
				/>
			</SectionGray>

			{/* <MapEcosystem /> */}

			<RoadMap />
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Homepage',
			description: 'This is a description for homepage'
		}
	}
}

export default Home
