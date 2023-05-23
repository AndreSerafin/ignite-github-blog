import { styled } from 'styled-components'
import coverImage from '../../assets/imgs/cover-header.png'
export const HeaderContainer = styled.header`
  width: 100vw;
  height: 296px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${coverImage});
  background-size: contain;

  > img {
    border: 2px red solid;
    width: 9.25rem;
  }
`
