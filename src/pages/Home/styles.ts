import { styled } from 'styled-components'

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 960px;
`

export const Profile = styled.div`
  width: 100%;
  margin-top: -5rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  display: flex;
  gap: 2rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    > div:first-child {
      > h1 {
        font-size: 1.5rem;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;

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
    > p {
      max-width: 38.25rem;
    }
    > div:last-child {
      display: flex;
      gap: 1.25rem;
      > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`
export const CardsSection = styled.section`
  margin-top: 3rem;
  margin-bottom: 14.625rem;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
