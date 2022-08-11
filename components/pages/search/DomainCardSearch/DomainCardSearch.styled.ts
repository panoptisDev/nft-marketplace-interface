import { Button, Divider, Stack, Tabs } from '@mui/material'
import Description from 'components/Description'
import styled from 'styled-components'
import { cssBorderGradientHover } from 'styles'

export const DomainCardSearchHeaderLeft = styled(Stack)`
	align-items: center;
`

export const DomainCardSearchGoToCart = styled(Button)`
	padding-rigth: 1.5rem;
	padding-left: 1.5rem;
	border-color: inherit;
	text-transform: unset;
	color: ${({ theme }) => theme?.colors?.white};
	font-weight: 400;
	&:hover {
		color: ${({ theme }) => theme?.colors?.blue4};
		border-color: inherit;
	}
`

export const DomainCardSearchAddToCard = styled(Button)`
	padding-rigth: 1.5rem;
	padding-left: 1.5rem;
	text-transform: unset;
	background-color: ${({ theme }) => theme?.colors?.pink4};
	border-color: ${({ theme }) => theme?.colors?.pink4};
	color: ${({ theme }) => theme?.colors?.white};
	font-weight: 400;
	&:hover {
		background-color: ${({ theme }) => theme?.colors?.blue4};
		border-color: ${({ theme }) => theme?.colors?.blue4};
	}
`

export const DomainCardSearchHeaderRight = styled(Stack)`
	@media screen and (max-width: 768px) {
		margin-top: 12px;
	}
`

export const DomainCardSearchHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`

export const DomainCardSearchDivider = styled(Divider)`
	margin-top: 20px;
	margin-bottom: 20px;
	@media screen and (max-width: 1700px) {
		margin-top: 16px;
		margin-bottom: 16px;
	}
	@media screen and (max-width: 1400px) {
		margin-top: 16px;
		margin-bottom: 16px;
	}
	@media screen and (max-width: 992px) {
		margin-top: 12px;
		margin-bottom: 12wpx;
	}
`

export const DomainCardSearchItem = styled.li`
	display: flex;
	align-items: center;
	padding: 6px 0;
	font-size: 16px;
	.label {
		flex: 1;
	}
	.value {
		display: inline-block;
		flex: 1;
		margin-left: 12px;
		font-weight: 700;
	}
	@media screen and (max-width: 1700px) {
		font-size: 14px;
		.value {
			margin-left: 10px;
		}
	}
	@media screen and (max-width: 1400px) {
		font-size: 13px;
		.value {
			margin-left: 8px;
		}
	}
`

export const DomainCardSearchList = styled.ul`
	list-style: none;
	padding: 0;
	margin: -6px 0;
`

export const DomainCardSearchBodyLeft = styled.div`
	width: 100%;
	max-width: 35%;
	@media screen and (max-width: 992px) {
		max-width: 100%;
	}
`

export const DomainCardSearchRightTitle = styled.p`
	margin-bottom: 12px;
	@media screen and (max-width: 1700px) {
		margin-bottom: 10px;
	}
`

export const DomainCardSearchTabLabel = styled.div`
	display: flex;
	align-items: center;
	svg {
		height: 16px;
		margin-right: 5px;
	}
`
export const DomainCardSearchTab = styled(Tabs)`
	position: relative;
	z-index: 0;
	.MuiTabs-scroller {
		border: 1px solid ${({ theme }) => theme?.colors?.gray4};
		border-radius: ${({ theme }) => theme?.borderRadiusBase};
		.MuiButtonBase-root {
			color: #fff;
			font-size: 14px;
			font-weight: 500;
			text-transform: inherit;
			padding: 12px 20px;
		}
		.MuiTabs-indicator {
			z-index: -1;
			height: 100%;
			background-color: ${({ theme }) => theme?.colors?.grey4};
			border-radius: ${({ theme }) => theme?.borderRadiusBase};
		}
	}
	@media screen and (max-width: 1700px) {
		min-height: auto;
		.MuiTabs-scroller {
			.MuiButtonBase-root {
				padding: 10px 16px;
				min-height: auto;
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

export const DomainCardSearchBodyRight = styled.div`
	@media screen and (max-width: 992px) {
		margin-top: 16px;
	}
`

export const DomainCardSearchBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

export const DomainCardSearchDescription = styled(Description)`
	display: inline-block;
	margin-top: 30px;
	padding: 10px 20px;
	background-color: ${({ theme }) => theme?.colors.grey4};
	border-radius: ${({ theme }) => theme?.borderRadiusBase};
	.MuiSvgIcon-root {
		font-size: 14px;
		top: 3px;
		position: relative;
	}
	@media screen and (max-width: 1700px) {
		margin-top: 25px;
		padding: 8px 16px;
	}
	@media screen and (max-width: 1400px) {
		margin-top: 20px;
		padding: 6px 12px;
	}
	@media screen and (max-width: 992px) {
		margin-top: 15px;
		padding: 5px 10px;
	}
`

export const DomainCardSearchContainer = styled.div`
	padding: 35px 40px 30px;
	border-radius: 15px;
	${cssBorderGradientHover}
	@media screen and (max-width: 1700px) {
		padding: 30px 33px 25px;
	}
	@media screen and (max-width: 1400px) {
		padding: 25px 27px 22px;
	}
	@media screen and (max-width: 992px) {
		padding: 22px 25px 20px;
	}
`
