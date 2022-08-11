import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

export const formatAddress = (account: string) => {
	const length = account.length
	return length > 12
		? `${account.slice(0, 7)}...${account.slice(length - 5, length)}`
		: account
}

export const removeNumericKey = (object: { [key: string]: any }) => {
	const obj = { ...object }
	for (const key in obj) {
		if (!Number.isNaN(+key)) {
			delete obj[key]
		}
	}
	return obj
}

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
	try {
		return getAddress(value)
	} catch {
		return false
	}
}

// account is not optional
export function getSigner(
	library: Web3Provider,
	account: string
): JsonRpcSigner {
	return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(
	library: Web3Provider,
	account?: string
): Web3Provider | JsonRpcSigner {
	return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(
	address: string,
	ABI: any,
	library: Web3Provider,
	account?: string
): Contract {
	if (!isAddress(address) || address === AddressZero) {
		throw Error(`Invalid 'address' parameter '${address}'.`)
	}

	return new Contract(address, ABI, getProviderOrSigner(library, account))
}

export const getTimeRemaining = (timestamp: number) => {
	const total = timestamp * 1000 - new Date().getTime()
	const seconds = Math.floor((total / 1000) % 60)
	const minutes = Math.floor((total / 1000 / 60) % 60)
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
	const days = Math.floor(total / (1000 * 60 * 60 * 24))

	return {
		total,
		days,
		hours,
		minutes,
		seconds
	}
}
