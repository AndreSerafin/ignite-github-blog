import { HeaderContainer } from './styles'
import logo from '../../assets/imgs/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
