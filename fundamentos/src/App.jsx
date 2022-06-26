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
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/controlado/Input";

const App = () => {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>

      <div className="cards">

        <Card title="#11 - Componente Controlado" color="#FF6C00">
          <Input />
        </Card>

        <Card title="#10 - Comunicação Indireta" color="#220001">
          <IndiretaPai />
        </Card>

        <Card title="#09 - Comunicação Direta" color="#BB0101">
          <DiretaPai />
        </Card>

        <Card title="#08 - Renderização Condicional" color="#ED584E">
          <ParOuImpar numero={19}/>
          <UsuarioInfo usuario={{nome: 'Gabriel'}}/>
          <UsuarioInfo usuario={{}}/>
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
