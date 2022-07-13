import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clientes = [
    new Client('Gabriel', 25, '1'),
    new Client('Claire', 32, '2'),
    new Client('Leon', 34, '3'),
    new Client('Ada', 37, '4'),
    new Client('Chris', 35, '5'),
  ]

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white">
      <Layout title="Cadastro de Usuário">
        <Table clients={clientes}></Table>
      </Layout>
    </div>
  );
}
