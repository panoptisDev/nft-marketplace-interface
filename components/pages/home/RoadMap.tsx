import { FC } from 'react'

import { Container } from '@mui/material'
import { Title } from 'components'
import styled from 'styled-components'

const RoadMapTooltipWrapper = styled.div`
	padding: 20px;
	position: relative;
	z-index: 0;
	color: #fff;
	width: 100vw;
	max-width: 320px;
	&:before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 1px;
		right: 1px;
		bottom: 1px;
		left: 1px;
		border-radius: 7px;
		background-color: ${({ theme }) => theme?.colors?.darkPurple4};
	}
	&:after {
		content: '';
		position: absolute;
		z-index: -2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 7px;
		background-image: linear-gradient(136.74deg, #1470d6 1.01%, #cf1fbd 98.87%);
	}
	.list {
		font-size: 16px;
		font-weight: 500;
		li {
			display: flex;
			margin-top: 8px;
			&:before {
				content: '';
				width: 16px;
				height: 16px;
				margin-top: 0.3em;
				margin-right: 8px;
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
				background-image: url('/images/roadmap-tick.svg');
			}
		}
	}
	@media screen and (max-width: 1700px) {
		padding: 16px;
		max-width: 270px;
		.list {
			font-size: 14px;
			li {
				display: flex;
				margin-top: 5px;
				&:before {
					width: 14px;
					height: 14px;
					margin-right: 5px;
				}
			}
		}
	}
	@media screen and (max-width: 1400px) {
		max-width: 225px;
		.list {
			font-size: 14px;
			li {
				display: flex;
				margin-top: 5px;
				&:before {
					width: 14px;
					height: 14px;
					margin-right: 5px;
				}
			}
		}
	}
	@media screen and (max-width: 992px) {
		width: 100%;
		max-width: 100%;
	}
`

const RoadMapTooltipContainer = styled.div`
	position: absolute;
	z-index: 1;
	&:before {
		content: '';
		position: absolute;
		z-index: -1;
		background-color: ${({ theme }) => theme?.colors?.pink4};
		display: block;
		width: 40px;
		height: 40px;
		transform: translate(-50%, -50%) rotate(45deg);
		transform-origin: center;
	}
	&.top {
		top: -20px;
		left: 50%;
		transform: translate(-50%, -100%);
		&:before {
			bottom: 15px;
			left: 50%;
			transform: translate(-50%, 50%) rotate(45deg);
		}
	}
	&.right {
		top: 50%;
		right: -20px;
		transform: translate(100%, -50%);
		&:before {
			top: 50%;
			left: 15px;
			transform: translate(-50%, -50%) rotate(45deg);
			background-color: ${({ theme }) => theme?.colors?.blue4};
		}
	}
	&.bottom {
		bottom: -20px;
		left: 50%;
		transform: translate(-50%, 100%);
		&:before {
			top: 15px;
			left: 50%;
			transform: translate(-50%, -50%) rotate(45deg);
			background-color: ${({ theme }) => theme?.colors?.blue4};
		}
	}
	&.left {
		top: 50%;
		left: -20px;
		transform: translate(-100%, -50%);
		&:before {
			top: 50%;
			right: 15px;
			transform: translate(50%, -50%) rotate(45deg);
		}
	}

	@media screen and (max-width: 992px) {
		&.top,
		&.right,
		&.bottom,
		&.left {
			flex: 1;
			position: relative;
			top: unset;
			right: unset;
			bottom: unset;
			left: unset;
			transform: unset;
			margin-left: 25px;
			&:before {
				top: 50%;
				left: 15px;
				transform: translate(-50%, -50%) rotate(45deg);
				background-color: ${({ theme }) => theme?.colors?.blue4};
			}
		}
	}
`

const RoadMapCircle = styled.div<{ top?: number; left?: number }>`
	position: absolute;
	z-index: 1;
	top: ${({ top }) => top || 50}%;
	left: ${({ left }) => left || 50}%;
	color: ${({ theme }) => theme?.colors?.white};
	width: 68px;
	height: 68px;
	font-size: 24px;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	cursor: pointer;
	&:before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0.3em;
		right: 0.3em;
		bottom: 0.3em;
		left: 0.3em;
		border-radius: 50%;
		background-color: ${({ theme }) => theme?.colors?.darkPurple4};
	}
	&:after {
		content: '';
		position: absolute;
		z-index: -2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 50%;
		background-image: linear-gradient(136.74deg, #1470d6 1.01%, #cf1fbd 98.87%);
	}
	@media screen and (max-width: 1700px) {
		width: 56px;
		height: 56px;
		font-size: 20px;
	}
	@media screen and (max-width: 1400px) {
		width: 46px;
		height: 46px;
		font-size: 16px;
	}
	@media screen and (max-width: 992px) {
		position: relative;
		top: unset;
		left: unset;
		width: 40px;
		height: 40px;
		transform: unset;
	}
`

const RoadMapItem = styled.div<{ top?: number; left?: number }>`
	width: 68px;
	height: 68px;
	position: absolute;
	z-index: 1;
	top: ${({ top }) => top || 50}%;
	left: ${({ left }) => left || 50}%;
	&:hover {
		z-index: 3;
	}
	@media screen and (max-width: 1700px) {
		width: 56px;
		height: 56px;
	}
	@media screen and (max-width: 1400px) {
		width: 46px;
		height: 46px;
	}
	@media screen and (max-width: 992px) {
		position: relative;
		top: unset;
		left: unset;
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		padding-top: 15px;
		padding-bottom: 15px;
		&:before {
			content: '';
			width: 7px;
			height: 100%;
			background-color: ${({ theme }) => theme?.colors?.grey4};
			position: absolute;
			left: 20px;
			transform: translateX(-50%);
		}
		&:first-child {
			&:before {
				border-top-left-radius: 7px;
				border-top-right-radius: 7px;
			}
		}
		&:last-child {
			&:before {
				border-bottom-left-radius: 7px;
				border-bottom-right-radius: 7px;
			}
		}
	}
`

const RoadMapWrapper = styled.div`
	position: relative;
	max-width: 100%;
	.roadmap-line {
		max-width: 100%;
	}
	@media screen and (max-width: 992px) {
		.roadmap-line {
			display: none;
		}
	}
`

const RoadMapContainer = styled.div`
	padding-top: 80px;
	padding-bottom: 80px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url('/images/roadmap-bg.png');
	background-color: ${({ theme }) => theme?.colors?.darkPurple4};
	.title {
		color: ${({ theme }) => theme?.colors?.white};
		text-align: center;
		margin-bottom: 169px;
	}
	@media screen and (max-width: 992px) {
		.title {
			margin-bottom: 25px;
		}
	}
`

const roadMaps = [
	{
		title: 'May 2021 - Phase 01',
		list: ['Hero NFT Sale (BEP-721)', 'Hero Marketplace'],
		top: -1.4,
		left: 19.8,
		placement: 'top'
	},
	{
		title: 'Jun 2021 - Phase 02',
		list: ['Introduce FARA token & IDO', 'Stake FARA to increase hero’s level'],
		top: 15.5,
		left: 29.5,
		placement: 'right'
	},
	{
		title: 'Jul 2021 - Phase 03',
		list: ['Hero Equipment (BEP-1155)', 'Gacha Equipment Vendor'],
		top: 42.5,
		left: 26,
		placement: 'left'
	},
	{
		title: 'Aug - Nov 2021 - Phase 04',
		list: [
			'Equipment Enhancement',
			'Equipment Marketplace',
			'DAO Governance',
			'Earn resources by deploying Hero to Expedition'
		],
		top: 54,
		left: 37.76,
		placement: 'bottom'
	},
	{
		title: 'Dec 2021 - Phase 05',
		list: [
			'Learn Skill Books',
			'Android & IOS version',
			'Hero Aren (Turn-based Strategy Combat)'
		],
		top: 42.5,
		left: 63,
		placement: 'top'
	},
	{
		title: 'Q1 2022 - Phase 06',
		list: [
			'World Map Release',
			'Land Customization & Camping System',
			'Introduce Monsters'
		],
		top: 54,
		left: 65,
		placement: 'right'
	},
	{
		title: 'Q2 2022 -  Phase 07',
		list: ['Guild Battle'],
		top: 77,
		left: 60.5,
		placement: 'right'
	}
]

export const RoadMap: FC = () => {
	return (
		<RoadMapContainer>
			<Title headingType="h2" size="md" className="title">
				Road Map
			</Title>
			<RoadMapWrapper>
				<img src="/images/roadmap-line.svg" className="roadmap-line" />
				<Container>
					{roadMaps.map(({ title, list, placement, ...restProps }, index) => (
						<RoadMapItem key={index.toString()} {...restProps}>
							<RoadMapCircle>
								{index < 10 ? `0${index + 1}` : index}
							</RoadMapCircle>
							<RoadMapTooltipContainer className={placement}>
								<RoadMapTooltipWrapper>
									<Title headingType="h4" size="xs">
										{title}
									</Title>
									<ul className="list">
										{list.map((item, _i) => (
											<li key={_i.toString()}>{item}</li>
										))}
									</ul>
								</RoadMapTooltipWrapper>
							</RoadMapTooltipContainer>
						</RoadMapItem>
					))}
				</Container>
			</RoadMapWrapper>
		</RoadMapContainer>
	)
}
