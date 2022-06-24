import React, { cloneElement } from "react";

const Familia = (props) => {
    console.log(props)
  return (
    <div>
      {
        props.children.map((child, i) => {
          return cloneElement(child, { ...props, key: i });
        })
        // Clonando os componentes filhos diretamente e passando suas props
      }
    </div>
  );
};

export default Familia;
