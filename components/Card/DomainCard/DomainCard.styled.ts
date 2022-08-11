import { Button } from '@mui/material'
import styled from 'styled-components'
import { cssBorderGradientHover } from 'styles'

import Description from '../../Description'

export const DomainCardName = styled(Description)`
	font-weight: 600;
`

export const DomainCardButton = styled(Button)`
	max-width: 280px;
	padding: 11px 24px;
	margin-top: 40px;
	border-radius: ${({ theme }) => theme?.borderRadiusBase};
	box-shadow: 0px 15px 30px 0px #0c04144d;
	background: linear-gradient(310deg, #268d94 25%, #417b52 100%);
	font-weight: 500;
	text-transform: inherit;
	media screen and (max-width: 1700px) {
		max-width: 230px;
		padding: 10px 24px;
		margin-top: 33px;
	}
	@media screen and (max-width: 1400px) {
		max-width: 190px;
		margin-top: 27px;
	}
	@media screen and (max-width: 992px) {
		margin-top: 40px;
	}
`

export const DomainCardContainer = styled.div`
	position: relative;
	z-index: 0;
	padding: 16px;
	text-align: center;
	${cssBorderGradientHover}
`
