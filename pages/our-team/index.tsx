import type { NextPage } from 'next'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Button, Container, Grid } from '@mui/material'
import { Description, TopPage } from 'components'
import { MemberCard } from 'components/Card/MemberCard'
import LinkedinSvg from 'public/icons-page/Linkedin.svg'
import TwitterSvg from 'public/icons-page/Twitter.svg'
import styled from 'styled-components'
import { BgMatrix, Section } from 'styles'

const data = [
	{
		name: 'Ann Herwitz',
		avatarSrc: '/images/members/member-1.png',
		role: 'Strategic Advisor',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Tatiana Dias',
		avatarSrc: '/images/members/member-2.png',
		role: 'Head of Financial',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Jakob Dias',
		avatarSrc: '/images/members/member-3.png',
		role: 'Strategic Advisor',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Haylie Saris',
		avatarSrc: '/images/members/member-4.png',
		role: 'Founder & CEO',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Makenna Bator',
		avatarSrc: '/images/members/member-5.png',
		role: 'Blockchain Partner',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Paityn Kenter',
		avatarSrc: '/images/members/member-6.png',
		role: 'Operation Manager',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Kierra Geidt',
		avatarSrc: '/images/members/member-7.png',
		role: 'Project Head',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Aspen Stanton',
		avatarSrc: '/images/members/member-8.png',
		role: 'CISO',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	},
	{
		name: 'Ann Donin',
		avatarSrc: '/images/members/member-9.png',
		role: 'Head of R & D',
		socials: [
			{ component: LinkedinSvg, href: 'https://www.linkedin.com/' },
			{ component: TwitterSvg, href: 'https://twitter.com/' }
		]
	}
]

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
const DescriptionCustom = styled(Description)`
	@media screen and (max-width: 1500px) {
		width: 60%;
		margin: 0 auto;
	}
	@media screen and (max-width: 700px) {
		width: 74%;
		margin: 0 auto;
	}
`

const ButtonMore = styled(Button)`
	padding: 14px 24px;
	border: 1px solid ${({ theme }) => theme?.colors?.white};
	background-color: ${({ theme }) => theme?.colors?.darkPurple4};
	line-height: 1.4;
	text-transform: capitalize;
	&:hover {
		background: linear-gradient(310deg, #268d94 25%, #417b52 100%);
	}
	@media screen and (max-width: 1700px) {
		padding: 12px 24px;
	}
	&.MuiButton-endIcon {
		> *:nth-of-type(1) {
			font-size: 16px !important;
		}
	}
`
const ButtonMoreWrap = styled.div`
	margin-top: 40px;
	text-align: center;
`

const Ourteam: NextPage = () => {
	return (
		<>
			<TopPageCustom
				title="Our Team"
				size="md"
				bgSrc={{
					desktop: '/images/whitepaper-banner-1.png',
					mobile: '/images/whitepaper-banner-2.png'
				}}
				bgGradient>
				<DescriptionCustom size="md">
					Get to know the team of enthusiasts who are working hard and
					passionately behind this project
				</DescriptionCustom>
			</TopPageCustom>
			<BgMatrix>
				<Section className="whitepaper-info">
					<Container>
						<Grid container spacing={{ xs: 2, md: 3 }}>
							{data.map((item, index) => (
								<Grid key={index} item xs={6} md={4}>
									<MemberCard member={item} />
								</Grid>
							))}
						</Grid>
						<ButtonMoreWrap>
							<ButtonMore
								variant="contained"
								size="medium"
								endIcon={<KeyboardArrowDownIcon />}>
								Load more
							</ButtonMore>
						</ButtonMoreWrap>
					</Container>
				</Section>
			</BgMatrix>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Ourteam page',
			description: 'This is a description for Ourteam page'
		}
	}
}

export default Ourteam
