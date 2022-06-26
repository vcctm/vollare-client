import { Typography } from '@mui/material'
import Logo from 'components/Logo'
import * as S from './styles'

interface IHeaderProps {}

const Header = (props: IHeaderProps) => (
  <S.Wrapper>
    <Logo/>
  </S.Wrapper>
)

export default Header
