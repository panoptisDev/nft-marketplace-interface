import { KeyboardEvent, SyntheticEvent, useState } from 'react'

import type { NextPage } from 'next'

import InfoIcon from '@mui/icons-material/Info'
import { Container, Grid, Tab, Tabs } from '@mui/material'
import { Description, InputSearch, TopPage } from 'components'
import { DomainCardSearch } from 'components/pages/search/DomainCardSearch'
import styled from 'styled-components'
import { Section } from 'styles'

const TabCustom = styled(Tabs)`
	position: relative;
	z-index: 1;
	.MuiTabs-scroller {
		border: 1px solid ${({ theme }) => theme?.colors?.grey4};
		background-color: ${({ theme }) => theme?.colors?.darkPurple4};
		border-radius: ${({ theme }) => theme?.borderRadiusBase};
		.MuiButtonBase-root {
			position: relative;
			z-index: 2;
			color: #fff;
			font-size: 14px;
			font-weight: 500;
			text-transform: inherit;
		}
		.MuiTabs-indicator {
			z-index: 1;
			height: 100%;
			background-color: ${({ theme }) => theme?.colors?.pink4};
			border-radius: ${({ theme }) => theme?.borderRadiusBase};
		}
	}
	@media screen and (max-width: 1700px) {
		min-height: auto;
		.MuiTabs-scroller {
			.MuiButtonBase-root {
				min-height: auto;
				padding: 10px;
			}
		}
	}
	@media screen and (max-width: 1400px) {
		.MuiTabs-scroller {
			.MuiButtonBase-root {
				min-width: 50px;
			}
		}
	}
`

const TabContainer = styled.div`
	display: flex;
	justify-content: center;
`

const TopPageCustom = styled(TopPage)`
	.title {
		margin-bottom: 40px;
	}

	@media screen and (max-width: 1700px) {
		.title {
			margin-bottom: 33px;
		}
	}
	@media screen and (max-width: 1400px) {
		.title {
			margin-bottom: 26px;
		}
	}
	@media screen and (max-width: 992px) {
		.title {
			margin-bottom: 20px;
		}
	}
`

const DescriptionTop = styled(Description)`
	margin-bottom: 20px;
	color: ${({ theme }) => theme?.colors?.gray7};
	font-weight: 500;
	text-align: center;
	@media screen and (max-width: 1700px) {
		margin-bottom: 16px;
	}
	@media screen and (max-width: 1400px) {
		margin-bottom: 14px;
	}
`

const DescriptionBottom = styled(Description)`
	margin-top: 20px;
	margin-bottom: 40px;
	color: ${({ theme }) => theme?.colors?.gray7};
	font-weight: 500;
	text-align: center;
	.MuiSvgIcon-root {
		position: relative;
		top: 3px;
		font-size: 14px;
	}
	@media screen and (max-width: 1700px) {
		margin-top: 16px;
		margin-bottom: 33px;
	}
	@media screen and (max-width: 1400px) {
		margin-top: 12px;
		margin-bottom: 27px;
	}
	@media screen and (max-width: 992px) {
		margin-bottom: 25px;
	}
`

const Search: NextPage = () => {
	const [tab, setTab] = useState<string>('tld')

	const handleChange = (
		event: SyntheticEvent<Element, Event>,
		value: string
	) => {
		setTab(value)
	}

	const handleKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
		//it triggers by pressing the enter key
		if (e.key === 'Enter') {
			// handleSubmit();
		}
	}

	return (
		<>
			<TopPageCustom
				title="Get your domains &amp; TLDs to be  in the new  world of the internet."
				titleProps={{ size: 'md', className: 'title' }}
				size="md">
				<TabContainer>
					<TabCustom value={tab} onChange={handleChange}>
						<Tab label="TLD" value="tld" />
						<Tab label="Domain" value="domain" />
					</TabCustom>
				</TabContainer>
			</TopPageCustom>
			<Section>
				<Container>
					<Grid container columns={12} justifyContent="center">
						<Grid item lg={7} md={9} sm={10} xs={12}>
							<DescriptionTop size="xxs">
								Purchase your very own Top Domain at an unmatched starting price
								of $1.
							</DescriptionTop>
							<InputSearch
								size="lg"
								onKeyPress={handleKeypress}
								buttonProps={{ children: 'Search' }}
							/>
							<DescriptionBottom size="xxs">
								<InfoIcon fontSize="inherit" />
								&nbsp;&nbsp;A TLD name can only have alphabets.
							</DescriptionBottom>
						</Grid>
					</Grid>
					<Grid container columns={12} spacing={2}>
						<Grid item xs={12}>
							<DomainCardSearch />
						</Grid>
						<Grid item xs={12}>
							<DomainCardSearch />
						</Grid>
					</Grid>
				</Container>
			</Section>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Search',
			description: 'This is a description for search'
		}
	}
}

export default Search
