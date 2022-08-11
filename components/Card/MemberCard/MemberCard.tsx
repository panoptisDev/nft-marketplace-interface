import Image from 'next/image'
import Link from 'next/link'

import { MemberCardProps } from '.'
import {
	AvatarWrap,
	MemberCardWrap,
	SocialLink,
	SocialWrap,
	SvgIconCustom
} from './MemberCard.styled'

function MemberCard({ member }: MemberCardProps) {
	return (
		<MemberCardWrap>
			<AvatarWrap>
				<Image
					priority
					src={member.avatarSrc}
					alt="Huta Web Logo"
					layout="fill"
					objectFit="contain"
					objectPosition="center center"
				/>
			</AvatarWrap>
			<div className="member-name">
				<h3>{member.name}</h3>
			</div>
			<div className="member-role">
				<h4>{member.role}</h4>
			</div>

			<SocialWrap>
				{member.socials.map((item, index) => {
					return (
						<Link key={index} href={item.href} passHref>
							<SocialLink>
								<SvgIconCustom {...item} inheritViewBox />
								{/* <SvgIconCustom component={item.icon} inheritViewBox /> */}
							</SocialLink>
						</Link>
					)
				})}
			</SocialWrap>
		</MemberCardWrap>
	)
}

export default MemberCard
