import { FC } from 'react'

import { Button, ButtonProps } from '@mui/material'
import styled, { css } from 'styled-components'

const styleButtonGradient = css`
	position: relative;
	z-index: 0;
	overflow: hidden;
	padding: 12px 24px;
	border: none;
	background-color: transparent;
	border-radius: ${(props) => props.theme?.borderRadiusBase};
	color: #fff;
	cursor: pointer;
	font-weight: 500;
	line-height: 1.5;
	text-transform: unset;
	&:before {
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		width: 200%;
		height: 200%;
		background-image: linear-gradient(310deg, #268d94 25%, #417b52 100%);
		content: '';
		transform: translate(-50%, -50%);
		transition: 0.25s all linear;
	}
	&:hover {
		&:before {
			top: 100%;
			left: 100%;
			transform: translate(-100%, -100%);
			transition: 0.25s all linear;
		}
	}
`

const ButtonStyled = styled(Button)`
	${styleButtonGradient}
`

const ButtonGradient: FC<ButtonProps> = ({ ...props }) => {
	return <ButtonStyled {...props} />
}

export default ButtonGradient
