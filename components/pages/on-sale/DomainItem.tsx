import { FC } from 'react'

interface DomainItemProps {
	nft: any
}

const DomainItem: FC<DomainItemProps> = ({ nft }) => {
	return (
		<div>
			<div>{nft.nftUri}</div>
			<button>settings</button>
			<hr />
		</div>
	)
}

export default DomainItem
