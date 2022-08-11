import { NextPage } from 'next'

import { useQuery } from '@apollo/client'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { GET_AUCTIONS_BIDED } from 'services/apollo/queries'

const YourAuctions: NextPage = () => {
	const { account } = useActiveWeb3React()

	const { loading, error, data } = useQuery(GET_AUCTIONS_BIDED, {
		variables: { account },
		pollInterval: 12000
	})

	if (loading) return <div style={{ color: 'white' }}>Loading...</div>
	if (error) return <div style={{ color: 'white' }}>Error fetch subgraphs</div>

	return (
		<div style={{ color: 'white' }}>
			<div>Your Auctions</div>
			<div>
				{data.userBids.length ? (
					data.userBids.map((bid: any, idx: number) => (
						<div key={idx}>
							<div>{bid.auction.nftUri}</div>
							<div>Highest bid {bid.auction.hightestBid}</div>
							<div>Highest bider {bid.auction.highestBidder}</div>
							<div>End: {bid.auction.end}</div>
							{!bid.claimed && <button>Claim</button>}
						</div>
					))
				) : (
					<div>No auctions bided</div>
				)}
			</div>
		</div>
	)
}
export default YourAuctions
