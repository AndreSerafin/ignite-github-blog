import { styled } from 'styled-components'
import coverImage from '../../assets/imgs/cover-header.png'
export const HeaderContainer = styled.header`
  width: 100vw;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${coverImage});
  background-size: cover;
  background-position: center;

  img {
    margin-top: 4rem;
    width: 9.25rem;
  }
`
