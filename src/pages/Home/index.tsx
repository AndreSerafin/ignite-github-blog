import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardsSection, HomeMain, Profile } from './styles'
import { SearchForm } from './components/SearchForm'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card } from './components/Card'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export function Home() {
  const { postsData, userData } = useContext(GlobalContext)
  return (
    <HomeMain>
      <Profile>
        <img src={userData.avatar_url} width="80" alt="" />
        <div>
          <div>
            <h1>{userData.name}</h1>
            <NavLink to={userData.html_url}>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </div>
          <p>{userData.bio}</p>
          <div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{userData.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{userData.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{userData.followers}</span>
            </div>
          </div>
        </div>
      </Profile>
      <SearchForm />
      <CardsSection>
        {postsData.map((postData) => {
          return (
            <Card
              key={postData.createdAt}
              body={postData.body}
              createdAt={postData.createdAt}
              title={postData.title}
              numberOfComments={postData.numberOfComments}
            />
          )
        })}
      </CardsSection>
    </HomeMain>
  )
}
