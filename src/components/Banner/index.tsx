import { Typography } from '@mui/material'
import * as S from './styles'

export interface IBannerProps {
  backgroundurl: string
  text: any
}

const Banner = (props: IBannerProps) => { 
  const {backgroundurl, text} = props
  return(
  <S.Banner backgroundurl={backgroundurl}>
    <Typography fontSize={48} color={'white'} dangerouslySetInnerHTML={{ __html: text }}
   />
  </S.Banner>
)}

export default Banner
