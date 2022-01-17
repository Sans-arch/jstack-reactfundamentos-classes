import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes/';

/**
 * #### Props
 * Quando usamos JSX, as instâncias das classes não serão criadas com o operador `new` resultando em algo como `new App()`,
 * utilizaremos o formato de tags JSX para instanciar uma classe, por exemplo, `<App />` surtirá o mesmo efeito que ao utilizar o `new`.
 * 
 * Em Class Components, o constructor receberá como argumento todas as `props` repassadas a ele na instanciação da classe.
 * Por exemplo:
 * `<App prop1='carro' prop2={{ sentido: 'norte' }} />`
 * ---
 * #### State
 * Para criar um estado em Class Components, basta criar e atribuir um objeto à propriedade `state` que é injetada pelo React.Component diretamente na instância.
 * Ficando assim:
 * `this.state = { a: 'alguma coisa' }`
 * 
 * Para mudar o estado, o React.Component injeta um método na instância chamado `setState()`, o qual recebe uma callback que retorne um objeto que alterará o estado,
 * ele só mudara os atributos que forem repassados no objeto do argumento, os atributos que não sejam passados no argumento não sofrerão modificações no state.
 */
class App extends React.Component {
  render() {    
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

export default App;
