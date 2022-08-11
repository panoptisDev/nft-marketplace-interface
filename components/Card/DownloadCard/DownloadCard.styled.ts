import { Description } from 'components'
import styled from 'styled-components'
import { cssBorderGradientHover } from 'styles'

export const DownloadCardName = styled(Description)`
	font-weight: 600;
	margin-top: 20px;
	color: white;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 1700px) {
		margin-top: 18px;
	}
	@media screen and (max-width: 1400px) {
		margin-top: 16px;
	}
	@media screen and (max-width: 992px) {
		margin-top: 20px;
	}
`

export const DownloadCardButton = styled.button<{ isActive: boolean }>`
	max-width: 280px;
	width: 100%;
	padding: 16px 14px;
	margin: 0 auto;
	margin-top: 40px;
	border-radius: ${({ theme }) => theme?.borderRadiusBase};
	box-shadow: 0px 15px 30px 0px #0c04144d;
	background-color: ${({ theme }) => theme?.colors?.darkPurple4};
	${({ isActive, theme }) =>
		isActive && `background-color: ${theme?.colors?.blue4};`}
	${({ isActive }) => isActive && `cursor: pointer;`}
	font-weight: 500;
	text-transform: inherit;
	color: ${({ theme }) => theme?.colors?.white};
	border: none;
	transition: all 0.2s linear;

	${({ isActive, theme }) =>
		isActive && `&:hover {background-color: ${theme?.colors?.pink4};}`}

	& > div {
		text-align: center;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		text-overflow: ellipse;
		overflow: hidden;
	}

	@media screen and (max-width: 1700px) {
		max-width: 230px;
		padding: 16px 14px;
		margin-top: 33px;
	}
	@media screen and (max-width: 1400px) {
		margin-top: 27px;
		padding: 16px 14px;
	}
	@media screen and (max-width: 992px) {
		margin-top: 30px;
	}
	@media screen and (max-width: 500px) {
		padding: 16px 6px;
		& > div {
			font-size: 14px;
		}
	}
`

export const AvatarWrap = styled.div`
	position: relative;
	display: block;
	width: auto;
	height: 120px;
	text-align: center;
	flex-shrink: 0;
	@media screen and (max-width: 1700px) {
		height: 110px;
	}
	@media screen and (max-width: 1400px) {
		height: 100px;
	}
	@media screen and (max-width: 900px) {
		height: 110px;
	}
	@media screen and (max-width: 500px) {
		height: 100px;
	}
`

export const DownloadCardWrap = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 2;
	padding: 34px 45px;
	border-radius: 10px;
	transition: all 0.2s linear;
	text-align: center;
	font-family: Poppins;
	font-style: normal;
	height: inherit;
	${cssBorderGradientHover}
	@media screen and (max-width: 1700px) {
		padding: 28px 40px;
	}
	@media screen and (max-width: 1400px) {
		padding: 24px 36px;
	}
	@media screen and (max-width: 992px) {
		padding: 30px 34px;
	}
	@media screen and (max-width: 500px) {
		padding: 30px 15px;
	}
`
