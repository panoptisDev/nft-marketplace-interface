import { FC } from 'react'

import { IconButton, IconButtonProps } from '@mui/material'
import cn from 'classnames'
import styled from 'styled-components'

const StyledHeaderHamburger = styled.div`
	position: relative;
	display: block;
	width: 24px;
	height: 16px;
	> span {
		position: absolute;
		left: 50%;
		display: block;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transform: translate(-50%, -50%);
		transition: 0.2s linear all;
		&:nth-child(1) {
			top: 0;
		}
		&:nth-child(2) {
			top: 50%;
		}
		&:nth-child(3) {
			top: 100%;
		}
	}
	&.isClose {
		> span {
			top: 50%;
			transition: 0.2s linear all;
			&:nth-child(1) {
				transform: translate(-50%, -50%) rotate(45deg);
			}
			&:nth-child(2) {
				opacity: 0;
			}
			&:nth-child(3) {
				transform: translate(-50%, -50%) rotate(-45deg);
			}
		}
	}
`

const StyledButton = styled(IconButton)<IconButtonProps>`
	color: #fff;
`

export interface HeaderHamburgerProps extends IconButtonProps {
	isClose?: boolean
}

const HeaderHamburger: FC<HeaderHamburgerProps> = ({ isClose, ...rest }) => {
	return (
		<StyledButton {...rest} size="medium">
			<StyledHeaderHamburger className={cn(rest.className, { isClose })}>
				<span></span>
				<span></span>
				<span></span>
			</StyledHeaderHamburger>
		</StyledButton>
	)
}

export default HeaderHamburger
