import { useState } from "react";
import Layout from "../components/Layout";

const integration = (props) => {
  const [code, setCode] = useState("");
  const [client, setClient] = useState({});

  const getClient = async () => {
    const resp = await fetch(`http://localhost:3000/api/clients/${code}`)
    const data = await resp.json()
    setClient(data)
    // métodos utilizando async await

    // métodos utilizando promisse
    // fetch(`http://localhost:3000/api/clients/${code}`)
    //   .then((resp) => resp.json())
    //   .then((data) => setClient(data));
  };

  return (
    <Layout title="Integração com back-end">
      <ul style={{ margin: "20px 0" }}>
        <li>ID: {client.id}</li>
        <li>Nome: {client.nome}</li>
        <li>email: {client.email}</li>
      </ul>
      <div>
        <input
          type="number"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button onClick={getClient}>Receber Cliente</button>
      </div>
    </Layout>
  );
};

export default integration;
