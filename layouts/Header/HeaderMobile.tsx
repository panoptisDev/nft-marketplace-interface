import { FC } from 'react'

import Link from 'next/link'

import { Container, Divider } from '@mui/material'
import cn from 'classnames'
import styled from 'styled-components'

import HeaderAccount from './HeaderAccount'
import HeaderMenu from './HeaderMenu'

const StyledHeaderMobileFooterMenu = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin: -5px -12px;
	> li {
		padding: 5px 12px;
		a {
			color: ${({ theme }) => theme?.colors?.gray4 || ''};
			text-decoration: none;
			transition: 0.25s linear all;
			&:hover {
				color: ${({ theme }) => theme?.colors?.pink5 || ''};
			}
		}
	}
`

const StyledHeaderMobileFooter = styled.div`
	color: #fff;
	padding-top: 30px;
	padding-bottom: 40px;
`

const StyledHeaderMobileDivider = styled(Divider)`
	border-color: ${({ theme }) => theme?.colors?.grey4 || ''};
`

const StyledHeaderMobileBody = styled.div`
	flex: 1;
	color: #fff;
	overflow: auto;
`

const StyledHeaderMobileHeader = styled.div`
	color: #fff;
	padding-top: 24px;
	padding-bottom: 24px;
`

const StyledHeaderMobile = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme?.colors?.darkPurple4 || ''};
	position: fixed;
	z-index: 3;
	top: 85px;
	right: 0;
	bottom: 100%;
	left: 0;
	overflow: hidden;
	pointer-events: none;
	transition: 0.25s ease-in all;
	&.open {
		bottom: 0;
		pointer-events: auto;
		transition: 0.25s ease-out all;
	}
`

export interface HeaderMobileProps {
	open?: boolean
}

const HeaderMobile: FC<HeaderMobileProps> = ({ open }) => {
	if (typeof document !== 'undefined') {
		if (open) {
			document.body.classList.add('no--scroll')
		} else {
			document.body.classList.remove('no--scroll')
		}
	}

	return (
		<StyledHeaderMobile className={cn({ open })}>
			<StyledHeaderMobileHeader>
				<Container>
					<HeaderAccount />
				</Container>
			</StyledHeaderMobileHeader>
			<StyledHeaderMobileBody>
				<Container>
					<HeaderMenu className="menu--mobile" />
				</Container>
			</StyledHeaderMobileBody>
			<Container>
				<StyledHeaderMobileDivider />
			</Container>
			<StyledHeaderMobileFooter>
				<Container>
					<StyledHeaderMobileFooterMenu>
						<li>
							<Link href="/terms-of-use">
								<a>Terms of Use</a>
							</Link>
						</li>
						<li>
							<Link href="/privacy-policy">
								<a>Privacy Policy</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Github</a>
							</Link>
						</li>
					</StyledHeaderMobileFooterMenu>
				</Container>
			</StyledHeaderMobileFooter>
		</StyledHeaderMobile>
	)
}

export default HeaderMobile
