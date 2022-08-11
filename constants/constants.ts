export const SizeMapping = {
	lg: 'large',
	md: 'medium',
	sm: 'small'
}

export enum DOMAIN_TYPE {
	TLD = 'TLD',
	Domain = 'Domain'
}

export enum NFT_BID_TYPE {
	auction = 'Auction',
	fixedPrice = 'Fixed Price'
}

export const NFT_METHODS: { [key: string]: string } = {
	mint: 'mint',
	balanceOf: 'balanceOf',
	tokenOfOwnerByIndex: 'tokenOfOwnerByIndex',
	tokenURI: 'tokenURI',
	approve: 'approve'
}
