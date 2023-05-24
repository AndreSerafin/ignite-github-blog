import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
    }
  }
  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 1rem 0.75rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
  }
`
