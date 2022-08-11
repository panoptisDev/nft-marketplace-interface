import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, ButtonProps, Container } from '@mui/material'
import { Title } from 'components'
import { DomainCard, DomainCardProps } from 'components/Card/DomainCard'
import styled from 'styled-components'

const ButtonMore = styled(Button)`
	border: 1px solid ${({ theme }) => theme?.colors?.white};
	background-color: ${({ theme }) => theme?.colors?.darkPurple4};
	line-height: 1.4;
	padding: 13px 24px;
	&:hover {
		background: linear-gradient(310deg, #268d94 25%, #417b52 100%);
	}
	&.MuiButton-endIcon {
		> *:nth-of-type(1) {
			font-size: 16px !important;
		}
	}
`

const TitleContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 40px;
	.title {
		flex: 1;
		margin-bottom: 0;
	}
	@media screen and (max-width: 768px) {
		margin-bottom: 30px;
		.title {
			text-align: center;
		}
		${ButtonMore} {
			display: none;
		}
	}
`

const DomainCarouselFooter = styled.div`
	display: none;
	margin-top: 30px;
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
	}
`

const DomainCarouselContainer = styled(Container)`
	@media screen and (max-width: 576px) {
		padding-right: 0;
		padding-left: 0;
		.domain-carousel {
			padding-right: 46px;
			padding-left: 46px;
		}
	}
`

export const DomainCarousel: FC<DomainCarouselProps> = ({
	title,
	domains,
	buttonMoreProps
}) => {
	return (
		<DomainCarouselContainer>
			<TitleContainer>
				<Title size="md" className="title">
					{title}
				</Title>
				{buttonMoreProps && (
					<ButtonMore variant="contained" size="large" {...buttonMoreProps} />
				)}
			</TitleContainer>
			<Swiper
				className="domain-carousel"
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
						centeredSlides: true
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
						centeredSlides: false
					}
				}}>
				{domains?.map((domain, index) => (
					<SwiperSlide key={index.toString()}>
						<DomainCard {...domain} />
					</SwiperSlide>
				))}
			</Swiper>
			<DomainCarouselFooter>
				{buttonMoreProps && (
					<ButtonMore variant="contained" size="large" {...buttonMoreProps} />
				)}
			</DomainCarouselFooter>
		</DomainCarouselContainer>
	)
}

export interface DomainCarouselProps {
	title?: string
	domains?: Array<DomainCardProps>
	buttonMoreProps?: Omit<ButtonProps, 'variant' | 'size'>
}
