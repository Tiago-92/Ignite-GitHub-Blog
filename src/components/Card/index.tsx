import { CardContainer } from './styles'
import avatar from '../../assets/images/avatar.png'
import arrowUp from '../../assets/icons/arrow-up.svg'
import github from '../../assets/icons/github.svg'
import building from '../../assets/icons/building.svg'
import userGroup from '../../assets/icons/user-group.svg'

export function Card() {
  return (
    <CardContainer>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>

      <div className="profile">
        <div className="name">
          <p>Cameron Williamson</p>
          <button>
            GITHUB
            <img src={arrowUp} alt="" />
          </button>
        </div>

        <div className="description">
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div className="links">
            <span>
              <img src={github} alt="" />
              cameronwll
            </span>
            <span>
              <img src={building} alt="" />
              Rocketseat
            </span>
            <span>
              <img src={userGroup} alt="" />
              32 seguidores
            </span>
          </div>
        </div>
      </div>
    </CardContainer>
  )
}
