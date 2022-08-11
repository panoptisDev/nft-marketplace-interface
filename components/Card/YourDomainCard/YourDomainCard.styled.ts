import { Button } from '@mui/material'
import { Description } from 'components'
import styled from 'styled-components'

export const YourDomainCardWrap = styled.div`
	height: 100px;
	position: relative;
	z-index: 2;
	padding: 36px 40px;
	border: 1px solid rgba(228, 228, 228, 0.8);
	box-sizing: border-box;
	border-radius: 15px;
	font-family: 'Poppins';
	font-style: normal;
	transition: all 0.2s linear;
	text-align: center;
	height: inherit;
	background-color: rgba(43, 45, 63, 0.7);
	@media screen and (max-width: 1700px) {
		padding: 32px 38px;
	}

	@media screen and (max-width: 1400px) {
		padding: 28px 32px;
	}

	@media screen and (max-width: 900px) {
		& > .yd-card-left {
			margin-right: 0;
		}
		justify-content: space-between;
		padding: 20px;
	}
	@media screen and (max-width: 500px) {
		padding: 20px;
	}
	& > .yd-card-left {
		margin-right: 20px;
	}
`

export const YourDomainCardName = styled(Description)`
	color: white;
	text-align: left;
	flex: 1;
	font-weight: 700;
	font-size: 32px;
	line-height: 48px;
	margin: 0;

	@media screen and (max-width: 1700px) {
		font-size: 28px;
	}
	@media screen and (max-width: 1400px) {
		font-size: 24px;
	}
	@media screen and (max-width: 900px) {
		font-size: 22px;
	}
`

export const OnSaleWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	& > .sale-title {
		padding-left: 10px;
		font-weight: 600;
		font-size: 18px;
		line-height: 30px;
	}
	@media screen and (max-width: 1700px) {
	}
	@media screen and (max-width: 1400px) {
	}
	@media screen and (max-width: 900px) {
		margin: 20px 0 0 0;
		justify-content: left;
		& > .sale-title {
			padding: 0 6px 0 0;
		}
	}
	@media screen and (max-width: 500px) {
		& > .sale-title {
			font-size: 16px;
		}
	}
`

export const ButtonSetting = styled(Button)`
	width: 48px;
	height: 48px;
	min-width: 48px;
	padding: 0;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme?.colors?.grey4};
	border: 1px solid ${({ theme }) => theme?.colors?.white};
	border-radius: 6px;
	& > .MuiButton-endIcon {
		margin: 0 !important;
		> *:nth-of-type(1) {
			font-size: 16px !important;
		}
	}
`
