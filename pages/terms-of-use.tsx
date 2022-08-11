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
				title="Terms & Conditions"
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
								<Tab label="Terms and Conditions" value="1" />
								<Tab label="Cookies" value="2" />
								<Tab label="License" value="3" />
								<Tab label="Hyperlinking to our Content" value="4" />
								<Tab label="iFrames" value="5" />
								<Tab label="Content Liability" value="6" />
								<Tab label="Your Privacy" value="7" />
								<Tab label="Reservation of Rights" value="8" />
								<Tab label="Removal of links from our website" value="9" />
								<Tab label="Disclaimer" value="10" />
							</TabNavigator>
						</TabNavigatorContainer>
						<TabContentContainer ref={flag}>
							<TabPanel value={tab} index="1">
								<TabTitle size="sm">Terms and Conditions</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="2">
								<TabTitle size="sm">Cookies</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="3">
								<TabTitle size="sm">License</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="4">
								<TabTitle size="sm">Hyperlinking to our Content</TabTitle>
								<TabDescription size="xs">
									The following organizations may link to our Website without
									prior written approval:
								</TabDescription>
								<TabList>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">Government agencies;</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">Search engines;</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">News organizations;</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											Online directory distributors may link to our Website in
											the same manner as they hyperlink to the Websites of other
											listed businesses; and
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											System wide Accredited Businesses except soliciting
											non-profit organizations, charity shopping malls, and
											charity fundraising groups which may not hyperlink to our
											Web site.
										</span>
									</TabItem>
								</TabList>
								<TabDescription
									size="xs"
									style={{ color: '#fff', marginTop: 16 }}>
									These organizations may link to our home page, to publications
									or to other Website information so long as the link: (a) is
									not in any way deceptive; (b) does not falsely imply
									sponsorship, endorsement or approval of the linking party and
									its products and/or services; and (c) fits within the context
									of the linking party’s site.
								</TabDescription>
								<TabDescription size="xs" style={{ marginTop: 20 }}>
									We may consider and approve other link requests from the
									following types of organizations:
								</TabDescription>
								<TabList>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											commonly-known consumer and/or business information
											sources;
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">dot.com community sites;</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											associations or other groups representing charities;
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											online directory distributors;
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">internet portals;</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											accounting, law and consulting firms;
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											educational institutions and trade associations.
										</span>
									</TabItem>
								</TabList>
								<TabDescription
									size="xs"
									style={{ color: '#fff', marginTop: 20 }}>
									<p>
										We will approve link requests from these organizations if we
										decide that: (a) the link would not make us look unfavorably
										to ourselves or to our accredited businesses; (b) the
										organization does not have any negative records with us; (c)
										the benefit to us from the visibility of the hyperlink
										compensates the absence of MOBIGLOTECH BLOCKCHAIN, INC.; and
										(d) the link is in the context of general resource
										information.
									</p>
									<br />
									<p>
										These organizations may link to our home page so long as the
										link: (a) is not in any way deceptive; (b) does not falsely
										imply sponsorship, endorsement or approval of the linking
										party and its products or services; and (c) fits within the
										context of the linking party’s site.
									</p>
									<br />
									<p>
										If you are one of the organizations listed in paragraph 2
										above and are interested in linking to our website, you must
										inform us by sending an e-mail to MOBIGLOTECH BLOCKCHAIN,
										INC.. Please include your name, your organization name,
										contact information as well as the URL of your site, a list
										of any URLs from which you intend to link to our Website,
										and a list of the URLs on our site to which you would like
										to link. Wait 2-3 weeks for a response.
									</p>
								</TabDescription>
								<TabDescription size="xs" style={{ marginTop: 20 }}>
									Approved organizations may hyperlink to our Website as
									follows:
								</TabDescription>
								<TabList>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											By use of our corporate name; or
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											By use of the uniform resource locator being linked to; or
										</span>
									</TabItem>
									<TabItem>
										<LoginIcon viewBox="0 0 16 16" />
										<span className="content">
											By use of any other description of our Website being
											linked to that makes sense within the context and format
											of content on the linking party’s site.
										</span>
									</TabItem>
								</TabList>
							</TabPanel>
							<TabPanel value={tab} index="5">
								<TabTitle size="sm">iFrames</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="6">
								<TabTitle size="sm">Content Liability</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="7">
								<TabTitle size="sm">Your Privacy</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="8">
								<TabTitle size="sm">Reservation of Rights</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="9">
								<TabTitle size="sm">Removal of links from our website</TabTitle>
							</TabPanel>
							<TabPanel value={tab} index="10">
								<TabTitle size="sm">Disclaimer</TabTitle>
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
			title: 'Terms of use',
			description: 'This is a description for search'
		}
	}
}

export default Search
