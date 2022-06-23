// App irá conter todos os componentes a serem renderizados na aplicação
import React from 'react';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

const App = () => {
  return (
    <div className="app">
      <Primeiro />
      <ComParametro nome="Gabriel" sobrenome="Roberto" idade={25}/>
    </div>
  )
}

export default App;