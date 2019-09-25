import React, { Component } from 'react';
import Aba1 from './Aba1';
import Aba2 from './Aba2';
import Aba3 from './Aba3';

class App extends Component {
  state = {
    aba: 1
  }

  mudaAba = (newAba, e) => {
    //console.log(e.target);
    this.setState({
      aba: newAba
    });
  }
  cssAba = (op) => {
    if(this.state.aba == op)
      return {backgroundColor: "orange"};
    else
      return {backgroundColor: "yellow"};
  }

  render (){
    var conteudo = <Aba1 />;
    if(this.state.aba == 1){
      conteudo = <Aba1 />;
    }else if(this.state.aba == 2){
      conteudo = <Aba2 />;
    }else if(this.state.aba == 3){
      conteudo = <Aba3 />;
    }

    return (
      <div id="principal">
        <nav>
          <ul>
            <li style={this.cssAba(1)}><a onClick={(e) => this.mudaAba(1, e)} href="#">Itens Lista</a></li>
            <li style={this.cssAba(2)}><a onClick={(e) => this.mudaAba(2, e)} href="#">Exibe Texto</a></li>
            <li style={this.cssAba(3)}><a onClick={(e) => this.mudaAba(3, e)} href="#">Espelha Texto</a></li>
          </ul>
        </nav>
        <div id="conteudo">{conteudo}</div>        
      </div>
    );
  }
}

export default App;
