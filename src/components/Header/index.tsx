import { HeaderContainer } from './styles'
import logo from '../../assets/imgs/logo.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}
