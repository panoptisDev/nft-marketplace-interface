import type { NextPage } from 'next'

import { Container, Grid } from '@mui/material'
import { Description, TopPage } from 'components'
import { CountryCard } from 'components/Card/CountryCard'
import styled from 'styled-components'
import { BgMatrix, Section } from 'styles'

const data = [
	{ countryName: 'English (Orginal)', srcFlag: '/flags/uk.svg' },
	{ countryName: 'Français', srcFlag: '/flags/france.svg' },
	{ countryName: 'Chinese', srcFlag: '/flags/china.svg' },
	{ countryName: 'Japanese', srcFlag: '/flags/japan.svg' },
	{ countryName: 'Italiano', srcFlag: '/flags/italy.svg' },
	{ countryName: 'Tiếng Việt', srcFlag: '/flags/vietnam.svg' }
]

export const CountryDescription = styled.h1`
	position: relative;
	z-index: 9;
	max-width: 90%;
	margin: 0 auto;
	margin-bottom: 30px;

	font-family: Poppins;
	font-size: 22px;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 32px;
	text-align: center;

	@media screen and (max-width: 1700px) {
		max-width: 80%;
		font-size: 20px;
		line-height: 26px;
	}

	@media screen and (max-width: 1400px) {
		max-width: 80%;
		font-size: 18px;
		line-height: 24px;
	}

	@media screen and (max-width: 900px) {
		max-width: 90%;
		font-size: 16px;
		line-height: 22px;
	}

	@media screen and (max-width: 500px) {
		max-width: 100%;
		font-size: 14px;
		line-height: 20px;
		margin-bottom: 20px;
	}
`

const TopPageCustom = styled(TopPage)`
	@media screen and (min-width: 992px) {
		img {
			object-position: left !important;
		}
	}
	@media screen and (max-width: 992px) {
		min-height: 420px !important;
		img {
			object-position: top !important;
		}
	}
`

const Whitepaper: NextPage = () => {
	return (
		<>
			<TopPageCustom
				title="Huta"
				size="md"
				bgSrc={{
					desktop: '/images/whitepaper-banner-1.png',
					mobile: '/images/whitepaper-banner-2.png'
				}}
				bgGradient>
				<Description size="lg">The future of internet</Description>
			</TopPageCustom>
			<BgMatrix>
				<Section className="whitepaper-info">
					<Container>
						<CountryDescription>
							Huta’s whitepaper is recommended reading for anyone studying how
							Huta works. Choose which translation of the paper you want to
							read:
						</CountryDescription>
						<Grid container spacing={2}>
							{data.map((item, index) => (
								<Grid key={index} item xs={6} md={4}>
									<CountryCard
										srcFlag={item.srcFlag}
										countryName={item.countryName}
									/>
								</Grid>
							))}
						</Grid>
					</Container>
				</Section>
			</BgMatrix>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Whitepaper page',
			description: 'This is a description for Whitepaper page'
		}
	}
}

export default Whitepaper
