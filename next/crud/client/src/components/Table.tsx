import React from "react";
import Client from "../core/Client";
import { DeleteIcon, EditIcon } from "./Icons";

interface TableProps {
  clients: Client[];
}

const Table = (props) => {

  const renderHeader = () => {
    return (
      <tr className="text-left">
        <th className="p-4 text-left">ID</th>
        <th className="p-4 text-left">Nome</th>
        <th className="p-4 text-left">Idade</th>
        <th className="p-4">Opções</th>
      </tr>
    );
  };

  const renderData = () => {
    return props.clients?.map((client, i) => {
        return (
            <tr key={client.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                <td className="text-left p-4">{client.id}</td>
                <td className="text-left p-4">{client.name}</td>
                <td className="text-left p-4">{client.age}</td>
                {renderOptions(client)}
            </tr>
        )
    })
  }

  const renderOptions = (client: Client) => {
    return (
        <td>
            <button>{EditIcon}</button>
            <button>{DeleteIcon}</button>
        </td>
    )
  }

  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead className="bg-blue-600 text-white">
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  );
};

export default Table;
