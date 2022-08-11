import { MouseEventHandler } from 'react'

import { ButtonProps } from '@mui/material'

import DomainCard from './DomainCard'

export interface DomainCardProps {
	onClickContainer?: MouseEventHandler<HTMLDivElement>
	domain?: any
	buttonProps?: Omit<ButtonProps, 'variant' | 'fullWidth'>
}

export { DomainCard }
