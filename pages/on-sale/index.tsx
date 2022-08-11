import { SyntheticEvent, useState } from 'react'

// import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { NextPage } from 'next'

// import { useQuery } from '@apollo/client'
import { Tab, Tabs } from '@mui/material'
// import { DomainItem } from 'components/pages/on-sale'
import { DOMAIN_TYPE, NFT_BID_TYPE } from 'constants/constants'
// import { GET_YOUR_NFT_ON_SALE } from 'services/apollo/queries'
import styled from 'styled-components'

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

const OnSale: NextPage = () => {
	const [tab, setTab] = useState<DOMAIN_TYPE>(DOMAIN_TYPE.TLD)
	const [bidType, setBidType] = useState<NFT_BID_TYPE>(NFT_BID_TYPE.auction)

	// const { account } = useActiveWeb3React()

	// const sale: number = useMemo(
	// 	() => (bidType === NFT_BID_TYPE.auction ? 1 : 2),
	// 	[bidType]
	// )

	// const { loading, error, data } = useQuery(GET_YOUR_NFT_ON_SALE, {
	// 	variables: { nft, account, sale },
	// 	pollInterval: 12000
	// })

	const handleChange = (
		_: SyntheticEvent<Element, Event>,
		value: DOMAIN_TYPE
	) => {
		setTab(value)
	}

	const handleChangeBidType = (
		_: SyntheticEvent<Element, Event>,
		value: NFT_BID_TYPE
	) => {
		setBidType(value)
	}

	// if (loading) return <div style={{ color: 'white' }}>Loading...</div>
	// if (error) return <div style={{ color: 'white' }}>Error fetch subgraphs</div>

	return (
		<div style={{ color: 'white' }}>
			<h1>On Sale</h1>
			<TabCustom value={tab} onChange={handleChange}>
				<Tab label={DOMAIN_TYPE.TLD} value={DOMAIN_TYPE.TLD} />
				<Tab label={DOMAIN_TYPE.Domain} value={DOMAIN_TYPE.Domain} />
			</TabCustom>
			<TabCustom value={bidType} onChange={handleChangeBidType}>
				<Tab label={NFT_BID_TYPE.auction} value={NFT_BID_TYPE.auction} />
				<Tab label={NFT_BID_TYPE.fixedPrice} value={NFT_BID_TYPE.fixedPrice} />
			</TabCustom>
			<div>
				{/* {data.nfts?.length
					? data.nfts?.map((nft: any, idx: number) => (
							<DomainItem key={idx} nft={nft} />
					  )) // eslint-disable-line no-mixed-spaces-and-tabs
					: 'No data'} */}
			</div>
		</div>
	)
}

export default OnSale
