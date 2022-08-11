import styled from 'styled-components'

export const StatusContainer = styled.div`
	display: inline-block;
	padding: 4px 12px;
	border-radius: ${({ theme }) => theme?.borderRadiusBase};
	font-size: 0.8em;
	font-weight: 500;
	&.available {
		background-color: ${({ theme }) => theme?.colors?.jade4 || '#2ACB87'};
		color: ${({ theme }) => theme?.colors?.white || '#fff'};
	}
`
