import { FC } from 'react'

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
			{domain && <DomainCardName>{domain.nftUri}</DomainCardName>}
			{domain.highestBidder && (
				<div>
					<DomainCardName>
						Highest bid {formatEther(domain.hightestBid)} {NATIVE_COIN.symbol}
					</DomainCardName>
					<DomainCardName>
						Oldest
						{`${domain.highestBidder.slice(
							0,
							4
						)}...${domain.highestBidder.slice(
							domain.highestBidder.length - 4,
							domain.highestBidder.length
						)}`}
					</DomainCardName>
				</div>
			)}
			{buttonProps && (
				<DomainCardButton variant="contained" fullWidth {...buttonProps} />
			)}
		</DomainCardContainer>
	)
}

export default DomainCard
