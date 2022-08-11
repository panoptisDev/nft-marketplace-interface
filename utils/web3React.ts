import { InjectedConnector } from '@web3-react/injected-connector'

import { StaticJsonRpcProvider } from '@ethersproject/providers'
import sample from 'lodash/sample'

import { NATIVE_COIN, NETWORK_SUPPORTED } from '../constants/networks'

declare const window: any
const chainId: number = parseInt(NETWORK_SUPPORTED.chainId.toString(), 10)
const rpcNode: string | undefined = sample(NETWORK_SUPPORTED.rpc)
if (!rpcNode) throw Error('One RPC node is not configured')

export const injected: InjectedConnector = new InjectedConnector({
	supportedChainIds: [chainId]
})

export const connectorByNames: {
	[name: string]: InjectedConnector
} = {
	injected
}

export const simpleRpcProvider: StaticJsonRpcProvider =
	new StaticJsonRpcProvider(rpcNode)

export const setupDefaultNetwork = async () => {
	const provider = window.ethereum
	if (provider) {
		const _chainId = `0x${chainId.toString(16)}`
		try {
			await provider.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: _chainId }]
			})
		} catch (switchError: any) {
			// This error code indicates that the chain has not been added to MetaMask.
			if (switchError.code === 4902) {
				try {
					await provider.request({
						method: 'wallet_addEthereumChain',
						params: [
							{
								chainId: _chainId,
								chainName: NETWORK_SUPPORTED.name,
								nativeCurrency: {
									name: NATIVE_COIN.name,
									symbol: NATIVE_COIN.symbol,
									decimals: NATIVE_COIN.decimals
								},
								rpcUrls: [rpcNode]
							}
						]
					})
				} catch (error) {
					console.error('Failed to setup the network in Metamask:', error)
					return false
				}
			}
		}
	} else {
		console.error(
			"Can't setup the network on metamask because window.ethereum is undefined"
		)
		return false
	}
}
