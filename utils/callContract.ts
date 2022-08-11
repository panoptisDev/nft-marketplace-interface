import { BigNumber } from '@ethersproject/bignumber'
// import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers/lib/web3-provider'
import { parseEther } from '@ethersproject/units'
import { DOMAIN_TYPE, NFT_METHODS } from 'constants/constants'
import { FACTORY_ADDRESS } from 'constants/networks'

import {
	callContract,
	getFactoryContract,
	getNFTContract
} from '../hooks/useContract'

// export const createDomainOrTLD = async (
// 	library: Web3Provider,
// 	account: string,
// 	nftType: DOMAIN_TYPE,
// 	nftURI: string
// ) => {
// 	if (!nftURI) return
// 	let contract: Contract
// 	let nonce: BigNumber
// 	if (nftType === DOMAIN_TYPE.TLD) {
// 		contract = getTLDDomainContract(library, account)
// 		nonce = await callContract(contract, NFT_METHODS.nonces, [account])
// 	} else {
// 		contract = getDomainContract(library, account)
// 		nonce = await callContract(contract, NFT_METHODS.nonces, [account])
// 	}
// 	const { verifierSignature } = await domainValidation(
// 		nftType,
// 		nftURI,
// 		account,
// 		nonce.toString()
// 	)
// 	return callContract(contract, NFT_METHODS.mint, [
// 		nftURI,
// 		verifierSignature
// 	])
// }

export const getOwnerDomains = async (
	library: Web3Provider,
	account: string
): Promise<
	{
		id: BigNumber
		tokenURI: any
	}[]
> => {
	const nftContract = getNFTContract(library)
	const balanceOf = await callContract(nftContract, NFT_METHODS.balanceOf, [
		account
	])
	const ids: BigNumber[] = await Promise.all(
		new Array(+balanceOf.toString())
			.fill('')
			.map((_, idx) =>
				callContract(nftContract, NFT_METHODS.tokenOfOwnerByIndex, [
					account,
					idx
				])
			)
	)
	const nfts = await Promise.all(
		ids.map(async (id) => {
			const tokenURI = await callContract(nftContract, NFT_METHODS.tokenURI, [
				id
			])
			return { id, tokenURI }
		})
	)
	return nfts
}

export const createFixedPrice = async (
	library: Web3Provider,
	account: string,
	nftId: BigNumber,
	price: string
) => {
	let nftContract = getNFTContract(library, account)
	await callContract(nftContract, NFT_METHODS.approve, [FACTORY_ADDRESS, nftId])
	const factoryContract = getFactoryContract(library, account)
	return callContract(factoryContract, 'createFixedPrice', [
		nftId,
		parseEther(price.toString())
	])
}

export const createAuction = async (
	library: Web3Provider,
	account: string,
	nftId: BigNumber,
	startPrice: string,
	minBidIncrement: string,
	duration: string // days
) => {
	let nftContract = getNFTContract(library, account)
	await callContract(nftContract, NFT_METHODS.approve, [FACTORY_ADDRESS, nftId])
	const factoryContract = getFactoryContract(library, account)
	return callContract(factoryContract, 'createAuction', [
		nftId,
		parseEther(startPrice),
		parseEther(minBidIncrement),
		+duration * 24 * 60 * 60
	])
}

// export const placeBid = async (
// 	library: Web3Provider,
// 	account: string,
// 	auction: string,
// 	price: string
// ) => {
// 	const auctionContract = getAuctionContract(auction, library, account)
// 	console.log(parseEther(price).toString())
// 	return callContract(auctionContract, 'placeBid', [], {
// 		value: parseEther(price)
// 	})
// }
