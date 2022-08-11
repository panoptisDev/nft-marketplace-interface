import styled from 'styled-components'

export const MainStyled = styled.main<{ marginTop?: string }>`
	margin-top: 100px;
	@media screen and (max-width: 991px) {
		margin-top: 85px;
	}
`
