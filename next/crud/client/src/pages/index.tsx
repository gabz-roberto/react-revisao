import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clientes = [
    new Client("Gabriel", 25, "1"),
    new Client("Claire", 32, "2"),
    new Client("Leon", 34, "3"),
    new Client("Ada", 37, "4"),
    new Client("Chris", 35, "5"),
  ];

  const clientSelected = (client: Client) => {
    console.log(`Selecionado: ${client.name}`);
  };

  const clientDeleted = (client: Client) => {
    console.log(`Deletado: ${client.name}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white">
      <Layout title="Cadastro de Usuário">
        <div className="flex justify-end">
          <Button className="my-4">Cadastrar</Button>
        </div>
        {/* <Table
          clients={clientes}
          clientSelected={clientSelected}
          clientDeleted={clientDeleted}
        ></Table> */}
        <Form />
      </Layout>
    </div>
  );
}
