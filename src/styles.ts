import { createGlobalStyle } from 'styled-components'
const cores = {
  branca: '#eeeeee',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84'
}
export const GlobalCSS = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${cores.preto};
    color: ${cores.branca};
  }
`
