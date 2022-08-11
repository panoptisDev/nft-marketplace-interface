import { FC } from 'react'

import { Container, Grid, GridProps } from '@mui/material'
import classNames from 'classnames'
import { TitleProps } from 'components/Title/Title'

import {
	TopPageBackdrop,
	TopPageBlur,
	TopPageContainer,
	TopPageContent,
	TopPageInner,
	TopPageTitle,
	TopPageWrapper,
	TopPagebackdropImage
} from './TopPage.styled'

const TopPage: FC<TopPageProps> = ({
	size,
	className,
	title,
	titleProps,
	bgSrc,
	bgGradient,
	containerProps,
	itemProps,
	children,
	...restProps
}) => {
	return (
		<TopPageContainer className={`${size} ${className}`} {...restProps}>
			<TopPageBackdrop>
				{typeof bgSrc === 'string' ? (
					<TopPagebackdropImage src={bgSrc} />
				) : (
					<>
						{bgSrc?.desktop && (
							<TopPagebackdropImage
								src={bgSrc.desktop}
								className="topPage-img topPage-img-desktop desktop"
							/>
						)}
						{bgSrc?.mobile && (
							<TopPagebackdropImage
								src={bgSrc.mobile}
								className="topPage-img  topPage-img-mobile mobile"
							/>
						)}
					</>
				)}
				{!bgGradient && (
					<>
						<TopPageBlur
							width="23%"
							bgColor="#1470D6"
							top="10%"
							left="76%"
							filter="400px"
						/>
						<TopPageBlur
							width="23%"
							bgColor="#CF1FBD"
							top="80%"
							left="82%"
							filter="400px"
						/>
						<TopPageBlur
							width="28.2%"
							paddingTop="40%"
							bgColor="#1470D6"
							borderRadius="0"
							top="110%"
							left="42%"
							filter="300px"
						/>
						<TopPageBlur
							width="28.2%"
							paddingTop="40%"
							bgColor="#CF1FBD"
							borderRadius="0"
							top="1%"
							left="42%"
							filter="300px"
						/>
						<TopPageBlur
							width="12%"
							bgColor="#1470D6"
							top="44%"
							left="15%"
							filter="200px"
						/>
						<TopPageBlur
							width="23%"
							bgColor="#CF1FBD"
							top="81%"
							left="1%"
							filter="400px"
						/>
						<TopPageBlur
							width="16.4%"
							bgSrc="/images/toppage-circle.svg"
							top="18%"
							left="0%"
						/>
					</>
				)}
				{bgGradient}
			</TopPageBackdrop>
			<TopPageWrapper>
				<Container>
					<Grid
						container
						columns={12}
						justifyContent={'center'}
						{...containerProps}
						className={classNames(
							'topPage--container',
							containerProps?.className
						)}>
						<Grid
							item
							lg={8}
							md={9}
							sm={10}
							{...itemProps}
							className={classNames('topPage--item', itemProps?.className)}>
							<TopPageInner className="topPage--inner">
								{title && (
									<TopPageTitle
										{...titleProps}
										className={classNames(
											'topPage--title',
											titleProps?.className
										)}>
										{title}
									</TopPageTitle>
								)}
								<TopPageContent>{children}</TopPageContent>
							</TopPageInner>
						</Grid>
					</Grid>
				</Container>
			</TopPageWrapper>
		</TopPageContainer>
	)
}

interface TopPageBGSrcProps {
	desktop: string
	mobile: string
}

export interface TopPageProps {
	size?: 'lg' | 'md' | 'sm'
	className?: string
	title?: string
	titleProps?: TitleProps
	bgSrc?: string | TopPageBGSrcProps
	bgGradient?: React.ReactNode | JSX.Element
	itemProps?: GridProps
	containerProps?: GridProps
}

export default TopPage
