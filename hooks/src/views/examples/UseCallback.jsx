import React, { useState, useCallback } from "react";
import UseCallbackButtons from "./UseCallbackButtons";
import PageTitle from "../../components/layout/PageTitle";

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback((delta) => {
        setCount(current => current + delta)
    }, [setCount])
    // O useCallback irá receber uma função que só será chamada caso as dependências se alterem
    // setCOunt só será criado uma vez, dessa forma, o componente filho não será renderizado toda vez
    
  return (
    <div className="UseCallback">
      <PageTitle title="Hook UseCallback"  subtitle="Retorna uma função memoizada!" />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc}/>
      </div>
    </div>
  );
};

export default UseCallback;
