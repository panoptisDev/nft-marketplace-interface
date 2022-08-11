import { gql } from '@apollo/client'

export const GET_NFT_ON_SALE = gql`
	query GetNFTOnSale($nft: String!) {
		auctions(first: 50, skip: 0) {
			id
			nft
			nftId
			nftUri
			start
			end
			hightestBid
			highestBidder
		}
		fixedPrices(first: 50, skip: 0) {
			id
			nft
			nftId
			nftUri
			start
			hightestBid
			highestBidder
		}
	}
`

export const GET_YOUR_NFT_ON_SALE = gql`
	query GetYourNFTOnSale($nft: String!, $account: String!, $sale: Int!) {
		nfts(where: { id_contains: $nft, ownerSale: $account, sale: $sale }) {
			id
			nftUri
			owner
			ownerSale
			sale
		}
	}
`

export const GET_AUCTIONS_BIDED = gql`
	query GetAuctionBided($account: String!) {
		userBids(where: { user: $account }) {
			id
			user
			auction {
				id
				nftId
				nftUri
				start
				end
				hightestBid
				highestBidder
			}
			claimed
		}
	}
`

// $orderBy: String!
// $orderDir: String!
// $timestamp: String!

const ServiceGraph = {
	GET_NFT_ON_SALE,
	GET_YOUR_NFT_ON_SALE
}

export default ServiceGraph
