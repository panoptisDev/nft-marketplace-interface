import { SvgIcon } from '@mui/material'
import styled from 'styled-components'
import { theme } from 'styles/theme'

export const MemberCardWrap = styled.div`
	z-index: 2;
	position: relative;
	margin: 1px;
	padding: 40px 0px;
	border-radius: 10px;

	text-align: center;

	font-family: Poppins;
	font-style: normal;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	height: 100%;

	&:before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 1px;
		right: 1px;
		bottom: 1px;
		left: 1px;
		border-radius: 10px;
		background-color: ${({ theme }) => theme?.colors?.darkGrey4};
	}

	&:after {
		content: '';
		position: absolute;
		z-index: -2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 10px;
		background-image: linear-gradient(136.74deg, #1470d6 1.01%, #cf1fbd 98.87%);
		transition: all 0.2s linear;

		opacity: 0;
		visibility: hidden;
	}

	&:hover {
		&:after {
			transition: all 0.2s linear;
			visibility: visible;
			opacity: 1;
		}
	}

	& > .member-name {
		margin: 20px auto 0;
		max-width: 80%;

		font-weight: 400;
		font-size: 24px;
		line-height: 32px;

		display: flex;
		align-items: center;
		justify-content: center;

		flex: 1;

		@media screen and (max-width: 1700px) {
			margin-top: 18px;

			font-size: 22px;
			line-height: 28px;
		}

		@media screen and (max-width: 1400px) {
			margin-top: 16px;

			font-size: 18px;
			line-height: 26px;
		}

		@media screen and (max-width: 900px) {
			margin-top: 14px;

			font-size: 16px;
			line-height: 24px;
		}
		@media screen and (max-width: 500px) {
			margin-top: 14px;

			font-size: 14px;
			line-height: 18px;
		}
		& > h3 {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-overflow: ellipse;
			overflow: hidden;
		}
	}

	& > .member-role {
		margin: 0 auto;
		margin-top: 8px;
		max-width: 80%;

		font-weight: normal;
		font-size: 14px;
		line-height: 22px;
		color: ${theme?.colors.gray4};

		& > h4 {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-overflow: ellipse;
			overflow: hidden;
		}

		@media screen and (max-width: 900px) {
			display: flex;
			align-items: center;
			justify-content: center;

			margin-top: 6px;
			font-size: 12px;
			line-height: 20px;
		}
	}
`

export const AvatarWrap = styled.div`
	position: relative;
	display: block;
	width: auto;
	height: 160px;
	text-align: center;
	flex-shrink: 0;

	@media screen and (max-width: 1700px) {
		height: 140px;
	}
	@media screen and (max-width: 1400px) {
		height: 120px;
	}
	@media screen and (max-width: 900px) {
		height: 110px;
	}
`

export const SocialWrap = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	@media screen and (max-width: 1700px) {
		margin-top: 18px;
	}
	@media screen and (max-width: 1400px) {
		margin-top: 16px;
	}
	@media screen and (max-width: 900px) {
		margin-top: 14px;
	}
	@media screen and (max-width: 500px) {
		margin-top: 14px;
	}
`
export const SocialLink = styled.div`
	display: inline-block;
	padding: 0 5px;
	height: 40px;
	@media screen and (max-width: 900px) {
		font-size: 18px;
		line-height: 30px;
		padding: 0 4px;
	}
`
export const IconWrap = styled.div`
	position: relative;
	display: inline-block;
	width: 30px;
	height: 30px;
`
export const SvgIconCustom = styled(SvgIcon)`
	text-align: center;
	width: 40px;
	height: 40px;
	& > path:first-child {
		fill: ${theme?.colors.darkGrey4};
	}
	&:hover {
		& > path:first-child {
			fill: white;
			stroke: ${theme?.colors.pink4};
			opacity: unset;
			transition: all 0.2s linear;
		}
		& > path:last-child {
			fill: ${theme?.colors.pink4};
			transition: all 0.2s linear;
		}
	}
`
