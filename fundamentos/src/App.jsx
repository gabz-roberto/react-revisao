// App irá conter todos os componentes a serem renderizados na aplicação
import React from "react";
import Aleatorio from "./components/basicos/Aleatorio";

import "./App.css";

import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import ReactFragment from "./components/basicos/ReactFragment";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";

const App = () => {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>

      <div className="cards">

        <Card title="#08 - Renderização Condicional" color="#ED584E">
          <ParOuImpar numero={19}/>
        </Card>

        <Card title="#07 - Desafio Repetição" color="#006B14">
          <TabelaProdutos />
        </Card>

        <Card title="#06 - Repetição" color="#7300A8">
          <ListaAlunos />
        </Card>

        <Card title="#05 - Componente com Filhos" color="#3E00A8">
          <Familia sobrenome="Stark">
            <FamiliaMembro nome="Bran" />
            <FamiliaMembro nome="Arya" />
            <FamiliaMembro nome="Sansa" />
          </Familia>
        </Card>

        <Card title="#04 - Aleatório" color="#0098A6">
          <Aleatorio min={1} max={10} />
        </Card>

        <Card title="#03 - Fragmento" color="#006658">
          <ReactFragment />
        </Card>

        <Card title="#02 - Componente com Parâmetro" color="#005BA6">
          <ComParametro nome="Gabriel" sobrenome="Roberto" idade={25} />
        </Card>

        <Card title="#01 - Primeiro Componente" color="#0019A8">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};

export default App;
