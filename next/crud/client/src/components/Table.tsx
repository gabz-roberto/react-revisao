import React from "react";
import Client from "../core/Client";
import { DeleteIcon, EditIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
}

const Table = (props) => {
  const showOptions = props.clientSelected || props.clientDeleted;

  const renderHeader = () => {
    return (
      <tr className="text-left">
        <th className="p-4 text-left">ID</th>
        <th className="p-4 text-left">Nome</th>
        <th className="p-4 text-left">Idade</th>
        {showOptions ? <th className="p-4">Opções</th> : false}
      </tr>
    );
  };

  const renderData = () => {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-blue-200" : "bg-blue-100"}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showOptions ? renderOptions(client) : false}
        </tr>
      );
    });
  };

  const renderOptions = (client: Client) => {
    return (
      <td className="flex justify-center">
        {props.clientSelected ? (
          <button
            className="flex justify-center text-green-700 rounded-full hover:bg-blue-300 p-1 m-1"
            onClick={() => props.clientSelected?.(client)}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}

        {props.clientDeleted ? (
          <button
            className="flex justify-center  text-red-700 rounded-full hover:bg-blue-300 p-1 m-1"
            onClick={() => props.clientDeleted?.(client)}
          >
            {DeleteIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  };

  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead className="bg-blue-600 text-white">{renderHeader()}</thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};

export default Table;
