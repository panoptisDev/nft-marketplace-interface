import {
	useCallback,
	useEffect, // useMemo,
	useState
} from 'react'

import type { NextPage } from 'next'
import Image from 'next/image'

import { Button, Container, Grid } from '@mui/material'
import { Title } from 'components'
import {
	YourDomainCard,
	YourNFTCardProps
} from 'components/Card/YourDomainCard'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import styled from 'styled-components'
import { BgMatrixRight, Section } from 'styles'
import { getOwnerDomains } from 'utils/callContract'

const TitleCenter = styled(Title)`
	text-align: center;
	margin-bottom: 40px;
	@media screen and (max-width: 1700px) {
		margin-bottom: 40px;
	}
	@media screen and (max-width: 1400px) {
		margin-bottom: 34px;
	}
	@media screen and (max-width: 900px) {
		margin-bottom: 22px;
	}
`
const BgMatrixRightCustom = styled(BgMatrixRight)`
	min-height: calc(100vh - 316px);
`

const ButtonMain = styled(Button)`
	min-width: 260px;
	padding: 12px 24px;
	background-color: ${({ theme }) => theme?.colors?.blue4};
	box-shadow: 0px 20px 40px rgba(0, 43, 90, 0.3);
	text-transform: capitalize;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 28px;
	transition: all 0.2s linear;
	&:hover {
		background-color: ${({ theme }) => theme?.colors?.pink4};
	}

	&.sorry-btn {
		padding: 18px 70px;
	}

	@media screen and (max-width: 1700px) {
		padding: 11px 22px;
		min-width: 240px;
	}
	@media screen and (max-width: 900px) {
		padding: 10px 22px;
		min-width: 220px;
		&.sorry-btn {
			padding: 18px 50px;
		}
	}
	@media screen and (max-width: 500px) {
		padding: 12px 22px;
		min-width: 200px;
		&.sorry-btn {
			padding: 18px 40px;
		}
	}
`
const ButtonMainWrap = styled.div`
	text-align: center;
	margin-top: 50px;

	@media screen and (max-width: 1700px) {
		margin-top: 40px;
	}
	@media screen and (max-width: 900px) {
		margin-top: 30px;
	}
`
const SorryContainer = styled.div`
	padding: 40px 0;
	text-align: center;
	& > .sorry-img {
		position: relative;
		width: auto;
		height: 300px;
	}
	& > .sorry-title {
		max-width: 50%;
		margin: 40px auto 0;
	}
	@media screen and (max-width: 1700px) {
		padding: 20px 0;
		& > .sorry-img {
			height: 260px;
		}
	}
	@media screen and (max-width: 1400px) {
		& > .sorry-img {
			height: 220px;
		}
		& > .sorry-title {
			max-width: 40%;
		}
	}
	@media screen and (max-width: 900px) {
		& > .sorry-img {
			height: 200px;
		}
		& > .sorry-title {
			margin-top: 30px;
			max-width: 53%;
		}
	}
	@media screen and (max-width: 500px) {
		& > .sorry-img {
			height: 180px;
		}
		& > .sorry-title {
			max-width: 80%;
		}
	}
`

const YourDomain: NextPage = () => {
	const { account, library } = useActiveWeb3React()

	const [nfts, setNFTs] = useState<YourNFTCardProps[]>([])

	const getDomains = useCallback(async () => {
		if (!account || !library) return
		try {
			const nfts = await getOwnerDomains(library, account)
			setNFTs(nfts)
			// setDomains(domains)
			// setTLDs(tlds)
		} catch (error) {
			console.error(error)
		}
	}, [account, library])

	useEffect(() => {
		getDomains()
	}, [getDomains])

	return (
		<>
			<BgMatrixRightCustom>
				<Section>
					<Container>
						{nfts.length ? (
							<>
								<TitleCenter
									size="md"
									headingType="h4"
									className="your-domain-title">
									Your NFT
								</TitleCenter>
								<Grid
									container
									columns={12}
									justifyContent="center"
									spacing={4}>
									{nfts.map((domain: YourNFTCardProps, index?: number) => (
										<Grid item xl={4} lg={6} md={6} sm={10} xs={12} key={index}>
											<YourDomainCard
												id={domain.id}
												tokenURI={domain.tokenURI}
											/>
										</Grid>
									))}
								</Grid>
								<ButtonMainWrap>
									<ButtonMain variant="contained" size="medium">
										Save
									</ButtonMain>
								</ButtonMainWrap>
							</>
						) : (
							<SorryContainer>
								<div className="sorry-img">
									<Image
										priority
										src="/images/your-domain-state-2.png"
										alt="Huta Web Logo"
										layout="fill"
										objectFit="contain"
										objectPosition="center center"
									/>
								</div>
								<TitleCenter className="sorry-title">
									You Don’t have any domains yet
								</TitleCenter>
								<ButtonMainWrap className="sorry-btn-wrap">
									<ButtonMain
										className="sorry-btn"
										variant="contained"
										size="large">
										Get your First Domain
									</ButtonMain>
								</ButtonMainWrap>
							</SorryContainer>
						)}
					</Container>
				</Section>
			</BgMatrixRightCustom>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Your Domain',
			description: 'This is a description for Your Domain page'
		}
	}
}

export default YourDomain
