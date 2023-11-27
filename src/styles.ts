import { createGlobalStyle } from 'styled-components'
export const cores = {
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
    list-style: none;
  }

  body {
    background: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .Container {
      max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
