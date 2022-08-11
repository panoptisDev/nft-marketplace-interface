import styled from 'styled-components'
import { StyledLogo } from 'styles'

export const FooterStyled = styled.footer`
	background-color: ${(props) => props.theme?.colors?.darkPurple4};
	color: ${(props) => props.theme?.colors?.gray4};
	text-align: center;
	a {
		color: inherit;
		transition: 0.25s all ease;
		&:hover {
			color: ${(props) => props.theme?.colors?.gray5};
		}
	}
	.footer-logo {
		display: flex;
		justify-content: center;
		padding-top: 30px;
		padding-bottom: 15px;
		${StyledLogo} {
			img {
				object-position: center;
			}
		}
	}
	.footer-term {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.divider {
		border-color: ${(props) => props.theme?.colors?.gray4};
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.footer-version {
		padding-bottom: 30px;
	}
`
