import React, { Component } from 'react';

class Aba2 extends Component {
  state = {
    texto : ''
  }

  enviar = e => {
    e.preventDefault();
    this.setState({ texto : e.target.texto.value });
  }

  render (){
    return (
      <div>
        <form id="form" onSubmit={this.enviar}>
          <p>Digite um texto:</p>
          <input name="texto" type="text"/>
          <button>ok</button>
        </form>
        <p>Texto: {this.state.texto}</p>
      </div>
    );
  }
}

export default Aba2;
