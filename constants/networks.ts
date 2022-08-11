if (
	!process.env.NEXT_PUBLIC_NETWORK_NAME ||
	!process.env.NEXT_PUBLIC_NETWORK_CHAIN_ID ||
	!process.env.NEXT_PUBLIC_RPC_NODE_1
)
	throw new Error('Network is not configured')
if (
	!process.env.NEXT_PUBLIC_NATIVE_COIN_NAME ||
	!process.env.NEXT_PUBLIC_NATIVE_COIN_SYMBOL ||
	!process.env.NEXT_PUBLIC_NATIVE_COIN_DECIMALS
)
	throw new Error('Native coin is not configured')
if (!process.env.NEXT_PUBLIC_MULTICALL_ADDRESS)
	throw new Error('Multicall is not configured')
if (!process.env.NEXT_PUBLIC_FACTORY_ADDRESS)
	throw new Error('Factory is not configured')
if (!process.env.NEXT_PUBLIC_NFT_ADDRESS)
	throw new Error('NFT is not configured')
if (!process.env.NEXT_PUBLIC_SUBGRAPHS_URL)
	throw new Error('Subgraphs is not configured')

export interface Network {
	name: string
	chainId: number
	rpc: string[]
}

export const NETWORK_SUPPORTED: Network = {
	name: process.env.NEXT_PUBLIC_NETWORK_NAME,
	chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_CHAIN_ID),
	rpc: [process.env.NEXT_PUBLIC_RPC_NODE_1]
}

export const NATIVE_COIN = {
	name: process.env.NEXT_PUBLIC_NATIVE_COIN_NAME,
	symbol: process.env.NEXT_PUBLIC_NATIVE_COIN_SYMBOL,
	decimals: process.env.NEXT_PUBLIC_NATIVE_COIN_DECIMALS
}

export const MULTICALL_ADDRESS: string =
	process.env.NEXT_PUBLIC_MULTICALL_ADDRESS

export const FACTORY_ADDRESS: string = process.env.NEXT_PUBLIC_FACTORY_ADDRESS

export const NFT_ADDRESS: string = process.env.NEXT_PUBLIC_NFT_ADDRESS

export const SUBGRAPHS_URL: string = process.env.NEXT_PUBLIC_SUBGRAPHS_URL
