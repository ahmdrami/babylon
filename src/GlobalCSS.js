import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Lato', sans-serif;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  textarea, input {
    outline: none;
    transition: border-color .3s;
    &:focus {
      border-color: ${({ theme }) => theme.colors.positive};
    }
  }

`
