import { FC } from 'react'

import classNames from 'classnames'
import styled, { CSSProperties } from 'styled-components'

export const DescriptionContainer = styled.div`
	font-size: 18px;
	&.lg {
		font-size: 32px;
		line-height: 1.4;
	}
	&.sm {
		font-size: 16px;
		line-height: 1.7;
	}
	&.xs {
		font-size: 14px;
		line-height: 1.5;
	}
	&.xxs {
		font-size: 12px;
		line-height: 1.6;
	}
	@media screen and (max-width: 1700px) {
		font-size: 16px;
		&.lg {
			font-size: 27px;
		}
		&.sm {
			font-size: 14px;
		}
		&.xs {
			font-size: 13px;
		}
	}
	@media screen and (max-width: 1400px) {
		font-size: 14px;
		&.lg {
			font-size: 22px;
		}
	}
	@media screen and (max-width: 992px) {
		&.lg {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 768px) {
		&.lg {
			font-size: 16px;
		}
	}
`

const Description: FC<DescriptionProps> = ({
	size,
	className,
	...restProps
}) => {
	return (
		<DescriptionContainer
			className={classNames(className, size)}
			{...restProps}
		/>
	)
}

export interface DescriptionProps {
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
	className?: string
	style?: CSSProperties
}

export default Description
