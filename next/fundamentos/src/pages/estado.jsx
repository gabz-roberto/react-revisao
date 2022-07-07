import { useState } from "react";
import Layout from "../components/Layout";

const Estado = (props) => {
  const [count, setCount] = useState(0);

  const decrementar = () => {
    setCount(count - 1);
  };

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <Layout title="Componente com Estado">
      <h2>{count}</h2>
      <div>
        <button onClick={decrementar}>- 1</button>
        <button onClick={incrementar}>+ 1</button>
      </div>
    </Layout>
  );
};

export default Estado;
