import React, { Component } from "react";

import Display from "./Display";
import Botoes from "./Botoes";

import "./Contador.css";
import PassoForm from "./PassoForm";

// Criando um componente de Classe
class Contador extends Component {
  // Criando um estado
  state = {
    numero: this.props.numeroInicial || 1,
    passo: this.props.passoInicial || 1,
  };

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     numero: props.numeroInicial
  //   }
  // }
  //  Utilizando o contructor para receber as props

  dec = () => {
    this.setState({ numero: this.state.numero - this.state.passo });
  };
  // Usando uma função arrow para garantir a instância do objeto

  inc = () => {
    this.setState({ numero: this.state.numero + this.state.passo });
  };
  // this.setState é uma função padrão usada para alterar o valor do state

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="contador">
        <h3>Contador</h3>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
        {/* Irá receber o valor do componente filho para alterar o valor do estado */}
        <Botoes setDec={this.dec} setInc={this.inc} />
      </div>
    );
  }
}

export default Contador;
