import React, { useRef, useState } from "react";
import { useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = (str1, str2) => {
    return str1 + str2
}

const UseRef = (props) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('')
  const count = useRef(0)
  const myInput1 = useRef(null)
  const myInput2 = useRef(null)
  // Setando o atributo current dentro do objeto retornado
  // Como o valor é passado por referência, o componente não é atualizado toda vez

  useEffect(() => {
    count.current = count.current + 1;
    myInput2.current.focus()
  }, [value1, value2])
  // Quando o value1 for alterado, é possível alterar o valor de current

  useEffect(() => {
    count.current++;
    myInput1.current.focus()
  }, [value2])

  console.log(myInput1.current)
  return (
    <div className="UseRef">
      <PageTitle title="Hook UseRef" subtitle="Retorna um objeto mutável com a propriedade .current!" />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
            <span className="text">Valor: </span>
            <span className="text">{merge(value1, value2)} [</span>
            <span className="text red">{count.current}</span>
            <span className="text">]</span>
        </div>
        <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} ref={myInput1}/>
        {/* O parâmetro ref aponta para uma referência do objeto, tendo como capturar o value do input */}
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <input type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} ref={myInput2}/>
      </div>
    </div>
  );
};

export default UseRef;
