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
  state = {
    changed: false
  }

  // Executado uma vez montado o componente, executa apenas 1 única vez na primeira renderização.
  componentDidMount() {
    // console.log('componentDidMount executed')
  }

  /*
  Executado toda vez que o componente for atualizado, ou seja, toda vez que as props ou state forem alterados este método será chamado. 
  Não será executado na primeira renderização.
  É chamado depois do método render.
  */
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate', {
    //   currentState: this.state,
    //   prevState,
    //   prevProps,
    // })
  }

  // Executado para pegarmos os erros dos componentes filhos
  componentDidCatch(error, info) {
    // console.log('componentDidCatch', { error, info });
  }

  /* 
    Precisa retornar um booleano, é executado antes do render,
    React antes de alterar o estado mandara as informações para este método, você terá o valor atual do state antes do render, e terá acesso aos valores que substituirão os atuais,
    possibilitando que você tome uma atitude antes disso ocorrer,
    Você decide se o componente deve ser atualizado (renderize de novo) ou não através do retorno true ou false.
  */ 
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate', {
    //   currentState: this.state,
    //   nextState,
    //   // nextProps,
    // });

    return true;
  }

  // Executado quando o componente for desmontado, quando for sair da tela, será executado antes dele sair da tela.
  componentWillUnmount() {}

  render() {    
    // console.log('rendered')

    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
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
