import { FC } from 'react'

import Link from 'next/link'

import { Container, Divider } from '@mui/material'
import { StyledLogo, TermContainer } from 'styles'

import { FooterStyled } from './Footer.styled'

const Footer: FC = () => {
	return (
		<FooterStyled>
			<Container>
				<div className="footer-logo">
					<div className="logo-container">
						<Link href="/" passHref>
							<StyledLogo>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/logo.svg" alt="Huta Web Logo" className="image" />
							</StyledLogo>
						</Link>
					</div>
				</div>
				<div className="footer-term">
					<TermContainer>
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
					</TermContainer>
				</div>
				<Divider className="divider" />
				<div className="footer-version">
					<p className="footer-description">© 2022 Huta</p>
				</div>
			</Container>
		</FooterStyled>
	)
}

export default Footer
