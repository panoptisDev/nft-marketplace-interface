import { useState } from 'react'

import Image from 'next/image'

// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Modal } from '@mui/material'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { createAuction, createFixedPrice } from 'utils/callContract'

import { YourNFTCardProps } from '.'
import {
	// ButtonSetting,
	OnSaleWrap, // YourDomainCardName,
	YourDomainCardWrap
} from './YourDomainCard.styled'

function YourDomainCard({ id, tokenURI }: YourNFTCardProps) {
	const { account, library } = useActiveWeb3React()
	// fixed price
	const [open, setOpen] = useState<boolean>(false)
	const [price, setPrice] = useState<string>('')
	// auction
	const [openAuction, setOpenAuction] = useState<boolean>(false)
	const [startPrice, setStartPrice] = useState<string>('')
	const [minBidIncrement, setMinBidIncrement] = useState<string>('')
	const [duration, setDuration] = useState<string>('')

	// const handleChange = (_: SyntheticEvent<Element, Event>, value: DOMAIN) => {
	// 	setTab(value)
	// }

	// handle auction modal
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	// handle auction modal
	const handleOpenAuction = () => setOpenAuction(true)
	const handleCloseAuction = () => setOpenAuction(false)

	const handleCreateFixedPrice = async () => {
		if (!account || !library) return alert('connect wallet before')
		if (!price) return alert('enter price and duration')

		try {
			await createFixedPrice(library, account, id, price)
			alert('Create fixed price success')
		} catch (error: any) {
			alert(error.message)
		}
	}

	const handleCreateAuction = async () => {
		if (!account || !library) return alert('connect wallet before')
		if (!startPrice || !duration) return alert('enter price and duration')

		try {
			await createAuction(
				library,
				account,
				id,
				startPrice,
				minBidIncrement,
				duration
			)
			alert('create auction success')
		} catch (error: any) {
			alert(error.message)
		}
	}

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<div>
					<input
						placeholder="price"
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<button onClick={handleCreateFixedPrice}>create fixed price</button>
				</div>
			</Modal>
			<Modal
				open={openAuction}
				onClose={handleCloseAuction}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<div>
					<input
						placeholder="start price"
						value={startPrice}
						onChange={(e) => setStartPrice(e.target.value)}
					/>
					<input
						placeholder="min bid increment"
						value={minBidIncrement}
						onChange={(e) => setMinBidIncrement(e.target.value)}
					/>
					<input
						placeholder="duration (days)"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
					/>
					<button onClick={handleCreateAuction}>create auction</button>
				</div>
			</Modal>
			<YourDomainCardWrap>
				<div className="yd-card-left">
					{/* <YourDomainCardName>{tokenURI}</YourDomainCardName> */}
					<Image src={tokenURI} alt="nft" height={400} width={400} />
					<OnSaleWrap>
						<button onClick={handleOpen}>create fixed price</button>
						<button onClick={handleOpenAuction}>create auction</button>
						{/* <span className="sale-title">On sale</span>
						<Switch /> */}
					</OnSaleWrap>
				</div>

				{/* <ButtonSetting
					variant="contained"
					size="medium"
					endIcon={<SettingsOutlinedIcon />}
				/> */}
			</YourDomainCardWrap>
		</>
	)
}

export default YourDomainCard
