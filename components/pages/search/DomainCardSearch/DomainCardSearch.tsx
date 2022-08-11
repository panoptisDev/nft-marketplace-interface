import { FC, SyntheticEvent, useState } from 'react'

import InfoIcon from '@mui/icons-material/Info'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Tab } from '@mui/material'
import { Status, Title } from 'components'
import BSCIcon from 'public/icons-page/BSC.svg'
import StellarIcon from 'public/icons-page/Stellar.svg'
import { theme } from 'styles/theme'

import {
	DomainCardSearchAddToCard,
	DomainCardSearchBody,
	DomainCardSearchBodyLeft,
	DomainCardSearchBodyRight,
	DomainCardSearchContainer,
	DomainCardSearchDescription,
	DomainCardSearchDivider,
	DomainCardSearchGoToCart,
	DomainCardSearchHeader,
	DomainCardSearchHeaderLeft,
	DomainCardSearchHeaderRight,
	DomainCardSearchItem,
	DomainCardSearchList,
	DomainCardSearchRightTitle,
	DomainCardSearchTab,
	DomainCardSearchTabLabel
} from './DomainCardSearch.styled'

const attributes = [
	{ label: 'TLD Price (0.00162 BNB)', value: '$5' },
	{ label: 'Asset Price', value: '$0.129550(0.5 XLM)' },
	{ label: 'Total Price', value: '$5.129550' }
]

const DomainCardSearch: FC<DomainCardSearchProps> = () => {
	const [tab, setTab] = useState<string>('stellar')

	const handleOnChange = (
		e: SyntheticEvent<Element, Event>,
		valueTab: string
	) => {
		setTab(valueTab)
	}
	return (
		<DomainCardSearchContainer>
			<DomainCardSearchHeader>
				<DomainCardSearchHeaderLeft spacing={2} direction="row">
					<Status label="Available" status="available" />
					<Title headingType="h4" size="md">
						.com
					</Title>
				</DomainCardSearchHeaderLeft>
				<DomainCardSearchHeaderRight spacing={2} direction="row">
					<DomainCardSearchGoToCart
						size="large"
						variant="outlined"
						startIcon={<ShoppingCartIcon />}>
						Go To Cart
					</DomainCardSearchGoToCart>
					<DomainCardSearchAddToCard size="large" variant="contained">
						Add To cart
					</DomainCardSearchAddToCard>
				</DomainCardSearchHeaderRight>
			</DomainCardSearchHeader>
			<DomainCardSearchDivider color={theme.colors.gray4} />
			<DomainCardSearchBody>
				<DomainCardSearchBodyLeft>
					<DomainCardSearchList>
						{attributes.map(({ label, value }, index) => (
							<DomainCardSearchItem key={index.toString()}>
								<span className="label">{label}</span>
								<strong className="value">{value}</strong>
							</DomainCardSearchItem>
						))}
					</DomainCardSearchList>
				</DomainCardSearchBodyLeft>
				<DomainCardSearchBodyRight>
					<DomainCardSearchRightTitle>Blockchain</DomainCardSearchRightTitle>
					<DomainCardSearchTab value={tab} onChange={handleOnChange}>
						<Tab
							label={
								<DomainCardSearchTabLabel>
									<StellarIcon viewBox="0 0 16 16" />
									Stellar
								</DomainCardSearchTabLabel>
							}
							value="stellar"
						/>
						<Tab
							label={
								<DomainCardSearchTabLabel>
									<BSCIcon viewBox="0 0 18 18" />
									BSC
								</DomainCardSearchTabLabel>
							}
							value="domain"
						/>
					</DomainCardSearchTab>
				</DomainCardSearchBodyRight>
			</DomainCardSearchBody>
			<DomainCardSearchDescription size="xs">
				<InfoIcon fontSize="inherit" />
				&nbsp;&nbsp;All Domain/TLD Purchases are offered at a one-time fee with
				no renewals.
			</DomainCardSearchDescription>
		</DomainCardSearchContainer>
	)
}

export interface DomainCardSearchProps {
	ex?: string
}

export default DomainCardSearch
