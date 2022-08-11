import { FC } from 'react'

import classNames from 'classnames'

import {
	TitleH1,
	TitleH2,
	TitleH3,
	TitleH4,
	TitleH5,
	TitleH6
} from './Title.styles'

const mapHeadingTitle = {
	h1: TitleH1,
	h2: TitleH2,
	h3: TitleH3,
	h4: TitleH4,
	h5: TitleH5,
	h6: TitleH6
}

const Title: FC<TitleProps> = ({ headingType, size, className, ...props }) => {
	const HeadingTitle = mapHeadingTitle[headingType || 'h1']
	return <HeadingTitle className={classNames(size, className)} {...props} />
}

export interface TitleProps {
	headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' // xxs : 16, xs : 24, sm : 32, md : 40, lg : 54
	className?: string
}

export default Title
