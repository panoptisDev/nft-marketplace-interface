import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'

import AuctionABI from '../abis/Auction.json'
import FactoryABI from '../abis/Factory.json'
import IERC721 from '../abis/IERC721.json'
import MulticallABI from '../abis/Multicall2.json'
import {
	FACTORY_ADDRESS,
	MULTICALL_ADDRESS,
	NFT_ADDRESS
} from '../constants/networks'
import { getContract } from '../utils'

export async function callContract(
	contract: Contract,
	method: string,
	args: any[],
	overrides: { [key: string]: any } = {}
) {
	try {
		const tx = await contract[method](...args, {
			...overrides
		})
		if (typeof tx.wait !== 'function') return tx
		const res = await tx.wait()
		return res
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function callStaticContract(
	contract: Contract,
	method: string,
	args: any[],
	overrides = {}
) {
	try {
		// console.log(contract, method, args);
		const staticTx = await contract.callStatic[method](...args, {
			...overrides
		})
		// console.log(staticTx);
		if (typeof staticTx.wait !== 'function') return staticTx
		const res = await staticTx.wait()
		console.log(res)
		return res
	} catch (error) {
		console.error(error)
		throw error
	}
}

export function getMulticallContract(library: Web3Provider, account?: string) {
	return getContract(MULTICALL_ADDRESS, MulticallABI, library, account)
}

export function getNFTContract(library: Web3Provider, account?: string) {
	return getContract(NFT_ADDRESS, IERC721, library, account)
}

export function getFactoryContract(library: Web3Provider, account?: string) {
	return getContract(FACTORY_ADDRESS, FactoryABI, library, account)
}

export function getAuctionContract(
	auction: string,
	library: Web3Provider,
	account?: string
) {
	return getContract(auction, AuctionABI, library, account)
}

export function getFixedPriceContract(
	fixed: string,
	library: Web3Provider,
	account?: string
) {
	return getContract(fixed, AuctionABI, library, account)
}
