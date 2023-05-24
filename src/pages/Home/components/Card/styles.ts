import { styled } from 'styled-components'

export const CardContainer = styled.section`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  > div {
    display: flex;
    gap: 1rem;
    > span {
      font-size: 0.875rem;
    }
  }
`
