import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const CardContainer = styled(NavLink)`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  display: flex;
  max-height: 16.25rem;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
  text-decoration: none;
  height: 16.25rem;
  color: ${(props) => props.theme['base-text']};
  &:hover {
    transition: 0.5s box-shadow;
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > div {
    display: flex;
    justify-content: space-between;
    h3 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      max-width: 320px;
    }
    > span {
      font-size: 0.875rem;
    }
  }
`
