import React, { useState, useMemo } from "react";
import PageTitle from "../../components/layout/PageTitle";

const sum = (a, b) => {
  const future = Date.now() + 2000;
  while (Date.now() < future) {} // Espera 2s
  return a + b;
};

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  /*  const [result, setResult] = useState(0);
    useEffect(() => {
      setResult(sum(n1, n2));
    }, [n1, n2]);
  */
  // Usando useState + useEffect é possível só monitorar as mudanças em n1 e n2

  const result = useMemo(() => sum(n1, n2), [n1, n2]);
  // Os valores são calculados, armazenados e só serão chamados quando as dependências forem atualizadas

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado! Simulando um cache." />

      <div className="center">
        <input type="number" className="input" value={n1} onChange={(e) => setN1(Number(e.target.value))} />
        <input type="number" className="input" value={n2} onChange={(e) => setN2(Number(e.target.value))} />
        <input type="number" className="input" value={n3} onChange={(e) => setN3(Number(e.target.value))} />

        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
