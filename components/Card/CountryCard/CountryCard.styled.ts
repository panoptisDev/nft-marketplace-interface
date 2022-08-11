import styled from 'styled-components'

export const CountryItemContainer = styled.div`
	z-index: 2;

	display: flex;
	flex-direction: column;
	height: 100%;

	position: relative;
	padding: 30px 20px;
	border-radius: 10px;

	text-align: center;
	cursor: pointer;

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

	@media screen and (max-width: 992px) {
		padding: 40px 20px;
	}
`

export const FlagContainer = styled.div`
	position: relative;
	display: block;
	width: 100%;
	height: 130px;

	flex-shrink: 0;

	text-align: center;

	@media screen and (max-width: 1700px) {
		height: 120px;
	}

	@media screen and (max-width: 1400px) {
		height: 110px;
	}

	@media screen and (max-width: 900px) {
		height: 120px;
	}

	@media screen and (max-width: 500px) {
		height: 90px;
	}
`
export const CountryName = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 12px;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	flex: 1;

	@media screen and (max-width: 1700px) {
		font-size: 20px;
		line-height: 26px;
	}

	@media screen and (max-width: 1400px) {
		font-size: 18px;
		line-height: 24px;
	}

	@media screen and (max-width: 900px) {
		font-size: 16px;
		line-height: 22px;
	}

	@media screen and (max-width: 500px) {
		margin-top: 14px;

		font-size: 14px;
		line-height: 20px;
	}
`
