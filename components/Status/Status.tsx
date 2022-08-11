import { FC } from 'react'

import classNames from 'classnames'

import { StatusContainer } from './Status.styled'

const Status: FC<StatusProps> = ({ status, label, className, ...props }) => {
	return (
		<StatusContainer className={classNames(status, className)} {...props}>
			{label}
		</StatusContainer>
	)
}

export interface StatusProps {
	label?: string
	status?: 'available' | 'unavailable'
	className?: string
}

export default Status
