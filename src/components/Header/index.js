import React, { Component } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

/**
 * Em Class Components, as props são injetadas pelo `React.Component` dentro da instância da classe criada.
 * As `props` serão um objeto, todos os métodos ou atributos que você queira obter, terá que acessar através da notação ponto.
 */
// render props
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ handleToggleTheme, theme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button
              type="button"
              onClick={handleToggleTheme}
            >
              {theme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    )
  }
}
 