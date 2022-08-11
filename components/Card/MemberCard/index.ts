import { ReactNode } from 'react'

import MemberCard from './MemberCard'

export interface SocialProps {
	component: ReactNode
	href: string
}

export interface MemberProps {
	avatarSrc: string
	name: string
	role: string
	socials: Array<SocialProps>
}

export interface MemberCardProps {
	member: MemberProps
}

export { MemberCard }
