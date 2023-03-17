import { HeaderContainer, PostsSearchContainer, HomeContainer } from './styles'
import icon from '../../assets/icons/icon.svg'
import { ProfileCard } from '../../components/ProfileCard'
import { Post } from '../../components/Post'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <h1>
          <img src={icon} alt="" />
          GITHUB BLOG
        </h1>
      </HeaderContainer>

      <ProfileCard />

      <PostsSearchContainer>
        <div>
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>
        <input placeholder="Buscar conteúdo" />
      </PostsSearchContainer>

      <div className="post-container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </HomeContainer>
  )
}
