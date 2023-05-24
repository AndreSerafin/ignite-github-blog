import { NavLink } from 'react-router-dom'
import { PostContainer, PostInfo } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <div>
          <NavLink to="/">VOLTAR</NavLink>
          <NavLink to="/">
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>andreserafin</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>32 seguidores</span>
          </div>
        </div>
      </PostInfo>
    </PostContainer>
  )
}
