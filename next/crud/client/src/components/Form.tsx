import React, { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client;
  handleClient?: (client: Client) => void;
  cancel?: () => void;
}

const Form = (props) => {
  const id = props.client?.id ?? null;

  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? "");

  return (
    <div>
      {id ? <Input text="ID" type="text" value={id} onlyRead={true} /> : false}
      <Input
        text="Nome"
        type="text"
        value={name}
        onlyRead={false}
        handleChange={setName}
      />
      <Input
        text="Idade"
        type="number"
        value={age}
        onlyRead={false}
        handleChange={setAge}
      />
      <div className="mt-5 flex justify-end">
        <Button
          btnColor="bg-blue-500"
          onClick={() => props.handleClient?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>

        <Button btnColor="bg-gray-500" className="ml-4" onClick={props.cancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default Form;
