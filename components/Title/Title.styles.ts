import styled, { css } from 'styled-components'

export const titleCss = css`
	font-size: 54px;
	font-weight: 700;
	line-height: 1.4;
	&.md {
		font-size: 40px;
	}
	&.sm {
		font-size: 32px;
	}
	&.xs {
		font-size: 24px;
	}
	&.xxs {
		font-size: 16px;
	}
	@media screen and (max-width: 1700px) {
		font-size: 45px;
		&.md {
			font-size: 33px;
		}
		&.sm {
			font-size: 27px;
		}
		&.xs {
			font-size: 20px;
		}
		&.xxs {
			font-size: 15px;
		}
	}
	@media screen and (max-width: 1400px) {
		font-size: 38px;
		&.md {
			font-size: 27px;
		}
		&.sm {
			font-size: 22.5px;
		}
		&.xs {
			font-size: 17px;
		}
		&.xxs {
			font-size: 14px;
		}
	}
	@media screen and (max-width: 992px) {
		font-size: 32px;
		&.md {
			font-size: 23px;
		}
		&.sm {
			font-size: 19px;
		}
		&.xs {
			font-size: 15px;
		}
	}
	@media screen and (max-width: 768px) {
		font-size: 26px;
		&.md {
			font-size: 20px;
		}
		&.sm {
			font-size: 17px;
		}
	}
`

export const TitleH1 = styled.h1`
	${titleCss}
`
export const TitleH2 = styled.h2`
	${titleCss}
`
export const TitleH3 = styled.h3`
	${titleCss}
`
export const TitleH4 = styled.h4`
	${titleCss}
`
export const TitleH5 = styled.h5`
	${titleCss}
`
export const TitleH6 = styled.h6`
	${titleCss}
`
