import { HeaderContainer } from './styles'
import coverImage from '../../assets/cover.png'
import icon from '../../assets/icon.svg'

export function Home() {
  return (
    <HeaderContainer>
      <img src={coverImage} alt="" />
      <h1>
        <img src={icon} alt="" />
        GITHUB BLOG
      </h1>
    </HeaderContainer>
  )
}
