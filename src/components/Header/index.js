import React from 'react';

import { Container } from './styles';

/**
 * Em Class Components, as props são injetadas pelo `React.Component` dentro da instância da classe criada.
 * As `props` serão um objeto, todos os métodos ou atributos que você queira obter, terá que acessar através da notação ponto.
 */
export default class Header extends React.Component {
  render() {
    const { onToggleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    )
  }
}
