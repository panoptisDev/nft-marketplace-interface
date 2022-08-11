import { FC } from 'react'

import { Container, Divider, Grid } from '@mui/material'
import styled from 'styled-components'
import { Section } from 'styles'

const InfoItem = styled.div`
	text-align: center;
	.number {
		font-size: 32px;
		font-weight: 600;
		line-height: 1.4;
	}
	.title {
		margin-bottom: 0;
		color: ${({ theme }) => theme?.colors?.grey4};
		font-size: 16px;
		line-height: 1.75;
	}
	@media screen and (max-width: 1700px) {
		.number {
			font-size: 26px;
		}
		.title {
			font-size: 14px;
		}
	}
	@media screen and (max-width: 1400px) {
		.number {
			font-size: 21px;
		}
	}
`

const GridInfoRow = styled.div`
	position: relative;
	z-index: 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 30px 60px;
	&:before {
		position: absolute;
		z-index: -2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(
			136.74deg,
			${({ theme }) => theme?.colors?.blue4} 1.01%,
			${({ theme }) => theme?.colors?.pink4} 98.87%
		);
		border-radius: ${({ theme }) => theme?.borderRadiusBase};
		content: '';
	}
	&:after {
		position: absolute;
		z-index: -1;
		top: 1px;
		right: 1px;
		bottom: 1px;
		left: 1px;
		border: 1px solid transparent;
		background-color: ${({ theme }) => theme?.colors?.darkGrey4};
		border-radius: ${({ theme }) => theme?.borderRadiusBase};
		content: '';
	}
	.divider {
		border-color: ${({ theme }) => theme?.colors?.grey4};
		margin-right: 70px;
		margin-left: 70px;
	}
	.grid-info-col {
		flex: 1;
	}
	@media screen and (max-width: 1700px) {
		padding: 25px 50px;
		.divider {
			margin-right: 20px;
			margin-left: 20px;
		}
	}
	@media screen and (max-width: 1400px) {
		padding: 20px 40px;
		.divider {
			margin-right: 15px;
			margin-left: 15px;
		}
	}
	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		padding: 30px 34px;
		.divider {
			width: 100%;
			height: 1px;
			border-bottom: 1px solid;
			margin: 25px 0;
			opacity: 0.12;
		}
		.grid-info-col {
			width: 100%;
			flex: auto;
		}
	}
`

export const InfoNumber: FC = () => {
	return (
		<Section className="homepage-info-number">
			<Container>
				<Grid container columns={12} justifyContent="center">
					<Grid item sm={10} xs={11}>
						<GridInfoRow>
							<div className="grid-info-col">
								<InfoItem>
									<p className="number">2918</p>
									<p className="title">Registered Domain</p>
								</InfoItem>
							</div>
							<Divider
								className="divider"
								orientation="vertical"
								variant="fullWidth"
								flexItem
							/>
							<div className="grid-info-col">
								<InfoItem>
									<p className="number">213</p>
									<p className="title">Registered TLD’s</p>
								</InfoItem>
							</div>
							<Divider
								className="divider"
								orientation="vertical"
								variant="fullWidth"
								flexItem
							/>
							<div className="grid-info-col">
								<InfoItem>
									<p className="number">1882</p>
									<p className="title">Holders</p>
								</InfoItem>
							</div>
						</GridInfoRow>
					</Grid>
				</Grid>
			</Container>
		</Section>
	)
}
