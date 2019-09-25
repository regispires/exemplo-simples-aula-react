import React, { Component } from 'react';

class Aba3 extends Component {
  state = {
    texto : ''
  }

  enviar = e => {
    this.setState({ texto : e.target.value });
  }

  render (){
    return (
        <div>
            <p>Digite um texto:</p>
            <input onChange={this.enviar} name="texto" type="text"/>
            <p>Texto: {this.state.texto}</p>
        </div>
    );
  }
}

export default Aba3;
