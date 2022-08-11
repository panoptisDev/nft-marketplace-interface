import { FC } from 'react'

import Image from 'next/image'

import { formatEther } from '@ethersproject/units'
import { NATIVE_COIN } from 'constants/networks'

import { DomainCardProps } from '.'
import {
	DomainCardButton,
	DomainCardContainer,
	DomainCardName
} from './DomainCard.styled'

const DomainCard: FC<DomainCardProps> = ({
	domain,
	onClickContainer,
	buttonProps,
	...restProps
}) => {
	return (
		<DomainCardContainer onClick={onClickContainer} {...restProps}>
			{domain && (
				<>
					<Image src={domain.nftURI} alt="nft" height={400} width={400} />
					<DomainCardName>ID: {domain.nftId}</DomainCardName>
					{domain.end && (
						<div>
							<DomainCardName>
								Highest bid {formatEther(domain.hightestBid)}{' '}
								{NATIVE_COIN.symbol}
							</DomainCardName>
							<DomainCardName>
								Bidder {''}
								{`${domain.highestBidder.slice(
									0,
									6
								)}...${domain.highestBidder.slice(
									domain.highestBidder.length - 5,
									domain.highestBidder.length
								)}`}
							</DomainCardName>
						</div>
					)}
				</>
			)}

			{buttonProps && (
				<DomainCardButton variant="contained" fullWidth {...buttonProps} />
			)}
		</DomainCardContainer>
	)
}

export default DomainCard
