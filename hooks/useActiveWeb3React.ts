import { useWeb3React } from '@web3-react/core'
import { useEffect, useRef, useState } from 'react'

import { simpleRpcProvider } from '../utils/web3React'

export const useActiveWeb3React = () => {
	const { library, ...rest } = useWeb3React()

	const refEth = useRef(library)
	const [provider, setProvider] = useState(library || simpleRpcProvider)

	useEffect(() => {
		if (library !== refEth.current) {
			setProvider(library || simpleRpcProvider)
			refEth.current = library
		}
	}, [library])

	return {
		library: provider,
		...rest
	}
}
