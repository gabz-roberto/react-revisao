import React from "react";

import "./Card.css";

const Card = ({ title, children, color }) => {
  // Recebendo uma cor como parâmetro
  const style = {
    backgroundColor: color || 'gray',
    borderColor: color || 'gray',
  };
  // Atribuindo o style de um elemento com parâmetros recebidos

  return (
    <div className="card" style={style}>
      <h2 className="title">{title}</h2>
      <div className="content">
        {children}
        {/* Renderiza elementos filhos contidos dentro do componente */}
      </div>
    </div>
  );
};

export default Card;
