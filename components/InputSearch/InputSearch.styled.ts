import { Button } from '@mui/material'
import styled from 'styled-components'

export const InputSearchButton = styled(Button)`
	font-size: inherit;
	line-height: inherit;
	min-width: 130px;
	@media screen and (max-width: 1700px) {
		min-width: 110px;
	}
	@media screen and (max-width: 1400px) {
		min-width: 100px;
	}
	@media screen and (max-width: 1200px) {
		min-width: 90px;
	}
`

export const InputSearchField = styled.input`
	flex: 1;
	outline: none !important;
	color: inherit;
	border: none;
	background-color: transparent;
	font-size: inherit;
	font-weight: inherit;
	line-height: inherit;
`

export const InputSearchContainer = styled.div`
	width: 100%;
	display: flex;
	background-color: ${({ theme }) => theme?.colors?.grey4};
	border: 1px solid ${({ theme }) => theme?.colors?.gray4};
	border-radius: 5px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.5;
	&.lg {
		padding: 8px 20px;
	}
	&.md {
		padding: 6px 16px;
	}
	&.sm {
		padding: 4px 12px;
	}
	@media screen and (max-width: 1700px) {
		&.lg {
			padding: 7px 15px;
		}
		&.md {
			padding: 4px 14px;
		}
		&.sm {
			padding: 2px 10px;
		}
	}
`
