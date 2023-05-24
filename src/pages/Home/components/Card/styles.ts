import { styled } from 'styled-components'

export const CardContainer = styled.section`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  display: flex;
  max-height: 16.25rem;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
  transition: outline 0.2s;
  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > div {
    display: flex;
    gap: 1rem;
    h3 {
      font-size: 1.25rem;
    }
    > span {
      font-size: 0.875rem;
      width: 80px;
    }
  }
`
