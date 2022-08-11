import { FC } from 'react'

const TabPanel: FC<TabPanelProps> = ({
	value,
	index,
	children,
	...restProps
}) => {
	return (
		<div role="tabpanel" hidden={value !== index} {...restProps}>
			{value === index && children}
		</div>
	)
}

export interface TabPanelProps {
	index?: string | number
	value?: string | number
}

export default TabPanel
