import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import { Popover, PopoverProps } from '@mui/material'
import cn from 'classnames'
import styled from 'styled-components'

const DropdownButton = styled.span`
	display: inline-block;
`

const DropdownOverlay = styled.div``

const StyledDropdown = styled.div``

export interface DropdownProps extends Omit<PopoverProps, 'open' | 'onClose'> {
	overlay: ReactNode
	visible?: boolean
	onVisibleChange?: (visible: boolean) => void
	classOverlay?: string
}

const Dropdown: FC<DropdownProps> = ({
	visible: visibleProps,
	onVisibleChange,
	overlay,
	classOverlay,
	children,
	...restProps
}) => {
	const ref = useRef(null)
	const [visible, setVisible] = useState(Boolean(visibleProps))

	const handleVisible = () => {
		const newVisible = !visible
		setVisible(newVisible)
		onVisibleChange && onVisibleChange(newVisible)
	}

	useEffect(() => {
		if (visible) {
			document.getElementsByTagName('body')[0].classList.add('Dropdown--active')
		} else {
			document
				.getElementsByTagName('body')[0]
				.classList.remove('Dropdown--active')
		}
	}, [visible])

	return (
		<StyledDropdown>
			<DropdownButton ref={ref} onClick={() => handleVisible()} color="#fff">
				{children}
			</DropdownButton>
			<Popover
				open={visible}
				onClose={handleVisible}
				anchorEl={ref.current}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				disableRestoreFocus
				{...restProps}>
				<DropdownOverlay
					onClick={handleVisible}
					className={cn('dropdown--overlay', classOverlay)}>
					{overlay}
				</DropdownOverlay>
			</Popover>
		</StyledDropdown>
	)
}

export { Dropdown }
