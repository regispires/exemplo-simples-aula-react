import React, { Component } from 'react';

class Aba1 extends Component {
  state = {
    lista : []
  }

  enviar = e => {
    e.preventDefault();
    var texto = e.target.texto.value;
    this.setState(function(state){
      return { lista : [...state.lista, texto]};
    });
  }



  render (){
    return (
        <div>
            <form id="form" onSubmit={this.enviar}>
            <p>Digite um item:</p>
            <input name="texto" type="text"/>
            <button>ok</button>
            </form>
            <ul>
            {this.state.lista.map(function(item){
                return <li>{item}</li>;
            })}
            </ul>
        </div>
    );
  }
}

export default Aba1;