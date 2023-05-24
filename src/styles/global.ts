import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    overflow-x: hidden;
}

button, input {
    border: 0;
    background: transparent;
    outline: none;
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;

    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['brand-blue']};
    }
}

body, input, text-area, button {
    font-family: "Nunito";
}

::-webkit-scrollbar-track {
    background: ${(props) => props.theme['base-profile']};;
}
::-webkit-scrollbar {
    width: 6px;
    background: ${(props) => props.theme['base-input']};;
}
::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #020f19;
}
`
