import { SyntheticEvent, useState } from 'react'

// import { NATIVE_COIN } from 'constants/networks'
// import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import type { NextPage } from 'next'

// import { useQuery } from '@apollo/client'
// import { formatEther } from '@ethersproject/units'
import { Container, Grid, Tab, Tabs } from '@mui/material'
import { Description, TabPanel, TopPage } from 'components'
// import { DomainCard } from 'components/Card/DomainCard'
import { NFT_BID_TYPE } from 'constants/constants'
// import { GET_NFT_ON_SALE } from 'services/apollo/queries'
import styled from 'styled-components'
import { Section } from 'styles'

const TopPageCustom = styled(TopPage)`
	.description {
		max-width: 90%;
		margin-right: auto;
		margin-left: auto;
	}
	@media screen and (max-width: 768px) {
		.description {
			max-width: 100%;
		}
	}
`

const TabCustom = styled(Tabs)`
	position: relative;
	z-index: 0;
	font-family: 'Poppins', san-serifs;
	.MuiTabs-scroller {
		border: 1px solid ${({ theme }) => theme?.colors?.grey4};
		border-radius: ${({ theme }) => theme?.borderRadiusBase};
		.MuiButtonBase-root {
			color: #fff;
			font-size: 14px;
			font-weight: 500;
			text-transform: inherit;
		}
		.MuiTabs-indicator {
			z-index: -1;
			height: 100%;
			background-color: ${({ theme }) => theme?.colors?.pink4};
			border-radius: ${({ theme }) => theme?.borderRadiusBase};
		}
	}
	@media screen and (max-width: 1700px) {
		min-height: auto;
		.MuiTabs-scroller {
			.MuiButtonBase-root {
				min-height: auto;
				padding: 10px;
			}
		}
	}
	@media screen and (max-width: 1400px) {
		.MuiTabs-scroller {
			.MuiButtonBase-root {
				min-width: 50px;
			}
		}
	}
`

// const ButtonCreate = styled(Button)`
// 	padding: 12px 34px;
// 	font-size: 14px;
// 	line-height: 1.5;
// 	@media screen and (max-width: 1700px) {
// 		padding: 10px 28px;
// 		font-size: 13px;
// 	}
// 	@media screen and (max-width: 1400px) {
// 		padding: 10px 20px;
// 	}
// `

const TabHead = styled.div`
	margin-bottom: 30px;
	@media screen and (max-width: 1700px) {
		margin-bottom: 25px;
	}
`

const Home: NextPage = () => {
	// const { account, library } = useActiveWeb3React()

	const [bidType, setBidType] = useState<NFT_BID_TYPE>(NFT_BID_TYPE.auction)

	// const { loading, error, data } = useQuery(GET_NFT_ON_SALE, {
	// 	variables: { nft },
	// 	pollInterval: 12000
	// })

	// const renderList = useMemo(() => {
	// 	if (loading || error || !data) return []
	// 	const { auctions, fixedPrices } = data
	// 	if (bidType === NFT_BID_TYPE.auction) return auctions
	// 	return fixedPrices
	// }, [data, loading, error, bidType])

	const handleChangeBidType = (
		_: SyntheticEvent<Element, Event>,
		value: NFT_BID_TYPE
	) => {
		setBidType(value)
	}

	// const renderButtonProps = (price: string) => {
	// 	const formattedPrice = formatEther(price)
	// 	// eslint-disable-next-line  @typescript-eslint/no-inferrable-types
	// 	let children: string = `Buy ${formattedPrice} ${NATIVE_COIN.symbol}`
	// 	if (bidType === NFT_BID_TYPE.auction) {
	// 		// eslint-disable-next-line  @typescript-eslint/no-inferrable-types
	// 		children = 'Bid'
	// 	}
	// 	return {
	// 		children
	// 	}
	// }

	// if (loading) return <div>Loading...</div>
	// if (error) return <div>Error fetch subgraphs</div>

	return (
		<>
			<TopPageCustom title="Our Market Place" size="md">
				<Description className="description">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</Description>
			</TopPageCustom>
			<Section>
				<Container>
					<TabHead>
						<Grid container justifyContent="flex-end" spacing={{ xs: 1 }}>
							<Grid>
								<TabCustom value={bidType} onChange={handleChangeBidType}>
									<Tab
										label={NFT_BID_TYPE.auction}
										value={NFT_BID_TYPE.auction}
									/>
									<Tab
										label={NFT_BID_TYPE.fixedPrice}
										value={NFT_BID_TYPE.fixedPrice}
									/>
								</TabCustom>
							</Grid>
						</Grid>
					</TabHead>
					<TabPanel value={bidType} index={NFT_BID_TYPE.auction}>
						<Grid container columns={12} spacing={{ xl: 4, md: 3, xs: 2 }}>
							{/* {renderList.length ? (
								renderList.map((domain: any, index?: number) => (
									<Grid
										item
										lg={3}
										md={4}
										sm={6}
										xs={12}
										key={index?.toString()}>
										<DomainCard
											domain={domain}
											buttonProps={renderButtonProps(domain.hightestBid)}
										/>
									</Grid>
								))
							) : (
								<div>No TopLevelDomain {bidType.toString()}</div>
							)} */}
						</Grid>
					</TabPanel>
					<TabPanel value={bidType} index={NFT_BID_TYPE.fixedPrice}>
						<Grid container columns={12} spacing={{ xl: 4, md: 3, xs: 2 }}>
							{/* {renderList.length ? (
								renderList.map((domain: any, index?: number) => (
									<Grid
										item
										lg={3}
										md={4}
										sm={6}
										xs={12}
										key={index?.toString()}>
										<DomainCard
											domain={domain}
											buttonProps={renderButtonProps(domain.hightestBid)}
										/>
									</Grid>
								))
							) : (
								<div>No Domain {bidType.toString()}</div>
							)} */}
						</Grid>
					</TabPanel>
				</Container>
			</Section>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Marketplace',
			description: 'This is a description for marketplace'
		}
	}
}

export default Home
