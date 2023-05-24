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

export function Home() {
  return (
    <HomeMain>
      <Profile>
        <img src="https://github.com/andreserafin.png" width="80" alt="" />
        <div>
          <div>
            <h1>André Pereira</h1>
            <a href="https://github.com/andreserafin">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            non? Cupiditate esse quasi dolorum? Maiores soluta.
          </p>
          <div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>andreserafin</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </div>
        </div>
      </Profile>
      <SearchForm />
      <CardsSection>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsSection>
    </HomeMain>
  )
}
