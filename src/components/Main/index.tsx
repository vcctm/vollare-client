import * as S from './styles'
import Header from 'components/Header'
import Banner from 'components/Banner'
import PlaneBackground from 'assets/images/PlaneBannerBackground.png'
import { BANNER_TEXTS } from './CONTANTS'
import Form from 'components/Form'

const Main = () => (
  <S.Wrapper>
    <Header />
    <Banner backgroundurl={PlaneBackground} text={BANNER_TEXTS.PLANE} />
    <Form/>
  </S.Wrapper>
)

export default Main
