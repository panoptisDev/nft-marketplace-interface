import {
	DOMAttributes,
	ForwardRefRenderFunction,
	LegacyRef,
	forwardRef,
	useImperativeHandle,
	useRef
} from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { ButtonProps } from '@mui/material'
import { SizeMapping } from 'constants/constants'

import {
	InputSearchButton,
	InputSearchContainer,
	InputSearchField
} from './InputSearch.styled'

const InputSearch: ForwardRefRenderFunction<
	InputSearchRef,
	InputSearchProps
> = ({ size, className, inputProps, buttonProps, ...restProps }, ref) => {
	const inputRef = useRef<HTMLInputElement>(null)
	useImperativeHandle(ref, () => ({ ...inputRef }))

	return (
		<InputSearchContainer
			className={`input-search ${className} ${size}`}
			{...restProps}>
			<InputSearchField
				ref={inputRef}
				{...inputProps}
				className={`input-search-input ${inputProps?.className}`}
			/>
			<InputSearchButton
				variant="contained"
				size={SizeMapping[size || 'md'].valueOf() as ButtonProps['size']}
				{...buttonProps}
				className={`input-search-button ${buttonProps?.className}`}>
				{buttonProps?.children || <SearchIcon />}
			</InputSearchButton>
		</InputSearchContainer>
	)
}

export type InputSearchRef = LegacyRef<HTMLInputElement>

export interface InputSearchProps extends DOMAttributes<HTMLInputElement> {
	size?: 'sm' | 'md' | 'lg'
	className?: string
	inputProps?: { className?: string }
	buttonProps?: Omit<ButtonProps, 'variant'>
}

export default forwardRef(InputSearch)
