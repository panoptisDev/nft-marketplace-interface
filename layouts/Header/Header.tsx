import { FC, useEffect, useState } from 'react'

import Link from 'next/link'

import { Container } from '@mui/material'
import { StyledLogo } from 'styles'

import {
	StyledHeader,
	StyledHeaderButtonContainer,
	StyledHeaderHamburger,
	StyledHeaderMenuContainer,
	StyledHeaderWrapper
} from './Header.styled'
import HeaderAccount from './HeaderAccount'
import HeaderHamburger from './HeaderHamburger'
import HeaderMenu from './HeaderMenu'
import HeaderMobile from './HeaderMobile'

const Header: FC = () => {
	const [openMobile, setOpenMobile] = useState(false)

	useEffect(() => {
		const resize = function () {
			if (window.innerWidth >= 992) {
				setOpenMobile(false)
			}
		}

		window.addEventListener('resize', resize)
		return () => {
			window.removeEventListener('resize', resize)
		}
	}, [])

	return (
		<>
			<StyledHeader className="header">
				<Container>
					<StyledHeaderWrapper>
						<Link href="/" passHref>
							<StyledLogo>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/logo.svg" alt="" />
							</StyledLogo>
						</Link>
						<StyledHeaderMenuContainer>
							<HeaderMenu />
						</StyledHeaderMenuContainer>
						<StyledHeaderButtonContainer>
							<HeaderAccount />
							<StyledHeaderHamburger>
								<HeaderHamburger
									isClose={openMobile}
									onClick={() => setOpenMobile(!openMobile)}
								/>
							</StyledHeaderHamburger>
						</StyledHeaderButtonContainer>
					</StyledHeaderWrapper>
				</Container>
			</StyledHeader>
			<HeaderMobile open={openMobile} />
		</>
	)
}

export default Header
