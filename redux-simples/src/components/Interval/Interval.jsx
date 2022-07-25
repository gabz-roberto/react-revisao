import React from "react";
import Card from "../Card/Card";

import "./Interval.css";

const Interval = () => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="interval">
        <span>
          <strong>Mínimo: </strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  );
};

export default Interval;
