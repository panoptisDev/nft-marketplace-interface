import { FC } from 'react'

import { MainStyled } from './Main.styled'

const Main: FC = ({ ...props }) => {
	return <MainStyled {...props} />
}

export default Main
