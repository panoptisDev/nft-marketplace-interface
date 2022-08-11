import { FC, useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import {
	Button,
	ButtonProps,
	Menu,
	MenuItem,
	MenuItemProps,
	MenuProps,
	SvgIcon
} from '@mui/material'
import { ButtonGradient } from 'components'
import { useScrollbarSize } from 'hooks'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useEagerConnect } from 'hooks/useEagerConnect'
import { useInactiveListener } from 'hooks/useInactiveListener'
import { useWallet } from 'hooks/useWallet'
import ChevronDownSvg from 'public/icons/ChevronDown.svg'
import EmptyWalletSvg from 'public/icons/EmptyWallet.svg'
import styled, { createGlobalStyle } from 'styled-components'
import { injected } from 'utils/web3React'

const StyledHeaderButtonGradient = styled(ButtonGradient)<ButtonProps>``

const StyledHeaderButton = styled(Button)<ButtonProps>`
	padding: 0;
	color: #fff;
	* {
		pointer-events: none;
	}
	svg {
		fill: none;
	}
	.account--avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border: 1px solid #fff;
		border-radius: 50%;
		background-color: ${({ theme }) => theme?.colors?.blue4 || ''};
	}
`

const StyledHeaderMenuItem = styled(MenuItem)<MenuItemProps>`
	padding: 0;
	color: #fff;
	.menu--item {
		display: block;
		color: inherit;
		text-decoration: none;
		padding: 10px 20px;
	}
`

const StyledHeaderMenu = styled(Menu)<MenuProps>`
	&.menu--root {
		.menu--paper {
			width: 100%;
			max-width: 170px;
			margin-top: 10px;
			background-color: ${({ theme }) => theme?.colors?.darkGrey4 || ''};
			.menu--list {
				padding: 10px 0;
			}
		}
	}
`

const HeaderPublicAddress: FC<{ public_address?: string }> = ({
	public_address
}) => {
	return (
		<span>
			{public_address?.slice(0, 3)}...{public_address?.slice(-4)}
		</span>
	)
}

const HeaderAccount: FC = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)
	const { width } = useScrollbarSize()
	const { connect } = useWallet()
	const { account, connector } = useActiveWeb3React()

	const [activatingConnector, setActivatingConnector] = useState()

	useEffect(() => {
		if (activatingConnector && activatingConnector === connector) {
			setActivatingConnector(undefined)
		}
	}, [activatingConnector, connector])
	const triedEager: boolean = useEagerConnect()
	useInactiveListener(!triedEager || !!activatingConnector)

	const handleConnect = useCallback(() => connect(injected), [connect])

	// const handleDisconnect = useCallback(() => disconnect(), [disconnect])

	const GlobalTheme = createGlobalStyle`
		.header {
			padding-right: ${open ? width : 0}px;
		}
	`

	const handleClick = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div ref={ref} className="header--account">
			<GlobalTheme />
			{!account ? (
				<StyledHeaderButtonGradient
					size="large"
					fullWidth
					onClick={handleConnect}>
					Connect Wallet
				</StyledHeaderButtonGradient>
			) : (
				<>
					<StyledHeaderButton
						fullWidth
						variant="text"
						onClick={handleClick}
						startIcon={
							<span className="account--avatar">
								<SvgIcon component={EmptyWalletSvg} viewBox="0 0 20 20" />
							</span>
						}
						endIcon={
							<SvgIcon component={ChevronDownSvg} viewBox="0 0 16 16" />
						}>
						<span className="account--public-address">
							<HeaderPublicAddress public_address={account} />
						</span>
					</StyledHeaderButton>
					<StyledHeaderMenu
						open={open}
						onClose={handleClose}
						anchorEl={ref.current}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						classes={{
							list: 'menu--list',
							paper: 'menu--paper',
							root: 'menu--root'
						}}>
						{/* <StyledHeaderMenuItem>
							<Link href="/download">
								<a className="menu--item">Wallet</a>
							</Link>
						</StyledHeaderMenuItem> */}
						{/* <StyledHeaderMenuItem>
							<span className="menu--item">Transactions</span>
						</StyledHeaderMenuItem> */}
						<StyledHeaderMenuItem>
							<Link href="/your-nfts">
								<a className="menu--item">Your NFTs</a>
							</Link>
						</StyledHeaderMenuItem>
						{/* <StyledHeaderMenuItem>
							<Link href="/on-sale">
								<a className="menu--item">On Sale</a>
							</Link>
						</StyledHeaderMenuItem>
						<StyledHeaderMenuItem>
							<Link href="/your-auctions">
								<a className="menu--item">Your Actions</a>
							</Link>
						</StyledHeaderMenuItem> */}
						{/* <StyledHeaderMenuItem>
							<span className="menu--item">Make a Profile</span>
						</StyledHeaderMenuItem> */}
						{/* <StyledHeaderMenuItem
							onClick={() => {
								handleDisconnect()
								handleClose()
							}}>
							<span className="menu--item">Disconnect</span>
						</StyledHeaderMenuItem> */}
					</StyledHeaderMenu>
				</>
			)}
		</div>
	)
}

export default HeaderAccount
