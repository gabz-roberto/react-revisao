import React, { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client;
}

const Form = (props) => {
  const id = props.client?.id ?? null;

  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? '');

  return (
    <div>
      {id ? <Input text="ID" type="text" value={id} onlyRead={true} /> : false}
      <Input text="Nome" type="text" value={name} onlyRead={false} handleChange={setName}/>
      <Input text="Idade" type="number" value={age} onlyRead={false} handleChange={setAge}/>
    </div>
  );
};

export default Form;
