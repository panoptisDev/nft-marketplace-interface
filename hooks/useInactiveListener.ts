import { useEffect } from 'react'

import { injected } from '../utils/web3React'
import { useActiveWeb3React } from './useActiveWeb3React'
import { useWallet } from './useWallet'

declare let window: any

export function useInactiveListener(suppress: boolean) {
	const { active, error } = useActiveWeb3React()
	const { connect } = useWallet()

	useEffect(() => {
		const { ethereum } = window
		if (ethereum && ethereum.on && !active && !error && !suppress) {
			const handleConnect = () => {
				console.log("Handling 'connect' event")
				connect(injected)
			}
			const handleChainChanged = (chainId: number) => {
				console.log("Handling 'chainChanged' event with payload", chainId)
				connect(injected)
			}
			const handleAccountsChanged = (accounts: string) => {
				console.log("Handling 'accountsChanged' event with payload", accounts)
				if (accounts.length > 0) {
					connect(injected)
				}
			}
			// const handleNetworkChanged = (networkId) => {
			//   console.log("Handling 'networkChanged' event with payload", networkId)
			//   connect(injected)
			// }

			ethereum.on('connect', handleConnect)
			ethereum.on('chainChanged', handleChainChanged)
			ethereum.on('accountsChanged', handleAccountsChanged)
			// ethereum.on('networkChanged', handleNetworkChanged)

			return () => {
				if (ethereum.removeListener) {
					ethereum.removeListener('connect', handleConnect)
					ethereum.removeListener('chainChanged', handleChainChanged)
					ethereum.removeListener('accountsChanged', handleAccountsChanged)
					// ethereum.removeListener('networkChanged', handleNetworkChanged)
				}
			}
		}
	}, [active, error, suppress, connect])
}
