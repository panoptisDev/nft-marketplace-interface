import { SyntheticEvent, useRef, useState } from 'react'

import type { NextPage } from 'next'

import ReadMoreIcon from '@mui/icons-material/ReadMore'
import { Container, IconButton, Tab, Tabs } from '@mui/material'
import classNames from 'classnames'
import { Description, TabPanel, Title, TopPage } from 'components'
import LoginIcon from 'public/icons/LogIn.svg'
import styled from 'styled-components'
import { BgGradient, Section } from 'styles'

const TopPageCustom = styled(TopPage)`
	.title {
		margin-bottom: 0;
	}
`

const TabNavigatorTitle = styled(Title)`
	margin-bottom: 20px;
	font-weight: 600;
	@media screen and (max-width: 1700px) {
		margin-bottom: 16px;
	}
	@media screen and (max-width: 1400px) {
		margin-bottom: 12px;
	}
`

const TabNavigator = styled(Tabs)`
	.MuiButtonBase-root {
		display: block;
		min-height: unset;
		flex-direction: unset;
		padding: 10px;
		border-left: 2px solid #fff;
		color: ${({ theme }) => theme?.colors?.white};
		font-family: 'Poppins', san-serifs;
		font-size: 14px;
		text-align: left;
		text-transform: unset;
		&.Mui-selected {
			color: ${({ theme }) => theme?.colors?.pink4};
		}
	}
	.MuiTabs-indicator {
		left: 0;
		background-color: ${({ theme }) => theme?.colors?.pink4};
	}
	@media screen and (max-width: 1700px) {
		.MuiButtonBase-root {
			padding: 8px;
			font-size: 13px;
		}
	}
	@media screen and (max-width: 768px) {
		flex: 1;
		.MuiTabScrollButton-root {
			text-align: center;
		}
	}
`

const TabNavigatorButtonMore = styled.div`
	position: absolute;
	top: 0;
	left: 100%;
	opacity: 0;
	pointer-events: none;
	.btn-more {
		border: 1px solid;
		background-image: linear-gradient(136.74deg, #1470d6 1.01%, #cf1fbd 98.87%);
		border-radius: 0;
		color: ${({ theme }) => theme?.colors?.white};
	}
	@media screen and (max-width: 768px) {
		opacity: 1;
		pointer-events: auto;
	}
`

const TabNavigatorContainer = styled.div`
	position: sticky;
	top: 100px;
	width: 100%;
	max-width: 270px;
	padding: 20px 10px 30px;
	background-color: ${({ theme }) => theme?.colors?.darkGrey4};
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 1;
		left: 0;
		display: flex;
		height: calc(100vh - 100px);
		flex-direction: column;
		padding: 20px 10px 10px;
		transform: translateX(-100%);
		transition: 0.25s all linear;
		&.show {
			transform: translateX(0%);
			transition: 0.25s all linear;
		}
	}
`

const TabTitle = styled(Title)`
	margin-bottom: 20px;
	@media screen and (max-width: 1700px) {
		margin-bottom: 15px;
	}
	@media screen and (max-width: 1400px) {
		margin-bottom: 12px;
	}
`

const TabDescription = styled(Description)`
	color: ${({ theme }) => theme?.colors?.gray4};
`

const TabItem = styled.li`
	display: flex;
	padding-top: 8px;
	padding-bottom: 8px;
	font-size: 14px;
	svg {
		position: relative;
		top: 3px;
		width: 16px;
		height: 16px;
		margin-right: 12px;
	}
	.content {
		display: block;
		flex: 1;
	}
	@media screen and (max-width: 1700px) {
		padding-top: 6px;
		padding-bottom: 6px;
		font-size: 13px;
	}
	@media screen and (max-width: 1400px) {
		padding-top: 5px;
		padding-bottom: 5px;
		font-size: 12px;
	}
`

const TabList = styled.ul`
	padding: 0;
	margin: 0;
	margin-top: 20px;
	list-style: none;
`

const TabContentContainer = styled.div`
	flex: 1;
	margin-left: 30px;
	@media screen and (max-width: 768px) {
		margin-left: 25px;
	}
`

const TabContainer = styled.div`
	display: flex;
	align-items: flex-start;
`

const Search: NextPage = () => {
	const flag = useRef<HTMLDivElement>(null)
	const [tab, setTab] = useState<string>('1')
	const [isMore, setIsMore] = useState<boolean>(false)

	const handleChange = (e: SyntheticEvent<Element, Event>, _tab: string) => {
		setTab(_tab)
		flag.current &&
			flag.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center'
			})
	}

	const handleOnReadMore = () => setIsMore(!isMore)

	return (
		<>
			<TopPageCustom
				size="sm"
				title="Privacy Policy"
				titleProps={{ className: 'title' }}
				bgGradient={<BgGradient />}
			/>
			<Section>
				<Container>
					<TabContainer>
						<TabNavigatorContainer className={classNames(isMore && 'show')}>
							<TabNavigatorButtonMore>
								<IconButton
									size="small"
									className="btn-more"
									onClick={handleOnReadMore}>
									<ReadMoreIcon color="inherit" />
								</IconButton>
							</TabNavigatorButtonMore>
							<TabNavigatorTitle size="xxs">Table of content</TabNavigatorTitle>
							<TabNavigator
								value={tab}
								onChange={handleChange}
								orientation="vertical"
								variant="scrollable"
								scrollButtons="auto">
								<Tab
									label="Privacy Policy for Mobiglotech Blockchain, INC."
									value="1"
								/>
								<Tab label="Consent" value="2" />
								<Tab label="Information we collect" value="3" />
								<Tab label="How we use your information" value="4" />
								<Tab label="Cookies and Web Beacons" value="5" />
								<Tab label="Log Files" value="6" />
								<Tab label="Advertising Partners Privacy Policies" value="7" />
								<Tab label="Third Party Privacy Policies" value="8" />
								<Tab
									label="CCPA Privacy Rights (Do Not Sell My Personal Information)"
									value="9"
								/>
								<Tab label="GDPR Data Protection Rights" value="10" />
								<Tab label="Children's Information" value="11" />
							</TabNavigator>
						</TabNavigatorContainer>
						<TabContentContainer ref={flag}>
							<TabPanel value={tab} index="1">
								<TabTitle size="sm">
									Privacy Policy for Mobiglotech Blockchain, INC.
								</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="2">
								<TabTitle size="sm">Consent</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="3">
								<TabTitle size="sm">Information we collect</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="4">
								<TabTitle size="sm">How we use your information</TabTitle>
								<TabDescription size="xs">
									We use the information we collect in various ways, including
									to:
								</TabDescription>
								<TabList>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											Provide, operate, and maintain our website
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											Improve, personalize, and expand our website
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											Understand and analyze how you use our website
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											Develop new products, services, features, and
											functionality
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											Communicate with you, either directly or through one of
											our partners, including for customer service, to provide
											you with updates and other information relating to the
											website, and for marketing and promotional purposes
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											Send you emails
											<br />
											Find and prevent fraud
										</span>
									</TabItem>
								</TabList>
							</TabPanel>
							<TabPanel value={tab} index="5">
								<TabTitle size="sm">Cookies and Web Beacons</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="6">
								<TabTitle size="sm">Log Files</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="7">
								<TabTitle size="sm">
									Advertising Partners Privacy Policies
								</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="8">
								<TabTitle size="sm">Third Party Privacy Policies</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="9">
								<TabTitle size="sm">
									CCPA Privacy Rights (Do Not Sell My Personal Information)
								</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="10">
								<TabTitle size="sm">GDPR Data Protection Rights</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="11">
								<TabTitle size="sm">Children&apos;s Information</TabTitle>
							</TabPanel>
						</TabContentContainer>
					</TabContainer>
				</Container>
			</Section>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Privacy Policy',
			description: 'This is a description for search'
		}
	}
}

export default Search
