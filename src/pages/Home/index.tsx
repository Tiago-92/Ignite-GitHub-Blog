import { HeaderContainer } from './styles'
import coverImage from '../../assets/images/cover.png'
import icon from '../../assets/icons/icon.svg'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HeaderContainer>
      <img src={coverImage} alt="" />
      <h1>
        <img src={icon} alt="" />
        GITHUB BLOG
      </h1>

      <Card />
    </HeaderContainer>
  )
}
