import styled from 'styled-components'

export const StyledHeaderHamburger = styled.div`
	display: none;
`

export const StyledHeaderButtonContainer = styled.div`
	width: 158px;
`

export const StyledHeaderMenuContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
`

export const StyledHeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export const StyledHeader = styled.header`
	position: fixed;
	z-index: 999;
	top: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid ${({ theme }) => theme?.colors?.grey4 || ''};
	background-color: ${({ theme }) => theme?.colors?.darkPurple4 || ''};
	a {
		color: #fff;
		text-decoration: none;
		transition: 0.25s ease all;
		&:hover {
			color: ${({ theme }) => theme?.colors?.pink7 || ''};
		}
	}

	@media screen and (max-width: 991px) {
		height: 85px;
		${StyledHeaderMenuContainer} {
			display: none;
		}
		${StyledHeaderButtonContainer} {
			.header--account {
				display: none;
			}
		}
		${StyledHeaderHamburger} {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: flex-end;
		}
	}
`
