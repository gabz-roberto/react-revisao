import {useState, useEffect} from 'react';
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../firebase/database/ClientCollection";

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.default());
  const [clients, setClients] = useState<Client[]>([]);
  const repo: ClientRepository = new ClientCollection();

  useEffect(() => {
    receiveAll;
  }, []);

  const receiveAll = () => {
    repo.getAll().then((clients) => {
      setClients(clients);
      setVisible("table");
    });
  };

  const saveClient = async (client: Client) => {
    await repo.save(client);
    receiveAll();
  };

  const newClient = () => {
    setClient(Client.default());
    setVisible("form");
  };

  const clientSelected = (client: Client) => {
    setClient(client);
    setVisible("form");
  };

  const clientDeleted = (client: Client) => {
    console.log(`Deletado: ${client.name}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white">
      <Layout title="Cadastro de Usuário">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button
                btnColor="bg-green-500"
                className="my-4"
                onClick={newClient}
              >
                Cadastrar
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            cancel={() => setVisible("table")}
            handleClient={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
