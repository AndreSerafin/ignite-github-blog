import { styled } from 'styled-components'

export const PostContainer = styled.main`
  width: 960px;
`
export const PostInfo = styled.div`
  min-width: 100%;
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['brand-blue']};
      font-weight: bold;
      text-decoration: none;
      gap: 0.5rem;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid;
        transition: border-bottom 0.5s;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  > div:last-child {
    display: flex;
    gap: 2rem;
    div {
      color: ${(props) => props.theme['base-span']};
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`

export const PostBody = styled.div`
`
