import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

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
  // Versão clássica - sem dependência adicional do babel
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     theme: 'dark',
  //     oiTudoBem: true
  //   }
  // }

  // handleToggleTheme() {
  //   this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
  // }

  // Versão alternativa - com dependência adicional do babel para fazer a transpilação do state
  
  state = {
    theme: 'dark',
    oiTudoBem: true
  }
  
  handleToggleTheme = () => {
    this.setState(prevState => ({ 
      theme: prevState.theme === 'dark' ? 'light' : 'dark' 
    }));
  }

  render() {
    const { theme } = this.state;
    
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout 
          onToggleTheme={this.handleToggleTheme} 
          selectedTheme={theme} 
        />
      </ThemeProvider>
    )
  }
}

export default App;
