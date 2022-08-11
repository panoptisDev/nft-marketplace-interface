import { Title } from 'components'
import styled from 'styled-components'
import { BgGradient } from 'styles'

export const TopPageTitle = styled(Title)`
	margin-bottom: 16px;
`

export const TopPageContent = styled.div``

export const TopPageInner = styled.div`
	text-align: center;
`

export const TopPageWrapper = styled.div`
	flex: 1;
`

export const TopPageBlurInner = styled.div``

export const TopPageBlur = styled.div<{
	top?: string
	left?: string
	width?: string
	height?: string
	filter?: string
	bgSrc?: string
	bgColor?: string
	paddingTop?: string
	borderRadius?: string
}>`
	position: absolute;
	z-index: -1;
	border-radius: 50%;
	opacity: 0.9;
	transform: translate(-50%, -50%);
	transition: 0.2s linear all;
	${({ top }) => top && `top: ${top};`};
	${({ left }) => left && `left: ${left};`};
	${({ width }) => width && `width: ${width};`};
	&:before {
		display: block;
		width: 100%;
		padding-top: ${({ paddingTop }) => paddingTop || '100%'};
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
		content: '';
		${({ bgSrc }) => bgSrc && `background-image: url(${bgSrc});`}
		${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
		${({ borderRadius }) =>
			borderRadius && `border-radius: ${borderRadius || '50%'};`}
		${({ filter }) => filter && `filter: blur(${filter});`}
	}
`

export const TopPagebackdropImage = styled.img`
	position: absolute;
	z-index: -3;
	min-width: 100%;
	max-width: 100%;
	min-height: 100%;
	max-height: 100%;
	object-fit: cover;
	object-position: center;
	&.mobile {
		display: none;
	}
	@media screen and (max-width: 768px) {
		&.desktop {
			display: none;
		}
		&.mobile {
			display: block;
		}
	}
`

export const TopPageBackdrop = styled.div`
	position: absolute;
	z-index: -2;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
	background-color: ${(props) => props.theme?.colors?.darkPurple4};
	pointer-events: none;
	${BgGradient} {
		height: 100%;
	}
`

export const TopPageContainer = styled.section`
	position: relative;
	z-index: 0;
	display: flex;
	min-height: 420px;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 40px;
	color: ${(props) => props.theme?.colors?.white};
	&.lg {
		min-height: calc(100vh - 100px);
	}
	&.md {
		min-height: 420px;
	}
	&.sm {
		min-height: 200px;
		${TopPageTitle} {
			font-size: 40px;
			line-height: 1.45;
		}
	}
	@media screen and (max-width: 1699px) {
		min-height: 350px;
		&.lg {
		}
		&.md {
			min-height: 350px;
		}
		&.sm {
			min-height: 166px;
			${TopPageTitle} {
				font-size: 33px;
			}
		}
	}
	@media screen and (max-width: 1399px) {
		min-height: 290px;
		&.md {
			min-height: 290px;
		}
		&.sm {
			min-height: 140px;
			${TopPageTitle} {
				font-size: 27px;
			}
		}
	}
	@media screen and (max-width: 991px) {
		min-height: 240px;
		&.lg {
			min-height: calc(100vh - 85px);
		}
		&.md {
			min-height: 240px;
		}
		&.sm {
			min-height: 110px;
		}
	}
`
